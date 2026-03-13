import { ProductSpec } from "@shared/ui";

export const ProductSpecifications = () => {
	const specItems = [
		{
			title: "Entire Home",
			desc: "You’ll have the apartment to yourself",
			path: "/img/icons/specs/home.svg",
		},
		{
			title: "Enchanced Clean",
			desc: "This Host committed to Airbnb’s 5-step enhanced cleaning process.",
			path: "/img/icons/specs/stars.svg",
		},
		{
			title: "Self check-in",
			desc: "Check yourself with the keypad.",
			path: "/img/icons/specs/door.svg",
		},
		{
			title: "Free cancellation before Feb 14",
			desc: null,
			path: "/img/icons/specs/calendar.svg",
		},
	];

	return (
		<div className="flex flex-col gap-4 pt-6 pb-6 border-b">
			{specItems.map((item, index) => (
				<ProductSpec specs={item} key={index} />
			))}
		</div>
	);
};
