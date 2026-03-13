import styles from "./styles/ProductInfo.module.css";

import { Avatar } from "@shared/ui";

export const ProductInfo = () => {
	const listing = [
		"4-6 guests",
		"Entire Home",
		"5 beds",
		"3 bath Wifi",
		"Kitchen",
		"Free Parking",
	];
	const listingParsed = listing.join(" • ");

	return (
		<div
			className={`${styles["product-description__info"]} mt-10 flex justify-between pb-6 border-b`}
		>
			<div className={styles["product-description__spec"]}>
				<h2 className="text-xl">Entire rental unit hosted by Ghazal</h2>
				<div className="flex gap-2 items-center text-sm mt-2">
					{listingParsed}
				</div>
			</div>
			<Avatar />
		</div>
	);
};
