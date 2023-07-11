import { features } from "../constants";
import { bill } from "../assets";

import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div
      className={layout.sectionInfo}
      // onClick={() => window.open("https://pass.asetpay.org/", "_blank")}
    >
      <h2 className={styles.heading2}>
        Have you already redeemed your NFT entry pass?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The entry pass for our testnet will be accessible and can be minted on
        various networks, expanding our reach to a broader audience. Users will
        need their pass to access and utilize all 15 testnets within our
        ecosystem.
      </p>
      <div onClick={() => window.open("https://pass.asetpay.org/", "_blank")}>
        <Button styles={`mt-10`} />
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
