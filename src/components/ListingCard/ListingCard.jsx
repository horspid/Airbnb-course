import { IconStar, IconLike } from '@assets/Icons';
import styles from './style.module.css';

const ListingCard = ({ data }) => {
    const {
        image,
        subtitle,
        title,
        details,
        rating,
        reviews,
        pricePerNight,
        currency,
        isFavorite
    } = data

    const detailsOutput = details.join(' · ');

    return (
        <article className={styles.card}>
            <div className={styles["card__img-wrapper"]}>
                <img src={image} alt="" className={styles.card__img} />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__header}>
                    <div className={styles.card__wrapper}>
                        <div className={styles.card__subtitle}>{subtitle}</div>
                        <div className={styles.card__title}>{title}</div>
                    </div>
                    <IconLike active={isFavorite} />
                </div>
                <div className={styles.card__details}>
                    {detailsOutput}
                </div>
                <div className={styles.card__footer}>
                    <div className={styles.card__rating}>
                        <div className={styles["card__rating-value"]}>{rating}</div>
                        <div className={styles["card__rating-star"]}>
                            <IconStar />
                        </div>
                        <div className={styles["card__rating-count"]}>({reviews})</div>
                    </div>
                    <div className={styles.card__price}>
                        <strong>{currency + pricePerNight}</strong>
                        <span>/night</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ListingCard;