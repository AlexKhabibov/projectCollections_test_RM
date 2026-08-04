import type { GetSkillsListResponse, Skill } from "../../types/types";
import { apiSlice } from "./apiSlice";


export const skillsApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        getSkills: builder.query<
            Skill[],
            void
        >({

            query: () => "/skills",

            transformResponse: (
                response: GetSkillsListResponse
            ) => response.data,

            providesTags: ["Skills"],

        }),

    }),

});

export const {
    useGetSkillsQuery,
} = skillsApiSlice;