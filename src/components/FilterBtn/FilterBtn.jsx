import filterIcon from './filter.svg';
import './style.scss';

const FilterBtn = () => {
	return (
		<button className="filter-btn">
			<img src={filterIcon} alt="Filter" />
			Filters
		</button>
	);
};

export default FilterBtn;
