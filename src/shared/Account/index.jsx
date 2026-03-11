import styles from "./styles/account.module.css";

export const Account = () => {
	return (
		<button className={styles.account}>
			<div className={styles["account__nav-icon"]}>
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.01562 8H15.0156"
						stroke="#222222"
						strokeWidth="1.5"
					/>
					<path
						d="M1.01562 12H15.0156"
						stroke="#222222"
						strokeWidth="1.5"
					/>
					<path
						d="M1.01562 4H15.0156"
						stroke="#222222"
						strokeWidth="1.5"
					/>
				</svg>
			</div>
			<div className={styles.account__avatar}>
				<img src="./img/icons/user-avatar.svg" alt="User avatar" />
			</div>
		</button>
	);
};
