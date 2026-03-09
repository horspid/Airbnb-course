import Card from "@components/Card/Card";
import Categories from "@components/Categories/Categories";
import cardsData from "@data/data.json";

const Home = () => {

    return (
        <>
            <Categories />
            <main className="main">
                <div className="container">
                    <div className="main__cards">
                        {cardsData.map((item, index) => {
                            return <Card data={item} key={index} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
