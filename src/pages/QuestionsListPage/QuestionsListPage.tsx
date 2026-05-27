import { useLoaderData, useNavigation } from 'react-router-dom';
import styles from './QuestionsListPage.module.css';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import Pagination from '../../components/Pagination/Pagination';
import { useQuestionsFilters } from '../../hooks/useQuestionsFilter';

export default function QuestionsListPage() {
  const { questions, total, skills, specializations } = useLoaderData()
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  const {
    search,
    setSearch,
    selectedSkills,
    setSelectedSkills,
    selectedSpecializations,
    setSelectedSpecializations,
    page,
    setPage
  } = useQuestionsFilters();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <QuestionsList questionsList={questions} />
      <Sidebar
        search={search}
        setSearch={setSearch}
        skills={skills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        specializations={specializations}
        selectedSpecializations={selectedSpecializations}
        setSelectedSpecializations={setSelectedSpecializations}
      />
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
        limit={10}
      />
    </div>
  );
}
