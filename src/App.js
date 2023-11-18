import "./App.css";
import Footer from "./components/footer/Footer";
import IndexView from "./views/index/IndexView";

function App() {
    return (
        <div className="container">
            <IndexView />

            <Footer />
        </div>
    );
}

export default App;
