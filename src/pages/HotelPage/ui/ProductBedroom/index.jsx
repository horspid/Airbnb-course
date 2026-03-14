export const ProductBedroom = () => {
	return (
		<div className="product-bedroom pt-8 pb-8 border-b">
			<h3 className="text-2xl font-medium">Where you’ll sleep</h3>
			<div className="product-bedroom__card mt-6">
				<img
					src="/img/item/bedroom.jpg"
					alt="bedroom"
					className="rounded-xl"
				/>
				<div className="product-bedroom__desc mt-2">
					<h4 className="text-base font-medium">Bedroom</h4>
					<p className="text-sm">1 queen bed</p>
				</div>
			</div>
		</div>
	);
};
