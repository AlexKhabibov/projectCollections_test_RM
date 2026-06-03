import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../../api/questionsApi';
import styles from './SidebarSearchQuestions.module.css';
import type { Question } from '../../../types/apiTypes';

function SidebarSearchQuestions() {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(async () => {

            if (!query.trim()) {
                setResults([]);
                return;
            }

            try {

                setIsLoading(true);

                const response =
                    await fetchQuestions({
                        search: query,
                        limit: '5',
                    });

                setResults(response.data);

            } catch (error) {

                console.error(
                    'Search error:',
                    error
                );

            } finally {

                setIsLoading(false);

            }

        }, 300);

        return () => clearTimeout(timeout);

    }, [query]);

    return (
        <div className={styles.wrapper}>

            <input
                type="text"
                placeholder="Поиск вопросов..."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
                className={styles.input}
            />

            {!!results.length && (
                <div className={styles.dropdown}>

                    {results.map((question) => (

                        <button
                            key={question.id}
                            type="button"
                            className={styles.result}
                            onClick={() =>
                                navigate(
                                    `/questions/${question.id}`
                                )
                            }
                        >
                            {question.title}
                        </button>

                    ))}

                </div>
            )}

            {isLoading && (
                <div className={styles.loading}>
                    Поиск...
                </div>
            )}

        </div>
    );
}

export default SidebarSearchQuestions;