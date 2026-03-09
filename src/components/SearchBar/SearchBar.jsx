import styles from './style.module.css';
import searchIcon from './search.svg';
import Link from '@components/Link/Link';

const SearchBar = () => {
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
				<img src={searchIcon} alt="Search" />
			</button>
		</div>
	);
}

export default SearchBar;