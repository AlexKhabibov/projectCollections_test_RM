import { BASE_URL } from "./baseApi";
import type { LoaderFunctionArgs } from "react-router-dom";
import type { GetQuestionsListResponse } from "../types/apiTypes";

interface FetchQuestionsParams {
    page?: string;
    limit?: string;
    search?: string;
    collectionId?: string;
}

export const fetchQuestions = async ({
    page = "1",
    limit = "10",
    search = "",
    collectionId = "",
}: FetchQuestionsParams): Promise<GetQuestionsListResponse> => {

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
        throw new Error(
            `HTTP ошибка! Код: ${response.status}`
        );
    }

    return response.json();
};



export const getQuestionsList = async ({
    request,
}: LoaderFunctionArgs) => {

    const url = new URL(request.url);

    return fetchQuestions({
        page:
            url.searchParams.get("page") || "1",

        limit:
            url.searchParams.get("limit") || "10",

        search:
            url.searchParams.get("search") || "",

        collectionId:
            url.searchParams.get("collectionId") || "",
    });
};