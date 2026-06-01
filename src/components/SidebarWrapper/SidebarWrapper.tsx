import styles from './SidebarWrapper.module.css';

interface SidebarWrapperProps {
    children: React.ReactNode;
}

function SidebarWrapper({ children }: SidebarWrapperProps) {
    return <aside className={styles.sidebar}>{children}</aside>;
}

export default SidebarWrapper;