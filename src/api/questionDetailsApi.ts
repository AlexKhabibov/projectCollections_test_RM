import type { GetQuestionDetailsResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";
import type { LoaderFunctionArgs } from "react-router-dom"; // типы для loader


export const getQuestionDetails = async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;

    if (!id) {
        throw new Error("ID вопроса не указан");
    }

    try {
        const response = await fetch(`${BASE_URL}/questions/public-questions/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP ошибка! Код: ${response.status}`);
        }

        const result: GetQuestionDetailsResponse = await response.json();

        return result;
    } catch (error) {
        console.error('Ошибка загрузки вопроса:', error);
        throw error;
    }
};
