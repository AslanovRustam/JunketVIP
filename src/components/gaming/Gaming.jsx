import s from "./gaming.module.css";
import lock from "../../images/lock.png";
import { ReactComponent as Diamond } from "../../images/diamond.svg";

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
        <p className={`${s.description} ${s.hide}`}>
          Through our trademark integrity control, it allows for complete:
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <Diamond className={s.diamond} />
            transaction transparency
          </li>
          <li className={s.item}>
            <Diamond className={s.diamond} />
            secure gaming
          </li>
          <li className={s.item}>
            <Diamond className={s.diamond} />
            verifiable payouts
          </li>
        </ul>
      </div>
    </section>
  );
}
