import filterIcon from './filter.svg';
import styles from './style.module.css';

const FilterBtn = () => {
	return (
		<button className={styles['filter-btn']}>
			<img src={filterIcon} alt="Filter" />
			Filters
		</button>
	);
};

export default FilterBtn;
