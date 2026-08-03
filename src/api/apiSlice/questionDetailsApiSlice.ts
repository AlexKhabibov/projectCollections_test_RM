import type { GetQuestionDetailsResponse, Question } from "../../types/apiTypes";
import { apiSlice } from "./apiSlice";

export const questionDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuestionDetails: builder.query<Question, string>({
            query: (id) => `/questions/public-questions/${id}`,
            transformResponse: (
                response: GetQuestionDetailsResponse
            ) => response.data,
        })
    })
});

export const { useGetQuestionDetailsQuery } = questionDetailsApiSlice;