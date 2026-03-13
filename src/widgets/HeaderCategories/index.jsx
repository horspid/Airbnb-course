import styles from "./styles/headerCategories.module.css";

import { CategoryItem } from "./ui";
import { FilterBtn } from "@shared/ui";
import Container from "@layouts/Container/Container";

import categoriesData from "@app/model/categories.json";

export const HeaderCategories = () => {
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
