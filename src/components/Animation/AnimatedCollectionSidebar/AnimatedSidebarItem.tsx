import { motion } from 'framer-motion';

interface AnimatedSidebarItemProps {
    children: React.ReactNode;
    index?: number;
}

function AnimatedSidebarItem({
    children,
    index = 0,
}: AnimatedSidebarItemProps) {

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: index * 0.1,
                duration: 0.3,
            }}
            whileHover={{
                scale: 1.03,
            }}
            whileTap={{
                scale: 0.97,
            }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSidebarItem;