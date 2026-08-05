export interface User {
    id: string | number
    username: string
}

export interface Collection {
    id: string | number
    title: string
    slug?: string
    description: string
    imageSrc: string | null
    createdAt: string
    updatedAt: string
    createdBy: User
    isFree: boolean
    keywords: string[]
    company: Company | null
    questionsCount: number
    tasksCount: number
    specializations: Specialization[]
}

export interface GetCollectionsListResponse {
    data: Collection[];
    page: number;
    total: number;
    limit: number;
    specializations: Specialization[];
}

export interface Specialization {
    id: string;
    title: string;
    slug: string;
    description: string;
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
    createdBy: User
}

export interface GetSpecializationsListResponse {
    total: number;
    page: number;
    limit: number;
    data: Specialization[];
};

export interface GetSkillsListResponse {
    total: number
    page: number
    limit: number
    data: Skill[]
}

export interface Skill {
    id: string | number;
    title: string;
    description: string;
    imageSrc: string | null;
    createdAt: string;
    updatedAt: string;
    specializations: Specialization[];
    createdBy: User | null;
}

export interface GetQuestionsListResponse {
    total: number;
    page: number;
    limit: number;
    data: Question[];
}

export interface GetQuestionDetailsResponse {
    data: Question;
}

export interface Question {
    id: string | number;
    title: string;
    slug: string;
    description: string;
    code: string;
    imageSrc: string | null;
    keywords: string[];
    longAnswer: string;
    shortAnswer: string;
    status: QuestionStatus;
    rate: number;
    complexity: number;
    createdById: string;
    updatedById: string;
    questionSpecializations: Specialization[];
    questionSkills: Skill[];
    questionTopics: Topic[];
    createdAt: string;
    updatedAt: string;
    createdBy: User | null;
    updatedBy: User | null;
}

export interface Topic {
    id: string | number;
    title: string;
    description: string;
    imageSrc: string | null;
    createdAt: string;
    updatedAt: string;
}

export type QuestionStatus = "public" | "private" | "draft";

export interface Company {
    id: string | number
    title: string
    legalName: string
    description: string
    imageSrc: string | null
    inn: string
    kpp: string
    createdAt: string
    updatedAt: string
    createdBy: User
}

export type AccessType =
    'members' | 'public';




export type SimulatorDifficulty =

    | "beginner"
    | "elementary"
    | "intermediate"
    | "advanced";

export const simulatorDifficulties = [

    {
        value: "beginner",
        label: "1–3",
    },

    {
        value: "elementary",
        label: "4–6",
    },

    {
        value: "intermediate",
        label: "7–8",
    },

    {
        value: "advanced",
        label: "9–10",
    },
] as const;

export type SimulatorQuestionMode =
    | "review"
    | "new"
    | "random";

export const simulatorQuestionModes = [
    {
        value: "review",
        label: "Повторение",
    },
    {
        value: "new",
        label: "Только новые",
    },
    {
        value: "random",
        label: "Случайные",
    },
] as const;

export interface StartSimulatorParams {
    specialization: number;
    skills?: string[];
    difficulty: SimulatorDifficulty;
    limit: number;
    collection?: number;
}
export interface SimulatorAnswer {
    questionId: number;
    questionTitle: string;
    answer: string;
}

export interface SimulatorResponse {
    id: string;
    startDate: string;
    fullCount: number;
    skills: string[];
    response: {
        answers: SimulatorAnswer[];
    };
    questions: Question[];
}

export const difficultyMap: Record<
    SimulatorDifficulty,
    number[]
> = {
    beginner: [1, 2, 3],
    elementary: [4, 5, 6],
    intermediate: [7, 8],
    advanced: [9, 10],
};