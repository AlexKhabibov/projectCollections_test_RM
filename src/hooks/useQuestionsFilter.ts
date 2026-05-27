import { useState, useCallback } from 'react';

interface UseQuestionsFiltersReturn {
    search: string;
    setSearch: (value: string) => void;
    selectedSkills: number[];
    setSelectedSkills: (value: number[]) => void;
    selectedSpecializations: number[];
    setSelectedSpecializations: (value: number[]) => void;
    page: number;
    setPage: (value: number) => void;
    resetFilters: () => void;
}

export const useQuestionsFilters = (): UseQuestionsFiltersReturn => {
    const [search, setSearch] = useState<string>('');
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1);

    const resetFilters = useCallback((): void => {
        setSearch('');
        setSelectedSkills([]);
        setSelectedSpecializations([]);
        setPage(1);
    }, []);

    return {
        search,
        setSearch,
        selectedSkills,
        setSelectedSkills,
        selectedSpecializations,
        setSelectedSpecializations,
        page,
        setPage,
        resetFilters
    };
};
