import type {
    SimulatorDifficulty,
    SimulatorResponse,
    StartSimulatorParams,
} from "../../types/types";

import { apiSlice }
    from "./apiSlice";

const difficultyMap:
    Record<
        SimulatorDifficulty,
        number[]
    > = {

    beginner: [1, 2, 3],
    elementary: [4, 5, 6],
    intermediate: [7, 8],
    advanced: [9, 10],
};

export const simulatorApiSlice =
    apiSlice.injectEndpoints({

        endpoints: (builder) => ({

            startSimulator:
                builder.query<
                    SimulatorResponse,
                    StartSimulatorParams
                >({

                    query: ({
                        specialization,
                        skills,
                        difficulty,
                        limit,
                        collection,
                    }) => ({

                        url:
                            "/interview-preparation/quizzes/mock/new",

                        params: {

                            specialization,

                            skills:
                                skills?.length
                                    ? skills.join(",")
                                    : undefined,

                            complexity:
                                difficultyMap[
                                    difficulty
                                ].join(","),

                            collection,

                            limit,
                        },
                    }),
                }),
        }),
    });

export const {
    useStartSimulatorQuery,
    useLazyStartSimulatorQuery,
} = simulatorApiSlice;