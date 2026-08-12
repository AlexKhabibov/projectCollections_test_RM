import { apiSlice } from "./apiSlice";
import type {
    GetCollectionsListResponse,
} from "../../types/types";

interface GetCollectionsQueryParams {
    page?: number;
    limit?: number;
    access?: string;
    specializations?: number[];
}

export const collectionsApiSlice =
    apiSlice.injectEndpoints({

        endpoints: (builder) => ({

            getCollections: builder.query<
                GetCollectionsListResponse,
                GetCollectionsQueryParams
            >({
                query: ({
                    page = 1,
                    limit = 10,
                    access = "",
                    specializations = [],
                }) => {

                    const params = new URLSearchParams({
                        page: String(page),
                        limit: String(limit),
                    });

                    if (access === "members") {
                        params.set("isFree", "false");
                    }

                    if (access === "public") {
                        params.set("isFree", "true");
                    }

                    specializations.forEach((id) => {
                        params.append(
                            "specializations",
                            String(id)
                        );
                    });

                    return {
                        url: "/collections/public",
                        params,
                    };
                },

                providesTags: ["Collections"],
            }),

        }),

    });

export const {
    useGetCollectionsQuery,
} = collectionsApiSlice;