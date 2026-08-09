import styles from "./StartSimulatorButton.module.css";

interface Props {
    disabled: boolean;
    onClick: () => void;
}

function StartSimulatorButton({
    disabled,
    onClick,
}: Props) {

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={styles.button}
        >
            Начать
            <span className={styles.arrow}>→</span>
        </button>
    );
}

export default StartSimulatorButton;