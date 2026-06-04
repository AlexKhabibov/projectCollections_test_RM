import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../api/baseApi";
import type { GetQuestionsListResponse, Question } from "../../../types/apiTypes";
import styles from "./ForwardRewQuestionDetailsButton.module.css";

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

            const result: GetQuestionsListResponse =
                await response.json();

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

            <button
                className={styles.button}
                disabled={!prevQuestion}
                onClick={() => {
                    if (!prevQuestion) return;

                    navigate(
                        `/questions/${prevQuestion.id}?${searchParams.toString()}`
                    );
                }}
            >
                ← Предыдущий
            </button>

            <button
                className={styles.button}
                disabled={!nextQuestion}
                onClick={() => {
                    if (!nextQuestion) return;

                    navigate(
                        `/questions/${nextQuestion.id}?${searchParams.toString()}`
                    );
                }}
            >
                Следующий →
            </button>

        </div>
    );
}

export default ForwardRewQuestionDetailsButton;