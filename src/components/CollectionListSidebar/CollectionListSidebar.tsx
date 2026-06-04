import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarWrapper from '../Sidebar/SidebarWrapper/SidebarWrapper';
import SidebarSection from '../Sidebar/SidebarSection/SidebarSection';
import SidebarChipsGroup from '../Sidebar/SidebarChipsGroup/SidebarChipsGroup';
import SidebarChip from '../Sidebar/SidebarChip/SidebarChip';
import type { AccessType, Specialization } from '../../types/apiTypes';
import SidebarSearchQuestions from '../Sidebar/SidebarSearchQuestions/SidebarSearchQuestions';
import styles from './CollectionListSidebar.module.css';
import { motion } from 'framer-motion';

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
                        <motion.div
                            key={spec.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <SidebarChip
                                active={selectedSpecialization === spec.id}
                                onClick={() => setSelectedSpecialization(spec.id)}
                            >
                                {spec.title}
                            </SidebarChip>
                        </motion.div>
                    ))}
                </SidebarChipsGroup>



                {specializations.length > 3 && (

                    <motion.button
                        type="button"
                        className={styles.showMore}
                        whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        transition={{ duration: 0.2 }}
                    >
                        {isExpanded ? 'Скрыть' : 'Посмотреть все'}
                    </motion.button>

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