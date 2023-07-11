import styles from "./style";
import { Route, Routes } from "react-router-dom";
import MainContent from "./MainContent";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import ComingSoon from "./components/ComingSoon";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
