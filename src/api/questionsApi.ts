import type { LoaderFunctionArgs } from "react-router-dom";
import type { GetQuestionsListResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getQuestionsList = async ({
    request,
}: LoaderFunctionArgs): Promise<GetQuestionsListResponse> => {

    const url = new URL(request.url);

    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";

    const response = await fetch(
        `${BASE_URL}/questions/public-questions?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetQuestionsListResponse =
        await response.json();

    return result;
};