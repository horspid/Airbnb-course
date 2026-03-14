import styles from "./styles/productDescription.module.css";

import { ProductInfo } from "../ProductInfo";
import { ProductSpecifications } from "../ProductSpecifications";
import { ProductAbout } from "../ProductAbout";
import { ProductBedroom } from "../ProductBedroom";
import { ProductAdvantages } from "../ProductAdvantages";

export const ProductDescription = () => {
	return (
		<div className={`${styles.product__wrapper} flex justify-between`}>
			<div className={`${styles["product-description"]} w-167.5`}>
				<ProductInfo />
				<ProductSpecifications />
				<ProductAbout />
				<ProductBedroom />
				<ProductAdvantages />
			</div>
			<div className={`${styles["product-checkout"]}`}></div>
		</div>
	);
};
