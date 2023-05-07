import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navigation/NavBar/Navbar";
import Hero from "./components/layout/Pages/Home/HeroSection/Hero";
import Development from "./components/layout/Pages/Home/Development/Development";
import Footer from "./components/layout/Footer/Footer";
import Newsletter from "./components/layout/Newsletter/Newsletter";
import About from "./components/layout/Pages/About/About";
import AccountNavigation from "./components/layout/Pages/Account/AcountNavigation/AccountNavigation";
import PersonalData from "./components/layout/Pages/Account/Pages/PersonalData/PersonalData";
import LoginAndSecurity from "./components/layout/Pages/Account/Pages/LoginAndSecurity/LoginAndSecurity";
import OrderHistory from "./components/layout/Pages/Account/Pages/OrderHistory/OrderHistory";
import Collection from "./components/layout/Pages/Collection/Collection";
import CarsFeatured from "./components/layout/Pages/Home/CarsFeatured/CarsFeatured";
import ScrollToTop from "./Helpers/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="body">
        <header>
          <Navbar />
          <Routes>
            <Route
              path={"/account/personal-data"}
              element={<AccountNavigation />}
            />
            <Route
              path={"/account/login-and-security"}
              element={<AccountNavigation />}
            />
            <Route
              path={"/account/order-history"}
              element={<AccountNavigation />}
            />
          </Routes>

          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Development />} />
          </Routes>

          <Routes>
            <Route path="/" element={<CarsFeatured />} />
          </Routes>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/account/personal-data" element={<PersonalData />} />
            <Route
              path="/account/login-and-security"
              element={<LoginAndSecurity />}
            />
            <Route path="/account/order-history" element={<OrderHistory />} />
          </Routes>
          <Routes>
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </main>

        <footer>
          <Routes>
            <Route path="/" element={<Newsletter />} />
          </Routes>

          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
