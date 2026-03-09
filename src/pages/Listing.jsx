import ListingCard from '../components/ListingCard/ListingCard';
import styles from './styles/Listing.module.css'

import data from '@data/listing.json'

const Listing = () => {
    return (
        <>
            <div className={styles.options}>Options</div>
            <div className="container">
                <h1>Listing Page</h1>
                <div className={styles.grid}>
                    <div className={styles.listing}>
                        <div className={styles.listing__desc}>200+ stays in Bordeaux</div>
                        <div className={styles.listing__items}>
                            {data.map((item) => (
                                <ListingCard key={item.id} data={item} />
                            ))}
                        </div>
                    </div>
                    <div className="map">Map</div>
                </div>
            </div>
        </>
    );
}

export default Listing;