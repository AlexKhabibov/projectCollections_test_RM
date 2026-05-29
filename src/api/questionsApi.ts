import type { LoaderFunctionArgs } from "react-router-dom";
import type { GetQuestionsListResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getQuestionsList = async ({
    request,
}: LoaderFunctionArgs): Promise<GetQuestionsListResponse> => {

    const url = new URL(request.url);

    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";
    const search = url.searchParams.get("search") || "";
    const collectionId = url.searchParams.get("collectionId") || "";

    const params = new URLSearchParams({
        page,
        limit,
    });

    if (search) {
        params.set("title", search);
    }

    if (collectionId) {
        params.set("collectionId", collectionId);
    }

    const response = await fetch(
        `${BASE_URL}/questions/public-questions?${params.toString()}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result = await response.json();

    console.log("API RESULT:", result);

    return result;
};