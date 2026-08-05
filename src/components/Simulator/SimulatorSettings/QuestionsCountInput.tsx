import styles from "./QuestionsCountInput.module.css";

interface Props {
    value: number;
    onChange: (value: number) => void;
}

function QuestionsCountInput({
    value,
    onChange,
}: Props) {

    return (
        <div className={styles.wrapper}>

            <label
                htmlFor="questionsCount"
                className={styles.label}
            >
                Количество вопросов
            </label>

            <input
                id="questionsCount"
                type="number"
                min={1}
                max={100}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className={styles.input}
            />

        </div>
    );
}

export default QuestionsCountInput;