import styles from './SidebarChipsGroup.module.css';

interface SidebarChipsGroupProps {
    children: React.ReactNode;
}

function SidebarChipsGroup({
    children,
}: SidebarChipsGroupProps) {
    return (
        <div className={styles.group}>
            {children}
        </div>
    );
}

export default SidebarChipsGroup;