import { useState } from 'react';

import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import SidebarWrapper from '../Sidebar/SidebarWrapper/SidebarWrapper';

import SidebarSection from '../Sidebar/SidebarSection/SidebarSection';

import SidebarChipsGroup from '../Sidebar/SidebarChipsGroup/SidebarChipsGroup';

import SidebarChip from '../Sidebar/SidebarChip/SidebarChip';

import type {
    AccessType,
    Specialization,
} from '../../types/apiTypes';

import SidebarSearchQuestions from '../Sidebar/SidebarSearchQuestions/SidebarSearchQuestions';

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

                    {specializations.map((spec) => (

                        <SidebarChip
                            key={spec.id}
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

                    ))}

                </SidebarChipsGroup>

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