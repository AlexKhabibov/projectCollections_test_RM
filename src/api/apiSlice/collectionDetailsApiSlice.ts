import type { Collection } from "../../types/apiTypes";
import { apiSlice } from "./apiSlice";

export const collectionDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCollectionDetails: builder.query<Collection, string>({
            query: (id) => `/collections/${id}/public`,
        })
    })
})

export const { useGetCollectionDetailsQuery } = collectionDetailsApiSlice;