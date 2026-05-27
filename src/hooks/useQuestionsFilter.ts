import { useState, useCallback } from 'react';

export const useQuestionsFilters = () => {
  const [search, setSearch] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const resetFilters = useCallback(() => {
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
