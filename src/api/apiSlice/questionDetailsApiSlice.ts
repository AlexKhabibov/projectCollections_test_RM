import { apiSlice } from "./apiSlice";

export const questionDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQestionDetails: builder.query({
            query: (id) => `/questions/public-questions/${id}`
        })
    })
});

export const { useGetQestionDetailsQuery } = questionDetailsApiSlice;