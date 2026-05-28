import { useLoaderData } from 'react-router-dom';
import CollectionCardList from '../../components/CollectionCardList/CollectionCardList';
import type { Collection } from '../../types/apiTypes';


export default function CollectionsPage() {
    const collections = useLoaderData() as Collection[];

    return (
        <div>
            <h1>Коллекции вопросов</h1>
            <CollectionCardList collections={collections} />
        </div>
    );
}
