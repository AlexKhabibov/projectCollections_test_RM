import { useEffect, useState } from 'react';
import type { Skill, Specialization } from '../types/types';
import { getSkills } from '../api/skillsApi';
import { getSpecializations } from '../api/specializationsApi';

interface FilterData {
  skills: Skill[];
  specializations: Specialization[];
  isLoading: boolean;
}

export const useFilterData = (): FilterData => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Инициализируем как true

  useEffect(() => {
    Promise.all([getSkills(), getSpecializations()])
      .then(([skillsData, specData]) => {
        setSkills(skillsData);
        setSpecializations(specData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return { skills, specializations, isLoading };
};
