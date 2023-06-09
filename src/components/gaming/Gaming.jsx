import s from "./gaming.module.css";
import lock from "../../images/lock.png";

export default function Gaming() {
  return (
    <section className={s.section}>
      <div className={s.imgContainer}>
        <img className={s.image} src={lock} alt="lock" />
      </div>
      <div className={s.textContainer}>
        <h2 className={s.title}>
          <span>Trustworthy</span> Gaming
        </h2>
        <p className={s.description}>
          Fairspin is powered by <span>blockchain technology,</span> providing
          unparalleled transparency and security.
        </p>
        <p className={s.description}>
          Through our trademark integrity control, it allows for complete:
        </p>
        <ul className={s.list}>
          <li className={s.item}>transaction transparency</li>
          <li className={s.item}>secure gaming</li>
          <li className={s.item}>verifiable payouts</li>
        </ul>
      </div>
    </section>
  );
}
