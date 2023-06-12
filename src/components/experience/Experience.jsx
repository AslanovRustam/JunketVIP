import s from "./experience.module.css";
import { ReactComponent as Manager } from "../../images/manager2.svg";
import { ReactComponent as Promo } from "../../images/promo2.svg";
import { ReactComponent as Rewards } from "../../images/rewards2.svg";
import { ReactComponent as Vip } from "../../images/vip2.svg";

const icons = [
  <Manager className={s.icon} />,
  <Promo className={s.icon} />,
  <Rewards className={s.icon} />,
  <Vip className={s.icon} />,
];

const items = [
  {
    title: "Dedicated VIP Manager",
    description: "Personalized Assistance Tailored to Your Needs",
  },
  {
    title: "Tailored Promotions",
    description: "Exclusive Offers & Bonuses  Curated Just for You",
  },
  {
    title: "Enhanced Rewards",
    description: "Amplified Benefits and Perks for Our Most Valued Players",
  },
  {
    title: "Access to VIP Events",
    description: "Get VIP Invites to Exclusive Events and Tournaments",
  },
];

export default function Experience() {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        The Fairspin <span className={s.gold}>VIP</span>{" "}
        <span className={s.white}>Experience</span>
      </h2>
      <p className={s.subTitle}>
        Unlock unparalleled benefits and personalized services with our
        exclusive VIP program
      </p>
      <ul className={s.list}>
        {items.map(({ title, description }, index) => (
          <li className={s.item} key={title}>
            {icons[index]}
            <p className={s.itemTitle}>{title}</p>
            <p className={s.itemDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
