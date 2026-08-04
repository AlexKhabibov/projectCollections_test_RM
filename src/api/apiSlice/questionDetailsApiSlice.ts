import type { Question } from "../../types/types";
import { apiSlice } from "./apiSlice";

export const questionDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuestionDetails: builder.query<Question, string>({
            query: (id) =>
                `/questions/public-questions/${id}`,

            providesTags: ["Questions"],
        }),
    }),
});

export const {
    useGetQuestionDetailsQuery,
} = questionDetailsApiSlice;