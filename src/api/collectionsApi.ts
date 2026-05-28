import type { Collection, GetCollectionsListResponse } from "../types/apiTypes";
import { BASE_URL } from "./baseApi";

export const getCollectionsList = async (): Promise<Collection[]> => {
    const response = await fetch(`${BASE_URL}/collections/public`);

    if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }

    const result: GetCollectionsListResponse = await response.json();


    console.log(result.data);
    return result.data;
};