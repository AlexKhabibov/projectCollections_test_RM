import styles from './SidebarDrawer.module.css';

interface SidebarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function SidebarDrawer({
    isOpen,
    onClose,
    children,
}: SidebarDrawerProps) {

    return (
        <>
            <aside
                className={`
                    ${styles.sidebar}
                    ${isOpen
                        ? styles.sidebarOpen
                        : ''
                    }
                `}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ✕
                </button>

                {children}

            </aside>

            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={onClose}
                />
            )}

        </>
    );
}

export default SidebarDrawer;