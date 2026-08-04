import { apiSlice } from "./apiSlice";
import type { GetQuestionsListResponse } from "../../types/apiTypes";


interface GetQuestionsQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    collectionId?: string;
}


export const questionsListApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        getQuestions: builder.query<
            GetQuestionsListResponse,
            GetQuestionsQueryParams
        >({

            query: ({
                page = 1,
                limit = 10,
                search = "",
                collectionId = "",
            }) => ({
                url: "/questions/public-questions",

                params: {
                    page,
                    limit,
                    title: search || undefined,
                    collectionId: collectionId || undefined,
                },
            }),


            providesTags: ["Questions"],

        }),

    }),

});


export const {
    useGetQuestionsQuery,
} = questionsListApi;