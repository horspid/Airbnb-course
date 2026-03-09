import styles from './style.module.css'

import CategoryItem from '@components/CategoryItem/CategoryItem';
import FilterBtn from '@components/FilterBtn/FilterBtn';
import Container from '@layouts/Container/Container'


import categoriesData from '@data/categories.json';


const Categories = () => {
	return (
		<div className={styles.categories}>
			<Container>
				<div className={styles.categories__row}>
					<div className={styles.categories__list}>
						{categoriesData.map((cat, index) => (
							<CategoryItem
								title={cat.title}
								img={cat.img}
								key={index}
							/>
						))}

						{/* <CategoryItem
							title="Lakefront"
							img="./img/categories/02.svg"
						/> */}
					</div>
					<div className={styles.categories__filter}>
						<FilterBtn />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Categories;
