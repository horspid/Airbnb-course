import { Button } from "@shared/ui";
import { ProductSpec } from "@shared/ui";

export const ProductAdvantages = () => {
	const advItems = [
		{
			title: "Garden view",
			path: "/img/icons/specs/leaf.svg",
		},
		{
			title: "Kitchen",
			path: "/img/icons/specs/kitchen.svg",
		},
		{
			title: "Wifi",
			path: "/img/icons/specs/wifi.svg",
		},
		{
			title: "Pets allowed",
			path: "/img/icons/specs/bone.svg",
		},
		{
			title: "Free washer - in building",
			path: "/img/icons/specs/washer.svg",
		},
		{
			title: "Dryer",
			path: "/img/icons/specs/fire.svg",
		},
		{
			title: "Central air conditioning",
			path: "/img/icons/specs/conditioner.svg",
		},
		{
			title: "Security cameras on property",
			path: "/img/icons/specs/camera.svg",
		},
		{
			title: "Refrigerator",
			path: "/img/icons/specs/bag.svg",
		},
		{
			title: "Bicycles",
			path: "/img/icons/specs/bycycle.svg",
		},
	];
	return (
		<div className="product-advantages pt-8 pb-8 border-b">
			<h3 className="text-2xl font-medium">What this place offers</h3>
			<div className="product-advantages__wrapper grid grid-cols-2 mt-6">
				{advItems.map((item, index) => (
					<ProductSpec
						specs={item}
						key={index}
						classNames="font-normal"
					/>
				))}
			</div>
			<Button variant="outline" className=" mt-8">
				Show all 37 amenities
			</Button>
		</div>
	);
};
