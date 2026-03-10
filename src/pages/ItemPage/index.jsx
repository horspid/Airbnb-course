import styles from './index.module.css'
import Container from "@/layouts/Container/Container";

import ProductHeader from './ui/ProductHeader/ProductHeader';
import ProductImages from "./ui/ProductImages/ProductImages";

const ItemPage = () => {
    return (
        <Container>
            <div className={styles.product}>
                <ProductHeader />
                <ProductImages />
            </div>
        </Container >
    );
}

export default ItemPage;