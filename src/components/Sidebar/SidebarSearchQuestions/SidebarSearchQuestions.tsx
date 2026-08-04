import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { motion, AnimatePresence } from 'framer-motion';

import { useDebounce } from '../../../hooks/useDebounce';
import { useGetQuestionsQuery } from '../../../api/apiSlice/questionsListApiSlice';

import styles from './SidebarSearchQuestions.module.css';


function SidebarSearchQuestions() {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    const {
        data,
        isLoading,
        error,
    } = useGetQuestionsQuery(
        debouncedQuery.trim()
            ? {
                search: debouncedQuery,
                limit: 5,
            }
            : skipToken
    );

    const questions = data?.data ?? [];

    return (
        <div className={styles.wrapper}>

            <motion.input
                type="text"
                placeholder="Поиск вопросов..."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
                className={styles.input}
                whileFocus={{
                    scale: 1.02
                }}
                transition={{
                    duration: 0.1
                }}
            />


            <AnimatePresence>

                {isLoading && (

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            rotate: [0, 360]
                        }}
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


            <AnimatePresence>

                {error && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8
                        }}
                        className={styles.empty}
                    >
                        Ошибка поиска

                    </motion.div>

                )}

            </AnimatePresence>


            <AnimatePresence>

                {
                    !isLoading &&
                    !error &&
                    !!questions.length && (

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -10
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -10
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className={styles.dropdown}
                        >

                            {
                                questions.map(
                                    (question, index) => (

                                        <motion.button
                                            key={question.id}
                                            initial={{
                                                opacity: 0,
                                                x: -20
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                delay: index * 0.05
                                            }}
                                            type="button"
                                            className={styles.result}
                                            onClick={() =>
                                                navigate(
                                                    `/questions/${question.id}`
                                                )
                                            }
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor:
                                                    '#f8f9fa'
                                            }}
                                            whileTap={{
                                                scale: 0.98
                                            }}
                                        >
                                            {question.title}

                                        </motion.button>

                                    )
                                )
                            }

                        </motion.div>

                    )
                }

            </AnimatePresence>


            <AnimatePresence>

                {
                    debouncedQuery &&
                    !isLoading &&
                    !error &&
                    !questions.length && (

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.8
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className={styles.empty}
                        >
                            Ничего не найдено

                        </motion.div>

                    )
                }

            </AnimatePresence>


        </div>
    );
}

export default SidebarSearchQuestions;