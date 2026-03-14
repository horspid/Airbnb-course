import { useState } from "react";
import { addDays } from "date-fns";

import { Calendar, Card, CardContent } from "@shared/ui";

export const CustomCalendar = () => {
	const [dateRange, setDateRange] = useState({
		from: new Date(new Date().getFullYear(), 0, 12),
		to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
	});

	return (
		<Card className="w-fit p-0 mt-6">
			<CardContent className="p-0">
				<Calendar
					mode="range"
					defaultMonth={dateRange?.from}
					selected={dateRange}
					onSelect={setDateRange}
					numberOfMonths={2}
					className="[--cell-size:2.5rem]"
					disabled={(date) =>
						date > new Date() || date < new Date("1900-01-01")
					}
				/>
			</CardContent>
		</Card>
	);
};
