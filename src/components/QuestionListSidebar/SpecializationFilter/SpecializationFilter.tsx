import { useState } from "react";
import styles from "./SpecializationFilter.module.css";
import type { Specialization } from "../../../types/apiTypes";

interface SpecializationFilterProps {
    specializations: Specialization[] | undefined; // Теперь может быть undefined
    selectedSpecializations: number[];
    setSelectedSpecializations: (value: number[]) => void;
}

function SpecializationFilter({
    specializations = [], // Значение по умолчанию — пустой массив
    selectedSpecializations,
    setSelectedSpecializations
}: SpecializationFilterProps) {
    const [showAll, setShowAll] = useState<boolean>(false);

    const toggleSpecialization = (id: number) => {
        const newSpecializations =
            selectedSpecializations.includes(id)
                ? selectedSpecializations.filter(
                    itemId => itemId !== id
                )
                : [...selectedSpecializations, id];

        setSelectedSpecializations(newSpecializations);
    };

    // Гарантируем, что specializations — массив
    const safeSpecializations: Specialization[] = Array.isArray(specializations)
        ? specializations
        : [];

    const visibleSpecializations = showAll
        ? safeSpecializations
        : safeSpecializations.slice(0, 6);

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>Специализация</h3>
            <div className={styles.tags}>
                {visibleSpecializations.map(spec => (
                    <button
                        key={spec.id}
                        type="button"
                        onClick={() => toggleSpecialization(spec.id)}
                        className={
                            selectedSpecializations.includes(spec.id)
                                ? styles.active
                                : ""
                        }
                    >
                        {spec.title}
                    </button>
                ))}
            </div>
            {safeSpecializations.length > 6 && (
                <button
                    type="button"
                    className={styles.moreBtn}
                    onClick={() => setShowAll(prev => !prev)}
                >
                    {showAll ? "Скрыть" : "Показать еще"}
                </button>
            )}
        </div>
    );
}

export default SpecializationFilter;