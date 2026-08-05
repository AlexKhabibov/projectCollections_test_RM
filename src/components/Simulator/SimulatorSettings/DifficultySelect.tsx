import {
    simulatorDifficulties,
    type SimulatorDifficulty,
} from "../../../types/types";
import styles from "./DifficultySelect.module.css";

interface Props {
    value: SimulatorDifficulty | null;
    onChange: (difficulty: SimulatorDifficulty) => void;
}

function DifficultySelect({
    value,
    onChange,
}: Props) {

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.title}>
                Выберите уровень сложности
            </h2>

            <div className={styles.buttons}>

                {simulatorDifficulties.map((difficulty) => {

                    const isSelected =
                        value === difficulty.value;

                    return (

                        <button
                            key={difficulty.value}
                            type="button"
                            onClick={() =>
                                onChange(difficulty.value)
                            }
                            className={
                                isSelected
                                    ? `${styles.button} ${styles.selected}`
                                    : styles.button
                            }
                        >
                            {difficulty.label}
                        </button>

                    );

                })}

            </div>

        </div>
    );
}

export default DifficultySelect;