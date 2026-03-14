import { Field, FieldLabel, Progress } from "@shared/ui";

export const ReviewsBar = ({ data }) => {
	const convertedValue = 20 * data.value;
	return (
		<Field>
			<FieldLabel htmlFor="progress-upload">
				<span>{data.title}</span>
				<span className="ml-auto">{data.value}</span>
			</FieldLabel>
			<Progress value={convertedValue} id="progress-upload" />
		</Field>
	);
};
