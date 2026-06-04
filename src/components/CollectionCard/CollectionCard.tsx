import { getImageSrc } from '../../hooks/imageDefault';
import type { Collection } from '../../types/apiTypes';
import styles from './CollectionCard.module.css';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ({ collection }: { collection: Collection }) => {

  const navigate = useNavigate();
  const imageUrl = getImageSrc(collection.imageSrc);
  const tags = collection.keywords || [];
  const roles = collection.specializations?.map(s => s.title) || [];

  const handleClick = () => {
    navigate(`/collections/${collection.id}`);
  };

  return (
    <div
      className={styles.collectionCard}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.cardContent}>

        <div className={styles.cardImage}>
          <img src={imageUrl} alt={collection.title} />
        </div>

        <div className={styles.cardInfo}>

          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className={styles.title}>{collection.title}</h3>

          <div className={styles.meta}>
            <span className={styles.badge}>
              {collection.isFree ? 'Бесплатно' : 'Платно'}
            </span>
            <span className={styles.badge}>
              {collection.questionsCount} вопросов
            </span>
          </div>

          <div className={styles.roles}>
            {roles.map((role, index) => (
              <span key={index} className={styles.role}>
                {role}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CollectionCard;