import { IconStar, Button } from "@shared/ui";
import { ReviewsBar } from "./ui/ReviewsBar";

import { ReviewCard } from "@entities/review";

export const Reviews = () => {
	const data = { rating: 5.0, count: "7 reviews" };
	const parsedReviews = data.rating.toFixed(1) + " • " + data.count;

	const stats = [
		{
			title: "Cleanliness",
			value: 3.0,
		},
		{
			title: "Communication",
			value: 5.0,
		},
		{
			title: "Check-in",
			value: 5.0,
		},
		{
			title: "Accuracy",
			value: 5.0,
		},
		{
			title: "Location",
			value: 5.0,
		},
		{
			title: "Value",
			value: 5.0,
		},
	];

	const reviewsItems = [
		{
			path: "/img/avatars/01.jpg",
			username: "Jose",
			date: "December 2021",
			text: "Host was very attentive.",
		},
		{
			path: "/img/avatars/02.jpg",
			username: "Luke",
			date: "December 2021",
			text: "Nice place to stay!",
		},
		{
			path: "/img/avatars/03.jpg",
			username: "Shayna",
			date: "December 2021",
			text: "Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...",
		},
		{
			path: "/img/avatars/04.jpg",
			username: "Josh",
			date: "November 2021",
			text: "Well designed and fun space, neighborhood has lots of energy and amenities.",
		},
	];
	return (
		<div className="pt-8 pb-8 border-b">
			<div className="reviews__info flex items-center gap-1">
				<IconStar size="lg" />
				<p className="text-2xl">{parsedReviews}</p>
			</div>
			<div className="reviews__stats grid grid-cols-2 gap-x-40 gap-y-4 mt-8">
				{stats.map((item, index) => (
					<ReviewsBar data={item} key={index} />
				))}
			</div>
			<div className="reviews__items grid grid-cols-2 gap-x-20 gap-y-10 mt-8">
				{reviewsItems.map((item, index) => (
					<ReviewCard data={item} key={index} />
				))}
			</div>
			<Button variant="outline" className="mt-8" size="lg">
				Show all 37 amenities
			</Button>
		</div>
	);
};
