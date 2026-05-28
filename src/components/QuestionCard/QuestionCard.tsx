// import styles from "./QuestionCard.module.css";
// import type { Question } from "../../types/apiTypes";
// import { Link } from "react-router-dom";

// function QuestionCard({ question }: { question: Question }) {

//     const longAnswer =
//         typeof question.longAnswer === "string"
//             ? question.longAnswer
//             : "";

//     return (
//         <div className={styles.titleContainer}>
//                 <Link className={styles.linkReset} to={`/questions/${question.id}`}>
//                     <h3 className={styles.title}>
//                         {question.title}
//                     </h3>
//                 </Link>

//                 <div className={styles.answer}>
//                     <div className={styles.meta}>
//                         <div className={styles.badge}>
//                             <span className={styles.badgeIcon}>Рейтинг</span>
//                             <span className={styles.badgeValue}>
//                                 {question.rate ?? 0}
//                             </span>
//                         </div>

//                         <div className={styles.badge}>
//                             <span className={styles.badgeIcon}>Сложность</span>
//                             <span className={styles.badgeValue}>
//                                 {question.complexity ?? 0}/10
//                             </span>
//                         </div>
//                     </div>

//                     <div
//                         className={styles.content}
//                         dangerouslySetInnerHTML={{
//                             __html: longAnswer
//                         }}
//                     />
//                 </div>
//         </div>
//     );


// }

// export default QuestionCard;



import { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./QuestionCard.module.css";
import { Link } from "react-router-dom";
import type { Question } from "../../types/apiTypes";

function QuestionCard({ question }: {question: Question}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card}>


            <div className={styles.titleContainer}>
                <Link className={styles.linkReset} to={`/questions/${question.id}`}>
                    <h3 className={styles.title}>
                        {question.title}
                    </h3>
                </Link>

                <span className={styles.accordeonAarrow} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </div>


            {isOpen && (
                <div className={styles.answer}>

                    <div className={styles.meta}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>Рейтинг</span>

                            <span className={styles.badgeValue}>
                                {question.rate}
                            </span>
                        </div>

                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>Сложность</span>

                            <span className={styles.badgeValue}>
                                {question.complexity}/10
                            </span>
                        </div>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(question.longAnswer ?? "")
                        }}
                    />

                </div>
            )}

        </div>
    );
}

export default QuestionCard;