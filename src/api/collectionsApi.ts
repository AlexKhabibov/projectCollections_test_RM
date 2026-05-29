import type { LoaderFunctionArgs } from "react-router-dom";
import { BASE_URL } from "./baseApi";

export const getCollectionsList = async ({
    request,
}: LoaderFunctionArgs) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";

    const params = new URLSearchParams({ page, limit });

    const response = await fetch(
        `${BASE_URL}/collections/public?${params.toString()}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    return response.json();
};