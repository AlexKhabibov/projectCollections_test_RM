import type { Collection } from '../../types/apiTypes';
import CollectionCard from '../CollectionCard/CollectionCard';

function CollectionCardList({ collections }: { collections: Collection[] }) {
    if (!collections || collections.length === 0) {
        return <p>Коллекций пока нет</p>;
    }

    return (
        <>
            <div className="collectionsCardList">
                <h1>Коллекции</h1>
                <div className="card-grid">
                    {collections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CollectionCardList;
