import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../../api/questionsApi';
import type { Question } from '../../../types/apiTypes';
import styles from './SidebarSearchQuestions.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function SidebarSearchQuestions() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Question[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (!query.trim()) {
                setResults([]);
                setHasSearched(false);
                return;
            }

            try {
                setIsLoading(true);
                const response = await fetchQuestions({
                    search: query,
                    limit: '5',
                });
                setResults(response.data);
                setHasSearched(true);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <div className={styles.wrapper}>
            <motion.input
                type="text"
                placeholder="Поиск вопросов..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.input}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
            />

            <AnimatePresence>
                {!!results.length && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={styles.dropdown}
                    >
                        {results.map((question) => (
                            <motion.button
                                key={question.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: results.indexOf(question) * 0.05 }}
                                type="button"
                                className={styles.result}
                                onClick={() => navigate(`/questions/${question.id}`)}
                                whileHover={{ scale: 1.02, backgroundColor: '#f8f9fa' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {question.title}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {hasSearched && !isLoading && !results.length && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className={styles.empty}
                    >
                        Ничего не найдено
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, rotate: [0, 360] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        className={styles.loading}
                    >
                        Поиск...
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SidebarSearchQuestions;