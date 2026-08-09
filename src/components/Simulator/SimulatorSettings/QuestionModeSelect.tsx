import {
    simulatorQuestionModes,
    type SimulatorQuestionMode,
} from "../../../types/types";
import styles from "./QuestionModeSelect.module.css";

interface Props {
    value: SimulatorQuestionMode | null;
    onChange: (mode: SimulatorQuestionMode) => void;
}

function QuestionModeSelect({
    value,
    onChange,
}: Props) {

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.title}>
                Выберите режим
            </h2>

            <div className={styles.buttons}>

                {simulatorQuestionModes.map((mode) => {

                    const isSelected =
                        value === mode.value;

                    return (
                        <button
                            key={mode.value}
                            type="button"
                            disabled={
                                mode.value === "review"
                            }
                            onClick={() =>
                                onChange(mode.value)
                            }
                            className={
                                isSelected
                                    ? `${styles.button} ${styles.selected}`
                                    : styles.button
                            }
                        >
                            {mode.label}
                        </button>
                    );

                })}

            </div>

        </div>
    );
}

export default QuestionModeSelect;