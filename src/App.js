import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MovieGrid from "./Components/MoviesGrid";
import Watchlist from "./Components/Watchlist";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Watchlist />
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
