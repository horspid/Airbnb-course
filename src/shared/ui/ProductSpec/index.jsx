import {
	Item,
	ItemMedia,
	ItemContent,
	ItemTitle,
	ItemDescription,
} from "@shared/ui";

export const ProductSpec = ({ specs, classNames }) => {
	return (
		<Item>
			{specs.path && (
				<ItemMedia>
					<img src={specs.path} alt="icon" />
				</ItemMedia>
			)}
			<ItemContent>
				<ItemTitle className={classNames}>{specs.title}</ItemTitle>
				{specs.desc && (
					<ItemDescription className={"text-sm"}>
						{specs.desc}
					</ItemDescription>
				)}
			</ItemContent>
		</Item>
	);
};
