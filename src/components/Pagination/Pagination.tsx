import styles from "./Pagination.module.css";

interface PaginationProps {
    page: number;
    total: number;
    limit: number;
    onPageChange: (page: number) => void;
}

function Pagination({
    page,
    total,
    limit,
    onPageChange
}: PaginationProps) {

    const totalPages = Math.ceil(total / limit);

    const getPageNumbers = () => {
        const delta = 2;
        const range: (number | "...")[] = [];

        const left = Math.max(2, page - delta);
        const right = Math.min(totalPages - 1, page + delta);

        range.push(1);

        if (left > 2) {
            range.push("...");
        }

        for (let i = left; i <= right; i++) {
            range.push(i);
        }

        if (right < totalPages - 1) {
            range.push("...");
        }

        if (totalPages > 1) {
            range.push(totalPages);
        }

        return range;
    };

    return (
        <div className={styles.pagination}>

            <button
                className={`${styles.pageButton} ${styles.arrow}`}
                onClick={() => onPageChange(Math.max(page - 1, 1))}
                disabled={page === 1}
            >
                ←
            </button>

            {getPageNumbers().map((p, i) =>
                p === "..." ? (
                    <div
                        key={i}
                        className={styles.dots}
                    >
                        ...
                    </div>
                ) : (
                    <button
                        key={i}
                        onClick={() => onPageChange(p)}
                        className={`${styles.pageButton} ${page === p ? styles.active : ""
                            }`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                className={`${styles.pageButton} ${styles.arrow}`}
                onClick={() =>
                    onPageChange(
                        Math.min(page + 1, totalPages)
                    )
                }
                disabled={page === totalPages}
            >
                →
            </button>

        </div>
    );
}

export default Pagination;