import { apiSlice } from "./apiSlice";
import type {
    GetSpecializationsListResponse,
    Specialization,
} from "../../types/types";

export const specializationsApiSlice =
    apiSlice.injectEndpoints({
        endpoints: (builder) => ({
            getSpecializations: builder.query<
                Specialization[],
                void
            >({
                query: () => "/specializations",

                providesTags: ["Specializations"],

                transformResponse: (
                    response: GetSpecializationsListResponse
                ) => response.data,
            }),
        }),
    });

export const {
    useGetSpecializationsQuery,
} = specializationsApiSlice;