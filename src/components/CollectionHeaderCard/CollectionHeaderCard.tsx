import { getImageSrc } from "../../hooks/imageDefault";
import type { Collection } from "../../types/types";
import styles from "./CollectionHeaderCard.module.css";

function CollectionHeaderCard({ collection }: { collection: Collection }) {

    const imageUrl = getImageSrc(collection.imageSrc);
    const roles = collection.specializations?.map(s => s.title) || [];

    return (
        <div className={styles.header}>

            <img
                className={styles.image}
                src={imageUrl}
                alt={collection.title}
            />

            <div className={styles.info}>

                <h1>{collection.title}</h1>

                <p>{collection.description}</p>

                <div className={styles.meta}>
                    <span>
                        {collection.isFree ? "Бесплатная" : "Платная"}
                    </span>

                    <span>
                        {collection.questionsCount} вопросов
                    </span>
                </div>

                <div className={styles.roles}>
                    {roles.map(r => (
                        <span key={r}>{r}</span>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default CollectionHeaderCard;