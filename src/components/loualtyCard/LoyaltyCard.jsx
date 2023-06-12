import s from "./loyaltyCard.module.css";

export default function LoyaltyCard({
  logo,
  title,
  totalScore,
  daily,
  weekly1,
  weekly2,
  play,
}) {
  return (
    <li className={s.container}>
      <div className={s.wrapper}>
        <img className={s.image} src={logo} alt="lion logo" />
        <div className={s.text}>
          <p className={s.title}>{title}</p>
          <p className={s.score}>
            Total score: <span>{totalScore}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
