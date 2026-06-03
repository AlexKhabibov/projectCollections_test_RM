import styles from './SidebarSection.module.css';

interface SidebarSectionProps {
    title: string;
    children: React.ReactNode;
}

function SidebarSection({
    title,
    children,
}: SidebarSectionProps) {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>
                {title}
            </h3>

            {children}
        </section>
    );
}

export default SidebarSection;