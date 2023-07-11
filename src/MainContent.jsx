import styles from "./style";
import { Route, Routes } from "react-router-dom";

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
import { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const MainContent = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Stats />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            {" "}
            <Billing />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Business />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <CardDeal />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Clients />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <CTA />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Footer />
          </ScrollAnimation>
          {/* <Billing />
          <Business />
          <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <Clients />
          <CTA />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
