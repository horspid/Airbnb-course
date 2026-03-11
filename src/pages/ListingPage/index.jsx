import styles from "./styles/listingPage.module.css";

import { ListingCard } from "@shared";
import Container from "@layouts/Container/Container";

import data from "@app/model/listing.json";

export const ListingPage = () => {
	return (
		<>
			<div className={styles.options}>
				<Container>Options</Container>
			</div>
			<Container>
				<h1>Listing Page</h1>
				<div className={styles.grid}>
					<div className={styles.listing}>
						<div className={styles.listing__desc}>
							200+ stays in Bordeaux
						</div>
						<div className={styles.listing__items}>
							{data.map((item) => (
								<ListingCard key={item.id} data={item} />
							))}
						</div>
					</div>
					<div className="map">Map</div>
				</div>
			</Container>
		</>
	);
};
