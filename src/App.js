import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
    const cards = data.map(item => <Card {...item} />);
    return (
        <>
            <Header />
            <section>
                {cards}
            </section>
        </>
    );
}

export default App;