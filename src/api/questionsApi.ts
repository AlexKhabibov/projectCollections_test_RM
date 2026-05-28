import type { GetQuestionsListResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getQuestionsList = async (): Promise<GetQuestionsListResponse> => {
    const response = await fetch(`${BASE_URL}/questions/public-questions`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result = await response.json();

    return result;
};