import styles from './QuestionDetailsShortAnswer.module.css'

function QuestionDetailsShortAnswer() {
    return (
        <>
            <div className={styles.card}>
                <h2 className={styles.title}>
                    Краткий ответ
                </h2>

                <p className={styles.text}>
                    Virtual DOM (виртуальный DOM) — это программная концепция,
                    используемая в разработке веб-приложений для повышения
                    эффективности обновлений интерфейса. Это представление
                    реального DOM (структуры документа, отображаемого в браузере)
                    в памяти, которое позволяет оптимизировать изменения,
                    минимизируя взаимодействие с реальным DOM, что ускоряет
                    рендеринг и обновление страниц. При изменении данных
                    приложения Virtual DOM сравнивает новое состояние с
                    предыдущим и обновляет только те части реального DOM,
                    которые изменились, вместо перерисовки всего документа.
                </p>
            </div>
        </>
    );
}

export default QuestionDetailsShortAnswer;