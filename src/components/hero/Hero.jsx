import s from "./hero.module.css";
import casino from "../../images/casino.png";
import Button from "../button/Button";

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.text}>
        <h2 className={s.title}>
          <span className={s.white}>High-Stakes</span> Gaming <br></br> Pure{" "}
          <span className={s.gold}>Transparency</span>
        </h2>
        <p className={s.subTitle}>
          Fairspin offers a secure and transparent environment for discerning
          high rollers, with our 5,000+ strong game collection matched by our
          powerful integrity controls.
        </p>
        <Button />
      </div>
      <div className={s.image}>
        <img src={casino} alt="casino" />
      </div>
    </section>
  );
}
