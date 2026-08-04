import type { Collection } from "../../types/types";
import { apiSlice } from "./apiSlice";

export const collectionDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCollectionDetails: builder.query<Collection, string>({
            query: (id) =>
                `/collections/${id}/public`,

            providesTags: ["Collections"],
        }),
    }),
});

export const {
    useGetCollectionDetailsQuery,
} = collectionDetailsApiSlice;