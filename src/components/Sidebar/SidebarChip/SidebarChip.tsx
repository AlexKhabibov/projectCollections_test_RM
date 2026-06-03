import styles from './SidebarChip.module.css';

interface SidebarChipProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

function SidebarChip({
    children,
    active,
    onClick,
}: SidebarChipProps) {
    return (
        <button
            type="button"
            className={`${styles.chip} ${active ? styles.active : ''
                }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default SidebarChip;