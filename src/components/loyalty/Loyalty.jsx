import s from "./loyalty.module.css";
import lion1 from "../../images/lion1.png";
import lion2 from "../../images/lion2.png";
import lion3 from "../../images/lion3.png";
import lion4 from "../../images/lion4.png";
import lion5 from "../../images/lion5.png";
import LoyaltyCard from "../loualtyCard/LoyaltyCard";

const items = [
  {
    logo: lion1,
    title: "Vip club steel card",
    totalScore: "1,500,000",
    daily: "2%",
    weekly1: "5%",
    weekly2: "30%",
    play: "10 000",
  },
  {
    logo: lion2,
    title: "Vip club bronze card",
    totalScore: "25,000,000",
    daily: "3%",
    weekly1: "5%",
    weekly2: "35%",
    play: "11 000",
  },
  {
    logo: lion3,
    title: "Vip club silver card",
    totalScore: "25,000,000",
    daily: "4%",
    weekly1: "5%",
    weekly2: "40%",
    play: "12 000",
  },
  {
    logo: lion4,
    title: "Vip club platinum card",
    totalScore: "25,000,000",
    daily: "5%",
    weekly1: "5%",
    weekly2: "45%",
    play: "13 000",
  },
  {
    logo: lion5,
    title: "Vip club platinum card",
    totalScore: "25,000,000",
    daily: "10%",
    weekly1: "5%",
    weekly2: "50%",
    play: "15 000",
  },
];

export default function Loyalty() {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        <span className={s.gold}>VIP</span>{" "}
        <span className={s.white}>Loyalty</span> Program
      </h2>
      <p className={s.subTitle}>
        Even more benefits with Loyalty Program Levels{" "}
      </p>
      <ul className={s.list}>
        {items.map(
          ({ logo, title, totalScore, daily, weekly1, weekly2, play }) => {
            return (
              <LoyaltyCard
                key={play}
                logo={logo}
                title={title}
                totalScore={totalScore}
                daily={daily}
                weekly1={weekly1}
                weekly2={weekly2}
                play={play}
              />
            );
          }
        )}
      </ul>
    </section>
  );
}
