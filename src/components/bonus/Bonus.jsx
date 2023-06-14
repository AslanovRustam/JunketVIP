import Button from "../button/Button";
import s from "./bonus.module.css";
import bonus from "../../images/bonus.png";

export default function Bonus() {
  return (
    <section className={s.section}>
      <div className={s.text}>
        <p className={s.title}>
          Get a <span className={s.gold}>100% Cash Back</span> On the{" "}
          <span className={s.white}>First Time Deposit</span>
        </p>
        <p className={s.subTitle}>Play and Win with Fairspin!</p>
        <div className={s.btnMob}>
          <Button bg />
        </div>
      </div>
      <div className={s.imageContainer}>
        <img className={s.image} src={bonus} alt="bonus" />
      </div>
    </section>
  );
}
