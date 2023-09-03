import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { AppRouter } from "./Components/Routes/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
