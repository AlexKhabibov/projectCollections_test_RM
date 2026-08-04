import SidebarWrapper from '../Sidebar/SidebarWrapper/SidebarWrapper';
import SidebarSection from '../Sidebar/SidebarSection/SidebarSection';
import type { Collection } from '../../types/types';
import styles from './CollectionDetailsSidebar.module.css';

interface CollectionDetailsSidebarProps {
    collection: Collection;
}

function CollectionDetailsSidebar({
    collection,
}: CollectionDetailsSidebarProps) {

    return (
        <SidebarWrapper>

            <SidebarSection title="Информация">

                <div className={styles.stats}>

                    <div className={styles.statItem}>

                        <span className={styles.statLabel}>
                            Вопросов
                        </span>

                        <span className={styles.statValue}>
                            {collection.questionsCount}
                        </span>

                    </div>

                    <div className={styles.statItem}>

                        <span className={styles.statLabel}>
                            Задач
                        </span>

                        <span className={styles.statValue}>
                            {collection.tasksCount}
                        </span>

                    </div>

                </div>

            </SidebarSection>

            {!!collection.keywords.length && (

                <SidebarSection title="Ключевые слова">

                    <div className={styles.keywords}>

                        {collection.keywords.map(
                            (keyword) => (

                                <div
                                    key={keyword}
                                    className={styles.keyword}
                                >
                                    {keyword}
                                </div>

                            )
                        )}

                    </div>

                </SidebarSection>

            )}

            {!!collection.company && (

                <SidebarSection title="Компания">

                    <div className={styles.companyCard}>

                        <h4 className={styles.companyTitle}>
                            {collection.company.title}
                        </h4>

                        <p
                            className={
                                styles.companyDescription
                            }
                        >
                            {
                                collection.company
                                    .description
                            }
                        </p>

                    </div>

                </SidebarSection>

            )}

        </SidebarWrapper>
    );
}

export default CollectionDetailsSidebar;