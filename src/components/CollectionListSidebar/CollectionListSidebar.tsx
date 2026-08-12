import { useState } from "react";
import {
    useLocation,
    useNavigate,
} from "react-router-dom";
import SidebarWrapper
    from "../Sidebar/SidebarWrapper/SidebarWrapper";
import SidebarSection
    from "../Sidebar/SidebarSection/SidebarSection";
import SidebarChipsGroup
    from "../Sidebar/SidebarChipsGroup/SidebarChipsGroup";
import SidebarChip
    from "../Sidebar/SidebarChip/SidebarChip";
import type {
    AccessType,
    Specialization,
} from "../../types/types";
import SidebarSearchQuestions
    from "../Sidebar/SidebarSearchQuestions/SidebarSearchQuestions";
import styles
    from "./CollectionListSidebar.module.css";
import AnimatedSidebarItem
    from "../Animation/AnimatedCollectionSidebar/AnimatedSidebarItem";

interface CollectionListSidebarProps {
    specializations: Specialization[];
}

function CollectionListSidebar({
    specializations,
}: CollectionListSidebarProps) {

    const navigate = useNavigate();
    const location = useLocation();

    const [
        isExpanded,
        setIsExpanded,
    ] = useState(false);

    const params =
        new URLSearchParams(
            location.search
        );

    const selectedSpecializations =
        params.getAll("specializations");

    const selectedAccess =
        params.get("access");

    const visibleSpecializations =
        isExpanded
            ? specializations
            : specializations.slice(0, 3);

    const updateAccess = (
        access: AccessType
    ) => {

        const newParams =
            new URLSearchParams(
                location.search
            );

        if (
            newParams.get("access") === access
        ) {
            newParams.delete("access");
        } else {
            newParams.set(
                "access",
                access
            );
        }

        newParams.set("page", "1");

        navigate(
            `${location.pathname}?${newParams.toString()}`
        );
    };

    const handleSpecializationChange = (
        specializationId: string
    ) => {

        const newParams =
            new URLSearchParams(
                location.search
            );

        const selected =
            newParams.getAll(
                "specializations"
            );

        newParams.delete(
            "specializations"
        );

        if (
            selected.includes(
                specializationId
            )
        ) {

            selected
                .filter(
                    (id) =>
                        id !== specializationId
                )
                .forEach((id) => {

                    newParams.append(
                        "specializations",
                        id
                    );

                });

        } else {

            selected.forEach((id) => {

                newParams.append(
                    "specializations",
                    id
                );

            });

            newParams.append(
                "specializations",
                specializationId
            );
        }

        newParams.set("page", "1");

        navigate(
            `${location.pathname}?${newParams.toString()}`
        );
    };

    return (
        <SidebarWrapper>

            <SidebarSearchQuestions />

            <SidebarSection title="Специализация">

                <SidebarChipsGroup>

                    {visibleSpecializations.map(
                        (spec, index) => (

                            <AnimatedSidebarItem
                                key={spec.id}
                                index={index}
                            >

                                <SidebarChip
                                    active={
                                        selectedSpecializations.includes(
                                            String(spec.id)
                                        )
                                    }
                                    onClick={() =>
                                        handleSpecializationChange(
                                            String(spec.id)
                                        )
                                    }
                                >
                                    {spec.title}
                                </SidebarChip>

                            </AnimatedSidebarItem>

                        )
                    )}

                </SidebarChipsGroup>

                {specializations.length > 3 && (

                    <button
                        type="button"
                        className={styles.showMore}
                        onClick={() =>
                            setIsExpanded(
                                (prev) => !prev
                            )
                        }
                    >
                        {isExpanded
                            ? "Скрыть"
                            : "Посмотреть все"}
                    </button>

                )}

            </SidebarSection>

            <SidebarSection title="Доступ">

                <SidebarChipsGroup>

                    <SidebarChip
                        active={
                            selectedAccess ===
                            "members"
                        }
                        onClick={() =>
                            updateAccess(
                                "members"
                            )
                        }
                    >
                        Для участников
                    </SidebarChip>

                    <SidebarChip
                        active={
                            selectedAccess ===
                            "public"
                        }
                        onClick={() =>
                            updateAccess(
                                "public"
                            )
                        }
                    >
                        Для всех
                    </SidebarChip>

                </SidebarChipsGroup>

            </SidebarSection>

        </SidebarWrapper>
    );
}

export default CollectionListSidebar;