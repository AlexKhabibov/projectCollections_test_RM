import SidebarWrapper from '../Sidebar/SidebarWrapper/SidebarWrapper';
import SidebarSection from '../Sidebar/SidebarSection/SidebarSection';
import type { Question } from '../../types/types';
import styles from './QuestionDetailsSidebar.module.css';

interface QuestionDetailsSidebarProps {
    question: Question;
}

function QuestionDetailsSidebar({
    question,
}: QuestionDetailsSidebarProps) {

    return (
        <SidebarWrapper>

            {!!question.questionSpecializations
                .length && (

                    <SidebarSection title="Специализации">

                        <div className={styles.tags}>

                            {question.questionSpecializations.map(
                                (spec) => (

                                    <div
                                        key={spec.id}
                                        className={styles.tag}
                                    >
                                        {spec.title}
                                    </div>

                                )
                            )}

                        </div>

                    </SidebarSection>

                )}

            {!!question.questionSkills.length && (

                <SidebarSection title="Навыки">

                    <div className={styles.tags}>

                        {question.questionSkills.map(
                            (skill) => (

                                <div
                                    key={skill.id}
                                    className={styles.tag}
                                >
                                    {skill.title}
                                </div>

                            )
                        )}

                    </div>

                </SidebarSection>

            )}

            {!!question.keywords.length && (

                <SidebarSection title="Ключевые слова">

                    <div className={styles.tags}>

                        {question.keywords.map(
                            (keyword) => (

                                <div
                                    key={keyword}
                                    className={styles.tag}
                                >
                                    {keyword}
                                </div>

                            )
                        )}

                    </div>

                </SidebarSection>

            )}

            <SidebarSection title="Информация">

                <div className={styles.stats}>

                    <div className={styles.statItem}>

                        <span className={styles.statLabel}>
                            Сложность
                        </span>

                        <span className={styles.statValue}>
                            {question.complexity}
                        </span>

                    </div>

                    <div className={styles.statItem}>

                        <span className={styles.statLabel}>
                            Рейтинг
                        </span>

                        <span className={styles.statValue}>
                            {question.rate}
                        </span>

                    </div>

                </div>

            </SidebarSection>

        </SidebarWrapper>
    );
}

export default QuestionDetailsSidebar;