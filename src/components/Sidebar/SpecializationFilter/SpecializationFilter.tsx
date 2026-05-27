import { useState } from "react";
import styles from "./SpecializationFilter.module.css";
import type { SpecializationFilterProps } from "../../../types/type";


function SpecializationFilter({
    specializations,
    selectedSpecializations,
    setSelectedSpecializations
}: SpecializationFilterProps) {

    const [showAll, setShowAll] = useState(false);

    const toggleSpecialization = (id: number) => {
        setSelectedSpecializations(id);
    };

    const visibleSpecializations = showAll
        ? specializations
        : specializations.slice(0, 6);

    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Специализация
            </h3>

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

            {specializations.length > 6 && (
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