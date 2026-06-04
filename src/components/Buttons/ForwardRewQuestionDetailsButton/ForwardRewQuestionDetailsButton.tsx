import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../api/baseApi";
import type { GetQuestionsListResponse, Question } from "../../../types/apiTypes";
import styles from "./ForwardRewQuestionDetailsButton.module.css";
import { motion } from 'framer-motion';

function ForwardRewQuestionDetailsButton({
    question
}: {
    question: Question;
}) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const loadQuestions = async () => {
            const response = await fetch(
                `${BASE_URL}/questions/public-questions?${searchParams.toString()}`
            );

            if (!response.ok) {
                return;
            }

            const result: GetQuestionsListResponse = await response.json();
            setQuestions(result.data);
        };

        loadQuestions();
    }, [searchParams]);

    const currentIndex = questions.findIndex(
        q => String(q.id) === String(question.id)
    );

    const prevQuestion =
        currentIndex > 0
            ? questions[currentIndex - 1]
            : null;

    const nextQuestion =
        currentIndex < questions.length - 1
            ? questions[currentIndex + 1]
            : null;

    return (
        <div className={styles.container}>
            <motion.button
                className={styles.button}
                disabled={!prevQuestion}
                onClick={() => {
                    if (!prevQuestion) return;
                    navigate(
                        `/questions/${prevQuestion.id}?${searchParams.toString()}`
                    );
                }}
                whileHover={!prevQuestion ? {} : {
                    scale: 1.05,
                    backgroundColor: '#e9ecef',
                    transition: { duration: 0.2 }
                }}
                whileTap={!prevQuestion ? {} : {
                    scale: 0.95,
                    transition: { duration: 0.1 }
                }}
                whileFocus={!prevQuestion ? {} : {
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)'
                }}
                style={{
                    opacity: prevQuestion ? 1 : 0.6,
                    cursor: prevQuestion ? 'pointer' : 'not-allowed'
                }}
            >
                ← Предыдущий
            </motion.button>

            <motion.button
                className={styles.button}
                disabled={!nextQuestion}
                onClick={() => {
                    if (!nextQuestion) return;
                    navigate(
                        `/questions/${nextQuestion.id}?${searchParams.toString()}`
                    );
                }}
                whileHover={!nextQuestion ? {} : {
                    scale: 1.05,
                    backgroundColor: '#e9ecef',
                    transition: { duration: 0.2 }
                }}
                whileTap={!nextQuestion ? {} : {
                    scale: 0.95,
                    transition: { duration: 0.1 }
                }}
                whileFocus={!nextQuestion ? {} : {
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)'
                }}
                style={{
                    opacity: nextQuestion ? 1 : 0.6,
                    cursor: nextQuestion ? 'pointer' : 'not-allowed'
                }}
            >
                Следующий →
            </motion.button>
        </div>
    );
}

export default ForwardRewQuestionDetailsButton;