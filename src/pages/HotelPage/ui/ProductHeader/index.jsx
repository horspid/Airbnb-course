import styles from "./styles/index.module.css";
import { IconStar } from "@shared/ui/Icons";
import { Button } from "@shared/ui";

export const ProductHeader = () => {
	return (
		<>
			<h1 className="font-medium text-3xl">Bordeaux Getaway</h1>
			<div className={styles.product__options}>
				<div className={styles.product__info}>
					<div className="flex gap-1 font-medium text-sm items-center">
						<IconStar size="small" />
						<span>5.0</span>
					</div>
					<div className="product__reviews">
						<Button
							variant="link"
							style={{ textDecoration: "underline" }}
						>
							7 reviews
						</Button>
					</div>
					<div
						className={`${styles.product__awards} text-sm flex gap-[2px] items-center`}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.49992 5.83317L12.1666 3.1665H3.83325L6.49992 5.83317"
								stroke="#DE3151"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M11.5 9.3335C11.5 11.2665 9.933 12.8335 8 12.8335C6.067 12.8335 4.5 11.2665 4.5 9.3335C4.5 7.4005 6.067 5.8335 8 5.8335C9.933 5.8335 11.5 7.4005 11.5 9.3335Z"
								stroke="#DE3151"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span className={styles["product__awards-title"]}>
							Superhost
						</span>
					</div>
					<div
						className={`${styles.product__location} text-sm flex gap-[2px] items-center`}
					>
						Bordeaux, France
					</div>
				</div>
				<div className={styles.product__actions}>
					<Button variant="outline" size="sm">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.16675 3.1665H4.50008C3.7637 3.1665 3.16675 3.76346 3.16675 4.49984V11.4998C3.16675 12.2362 3.7637 12.8332 4.50008 12.8332H11.5001C12.2365 12.8332 12.8334 12.2362 12.8334 11.4998V9.83317"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12.8333 6.1665V3.1665H9.83325"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12.6666 3.3335L7.83325 8.16683"
								stroke="#141414"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Share</span>
					</Button>
					<Button variant="outline" size="sm">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.99677 4.8223C7.03042 3.74016 5.41896 3.44907 4.20818 4.43998C2.99741 5.4309 2.82695 7.08766 3.77778 8.25961L7.99677 12.1668L12.2158 8.25961C13.1666 7.08766 13.0169 5.42047 11.7854 4.43998C10.5538 3.45949 8.96312 3.74016 7.99677 4.8223Z"
								stroke="black"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>Save</span>
					</Button>
				</div>
			</div>
		</>
	);
};
