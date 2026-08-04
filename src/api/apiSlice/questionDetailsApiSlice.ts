import type { Question } from "../../types/apiTypes";
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