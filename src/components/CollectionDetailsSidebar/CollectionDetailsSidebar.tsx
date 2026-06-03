import SidebarWrapper
    from '../Sidebar/SidebarWrapper/SidebarWrapper';

import SidebarSection
    from '../Sidebar/SidebarSection/SidebarSection';

import type {
    Collection,
} from '../../types/apiTypes';

interface CollectionDetailsSidebarProps {
    collection: Collection;
}

function CollectionDetailsSidebar({
    collection,
}: CollectionDetailsSidebarProps) {

    return (
        <SidebarWrapper>

            <SidebarSection title="Информация">

                <p>
                    Вопросов:
                    {' '}
                    {collection.questionsCount}
                </p>

                <p>
                    Задач:
                    {' '}
                    {collection.tasksCount}
                </p>

            </SidebarSection>

            {!!collection.keywords.length && (

                <SidebarSection title="Ключевые слова">

                    <div>
                        {collection.keywords.join(', ')}
                    </div>

                </SidebarSection>

            )}

            {!!collection.company && (

                <SidebarSection title="Компания">

                    <p>
                        {collection.company.title}
                    </p>

                </SidebarSection>

            )}

        </SidebarWrapper>
    );
}

export default CollectionDetailsSidebar;