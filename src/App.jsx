import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Landing_page from "./LANDING-PAGE/Landing_page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing_page />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
