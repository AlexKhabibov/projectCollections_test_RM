import type { Collection } from '../../types/apiTypes';
import CollectionCard from '../CollectionCard/CollectionCard';
import styles from './CollectionCardList.module.css'

function CollectionCardList({ collections }: { collections: Collection[] }) {
    if (!collections || collections.length === 0) {
        return <p>Коллекций пока нет</p>;
    }

    return (
        <>
            <div className={styles.collectionsCardList}>
                <h1>Коллекции</h1>
                <div className={styles.cardGrid}>
                    {collections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CollectionCardList;