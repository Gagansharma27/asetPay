import React, { useState, useEffect } from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import "./CardDeal.css";
import Button from "./Button";

import { ChevronLeft, ChevronRight } from "react-feather";

const CardDeal = () => {
  const textItems = [
    <div className={`${styles.paragraph}  max-w-[470px] mt-5`}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
        User Account Testnet V1
      </h1>
      AsetPay's User Account Testnet is a secure and simulated environment where
      users can explore the payment gateway's features. Through (KYC) process
      and Test accounts on the Testnet replicate real user accounts, allowing
      users to test registration, verification, and security measures.
      <p style={{ marginTop: "10px" }}> • Simulated Environment</p>
      <p> • KYC requirement</p>
      <p> • Test accounts</p>
      <p> • Transaction Testing</p>
      <p> • Security Testing</p>
    </div>,

    <div className={`${styles.paragraph}  max-w-[470px] mt-5`}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
        Merchant Account Testnet v2
      </h1>
      AsetPay’s Merchant Account Testnet V2 is a cutting-edge crypto payment
      gateway designed to facilitate secure and seamless cryptocurrency
      transactions for businesses and developers a sandbox environment to test
      and integrate their applications with the payment gateway.
      <p style={{ marginTop: "10px" }}> • API Integration</p>
      <p> • Realistic Testing Environment</p>
      <p> • Simulated Transactions</p>
      <p> • Kyc requirement</p>
      <p> • Comprehensive Testing capabilities</p>
    </div>,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [doAnimate, setAnimate] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? textItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
    );
    doAnimate(true);
  };

  useEffect(() => {
    const timer = setTimeout(handleNext, 3000); // Change content every 2 seconds

    return () => {
      clearTimeout(timer); // Clear the timer when the component is unmounted or updated
    };
  }, [activeIndex]);

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Asetpay Ecosystem</h2>
        <div className="text-content">{textItems[activeIndex]}</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={handlePrev}
            className="p-2 rounded-full shadow bg-white/30 text-grey-800 hover:bg-white"
            style={{ marginRight: "10px" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full shadow bg-white/30 text-grey-800 hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
