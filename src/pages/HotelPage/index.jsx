import styles from "./styles/hotelPage.module.css";
import Container from "@/layouts/Container/Container";

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
