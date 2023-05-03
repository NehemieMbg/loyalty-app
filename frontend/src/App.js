import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navigation/NavBar/Navbar";
import Hero from "./components/layout/HeroSection/Hero";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Routes>
          <Route />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
