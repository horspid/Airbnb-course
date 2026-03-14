import { CustomCalendar } from "@/shared/ui";

export const ProductDates = () => {
	return (
		<div className="pt-8 pb-8 border-b">
			<h3 className="text-2xl font-medium">7 nights in New York</h3>
			<p className="text-sm text-gray-500">Feb 19, 2022 - Feb 26, 2022</p>

			<CustomCalendar />
		</div>
	);
};
