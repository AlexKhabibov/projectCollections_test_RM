import type {
    LoaderFunctionArgs,
} from "react-router-dom";

import { BASE_URL }
    from "./baseApi";

import {
    getSpecializations,
} from "./specializationsApi";

export const getCollectionsList =
    async ({
        request,
    }: LoaderFunctionArgs) => {

        const url =
            new URL(request.url);

        const page =
            url.searchParams.get("page")
            || "1";

        const limit =
            url.searchParams.get("limit")
            || "10";

        const access =
            url.searchParams.get("access")
            || "";

        const params =
            new URLSearchParams({
                page,
                limit,
            });

        if (access === 'members') {

            params.set(
                'isFree',
                'false'
            );

        }

        if (access === 'public') {

            params.set(
                'isFree',
                'true'
            );

        }

        const [
            collectionsResponse,
            specializations,
        ] = await Promise.all([

            fetch(
                `${BASE_URL}/collections/public?${params.toString()}`
            ),

            getSpecializations(),

        ]);

        if (!collectionsResponse.ok) {

            throw new Error(
                `HTTP ошибка! Код: ${collectionsResponse.status}`
            );

        }

        const collections =
            await collectionsResponse.json();

        return {
            ...collections,
            specializations,
        };
    };