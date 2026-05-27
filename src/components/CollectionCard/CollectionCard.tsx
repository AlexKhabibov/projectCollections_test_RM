import type { Collection } from '../../types/apiTypes';

const CollectionCard = ({ collection }: { collection: Collection }) => {
  
  const imageUrl = collection.imageSrc || '/default-image.jpg';
  const tags = collection.keywords || [];
  const roles = collection.specializations?.map(s => s.title) || [];

  return (
    <div className="collection-card">
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt={collection.title} />
        </div>
        <div className="card-info">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="title">{collection.title}</h3>
          <div className="meta">
            <span className="badge">{collection.isFree ? 'Бесплатно' : 'Платно'}</span>
            <span className="badge">{collection.questionsCount} вопросов</span>
          </div>
          <div className="roles">
            {roles.map((role, index) => (
              <span key={index}>{role}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;