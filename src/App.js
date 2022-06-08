import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Volunteers from "./Volunteers";
import Faq from "./Faq";
import Coc from "./Coc";
import Links from "./Links";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="center-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/coc" element={<Coc />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
