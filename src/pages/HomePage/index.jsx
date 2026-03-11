import Card from "@components/Card/Card";
import Categories from "@components/Categories/Categories";
import cardsData from "@data/data.json";
import Container from "@layouts/Container/Container";
export const HomePage = () => {
	return (
		<>
			<Categories />
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
