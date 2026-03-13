import styles from "./styles/productDescription.module.css";

import { ProductInfo } from "../ProductInfo";
import { ProductSpecifications } from "../ProductSpecifications";

export const ProductDescription = () => {
	return (
		<div className={`${styles.product__wrapper} flex justify-between`}>
			<div className={`${styles["product-description"]} w-167.5`}>
				<ProductInfo />
				<ProductSpecifications />
			</div>
			<div className={`${styles.product__checkout}`}></div>
		</div>
	);
};
