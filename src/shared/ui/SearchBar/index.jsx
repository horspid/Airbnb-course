import styles from "./styles/searchBar.module.css";
import { Link } from "@shared/ui";

export const SearchBar = () => {
	return (
		<div className={styles.searchbar}>
			<div className={styles["searchbar__btns-wrapper"]}>
				<div className={styles.searchbar__btn}>
					<Link text="Anywhere" />
				</div>
				<div className={styles.searchbar__btn}>
					<Link text="Any week" />
				</div>
				<div className={styles.searchbar__btn}>
					<Link text="Add guests" style="light" />
				</div>
			</div>
			<button className={styles["searchbar__btn-search"]}>
				<svg
					width="14"
					height="13"
					viewBox="0 0 14 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.98438 8.875L12.3594 12.25M5.98438 10C8.26255 10 10.1094 8.15317 10.1094 5.875C10.1094 3.59683 8.26255 1.75 5.98438 1.75C3.7062 1.75 1.85938 3.59683 1.85938 5.875C1.85938 8.15317 3.7062 10 5.98438 10Z"
						stroke="white"
						strokeWidth="2"
					/>
				</svg>
			</button>
		</div>
	);
};
