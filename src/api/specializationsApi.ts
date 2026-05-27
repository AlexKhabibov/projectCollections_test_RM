import type { Specialization, GetSpecializationsListResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getSpecializations = async (): Promise<Specialization[]> => {
    const response = await fetch(`${BASE_URL}/specializations`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetSpecializationsListResponse = await response.json();

    return result.data;
};