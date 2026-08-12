import { apiSlice } from "./apiSlice";
import type { GetQuestionsListResponse } from "../../types/types";

interface GetQuestionsQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    collection?: number;
}

export const questionsListApi =
    apiSlice.injectEndpoints({

        endpoints: (builder) => ({

            getQuestions: builder.query<
                GetQuestionsListResponse,
                GetQuestionsQueryParams
            >({

                query: ({
                    page = 1,
                    limit = 10,
                    search = "",
                    collection,
                }) => ({
                    url: "/questions/public-questions",

                    params: {
                        page,
                        limit,
                        title: search || undefined,
                        collection: collection || undefined,
                    },
                }),

                providesTags: ["Questions"],
            }),

        }),
    });

export const {
    useGetQuestionsQuery,
} = questionsListApi;