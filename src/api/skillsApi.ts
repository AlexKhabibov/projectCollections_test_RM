import type { GetSkillsListResponse, Skill } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getSkills = async (): Promise<Skill[]> => {
    const response = await fetch(`${BASE_URL}/skills`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetSkillsListResponse = await response.json();

    return result.data;
};