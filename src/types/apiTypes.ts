export interface User {
    id: string
    username: string
}

export interface Collection {
    id: number
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
    total: number
    page: number
    limit: number
    data: Collection[]
}

export interface Specialization {
    id: number;
    title: string;
    slug: string;
    description: string;
    imageSrc: string;
    createdAt: string;
    updatedA: string;
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
    id: number;
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
    id: number;
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
    id: number;
    title: string;
    description: string;
    imageSrc: string | null;
    createdAt: string;
    updatedAt: string;
}

export type QuestionStatus = "public" | "private" | "draft";

export interface Company {
    id: string
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