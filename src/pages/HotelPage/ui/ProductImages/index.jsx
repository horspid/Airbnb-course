import styles from "./styles/productImages.module.css";

export const ProductImages = () => {
	const images = [
		{ src: "/img/item/1.jpg" },
		{ src: "/img/item/2.jpg" },
		{ src: "/img/item/3.jpg" },
		{ src: "/img/item/4.jpg" },
		{ src: "/img/item/2.jpg" },
	];
	return (
		<div
			className={`${styles.product__images} grid grid-cols-4 gap-2 rounded-2xl overflow-hidden mt-10`}
		>
			{images.map((item, index) => (
				<img src={item.src} key={index} className="w-full" />
			))}
		</div>
	);
};
