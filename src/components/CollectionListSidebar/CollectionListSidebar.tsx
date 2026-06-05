import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarWrapper from '../Sidebar/SidebarWrapper/SidebarWrapper';
import SidebarSection from '../Sidebar/SidebarSection/SidebarSection';
import SidebarChipsGroup from '../Sidebar/SidebarChipsGroup/SidebarChipsGroup';
import SidebarChip from '../Sidebar/SidebarChip/SidebarChip';
import type { AccessType, Specialization } from '../../types/apiTypes';
import SidebarSearchQuestions from '../Sidebar/SidebarSearchQuestions/SidebarSearchQuestions';
import styles from './CollectionListSidebar.module.css';
import AnimatedSidebarItem from '../Animation/AnimatedCollectionSidebar/AnimatedSidebarItem';

interface CollectionListSidebarProps {
    specializations: Specialization[];
}

function CollectionListSidebar({
    specializations,
}: CollectionListSidebarProps) {

    const navigate =
        useNavigate();

    const location =
        useLocation();

    const [
        selectedSpecialization,
        setSelectedSpecialization,
    ] = useState<string | null>(
        null
    );

    const [
        selectedAccess,
        setSelectedAccess,
    ] = useState<AccessType>(
        'members'
    );

    const [
        isExpanded,
        setIsExpanded,
    ] = useState(false);

    const visibleSpecializations =
        isExpanded
            ? specializations
            : specializations.slice(0, 3);

    const updateAccess = (
        access: AccessType
    ) => {

        const params =
            new URLSearchParams(
                location.search
            );

        params.set(
            'access',
            access
        );

        params.set(
            'page',
            '1'
        );

        navigate(
            `${location.pathname}?${params.toString()}`
        );
    };

    return (
        <SidebarWrapper>

            <SidebarSearchQuestions />

            <SidebarSection title="Специализация">

                <SidebarChipsGroup>
                    {visibleSpecializations.map((spec, index) => (
                        <AnimatedSidebarItem
                            key={spec.id}
                            index={index}
                        >

                            <SidebarChip
                                active={
                                    selectedSpecialization ===
                                    spec.id
                                }
                                onClick={() =>
                                    setSelectedSpecialization(
                                        spec.id
                                    )
                                }
                            >
                                {spec.title}
                            </SidebarChip>

                        </AnimatedSidebarItem>
                    ))}
                </SidebarChipsGroup>



                {specializations.length > 3 && (

                    <button
                        type="button"
                        className={styles.showMore}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Скрыть' : 'Посмотреть все'}
                    </button>

                )}

            </SidebarSection>

            <SidebarSection title="Доступ">

                <SidebarChipsGroup>

                    <SidebarChip
                        active={
                            selectedAccess ===
                            'members'
                        }
                        onClick={() => {

                            setSelectedAccess(
                                'members'
                            );

                            updateAccess(
                                'members'
                            );

                        }}
                    >
                        Для участников
                    </SidebarChip>

                    <SidebarChip
                        active={
                            selectedAccess ===
                            'public'
                        }
                        onClick={() => {

                            setSelectedAccess(
                                'public'
                            );

                            updateAccess(
                                'public'
                            );

                        }}
                    >
                        Для всех
                    </SidebarChip>

                </SidebarChipsGroup>

            </SidebarSection>

        </SidebarWrapper>
    );
}

export default CollectionListSidebar;