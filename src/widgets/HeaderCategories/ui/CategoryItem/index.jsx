import styles from "./styles/categoryItem.module.css";

export const CategoryItem = ({ title, img }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<img src={img} alt="Cat name" />
			</div>
			<div className={styles.title}>{title}</div>
		</div>
	);
};
