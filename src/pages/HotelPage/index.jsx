import styles from "./styles/hotelPage.module.css";

import { Container } from "@shared/ui";

import { ProductHeader, ProductImages, ProductDescription } from "./ui";

export const HotelPage = () => {
	return (
		<Container>
			<div className={styles.product}>
				<ProductHeader />
				<ProductImages />
				<ProductDescription />
			</div>
		</Container>
	);
};
