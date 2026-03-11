import styles from "./styles/index.module.css";
import Container from "@/layouts/Container/Container";

import ProductHeader from "./ui/ProductHeader";
import ProductImages from "./ui/ProductImages";
import ProductDescription from "./ui/ProductDescription";

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
