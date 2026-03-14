import { Button } from "@shared/ui";

export const ProductAbout = () => {
	return (
		<div className="pt-8 pb-8 border-b">
			<p className="text-base">
				Come and stay in this superb duplex T2, in the heart of the
				historic center of Bordeaux. Spacious and bright, in a real
				Bordeaux building in exposed stone, you will enjoy all the
				charms of the city thanks to its ideal location. Close to many
				shops, bars and restaurants, you can access the apartment by
				tram A and C and bus routes 27 and 44.
			</p>
			<Button variant="link" className="pl-0 underline mt-6">
				Show more
			</Button>
		</div>
	);
};
