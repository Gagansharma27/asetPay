import React from "react";
import styles from "../style";
import { close, logo, menu } from "../assets";

function ComingSoon() {
  return (
    <div className=" font-poppins bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
            <span class="text-bold">
              <img src={logo} alt="" />
            </span>
            <h1 class="text-5xl py-6">
              We are <b>Almost</b> there!
            </h1>
            <p>Stay tuned for something amazing!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
