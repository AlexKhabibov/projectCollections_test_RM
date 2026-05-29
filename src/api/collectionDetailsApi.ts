import type { LoaderFunctionArgs } from "react-router-dom";
import { BASE_URL } from "./baseApi";

export const getCollectionDetails = async ({
    params,
    request
}: LoaderFunctionArgs) => {

    const id = params.id;

    if (!id) {
        throw new Error("Collection id is missing");
    }

    const url = new URL(request.url);

    const page = url.searchParams.get("page") || "1";
    const limit = url.searchParams.get("limit") || "10";

    const [collectionRes, questionsRes] = await Promise.all([
        fetch(`${BASE_URL}/collections/${id}/public`),
        fetch(`${BASE_URL}/questions/public-questions?collectionId=${id}&page=${page}&limit=${limit}`)
    ]);

    if (!collectionRes.ok) {
        throw new Error(`Collection error: ${collectionRes.status}`);
    }

    if (!questionsRes.ok) {
        throw new Error(`Questions error: ${questionsRes.status}`);
    }

    const collection = await collectionRes.json();
    const questions = await questionsRes.json();

    return {
        collection,
        questions
    };
};