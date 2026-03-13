import styles from "./styles/hotelPage.module.css";

import { Container } from "@shared/ui";

import { ProductHeader, ProductImages } from "./ui";

export const HotelPage = () => {
	return (
		<Container>
			<div className={styles.product}>
				<ProductHeader />
				<ProductImages />
			</div>
		</Container>
	);
};
