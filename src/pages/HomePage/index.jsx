import { Card, Container } from "@shared/ui";

import { HeaderCategories } from "@widgets";

import cardsData from "@app/model/data.json";

export const HomePage = () => {
	return (
		<>
			<HeaderCategories />
			<main className="main">
				<Container>
					<div className="main__cards">
						{cardsData.map((item, index) => {
							return <Card data={item} key={index} />;
						})}
					</div>
				</Container>
			</main>
		</>
	);
};
