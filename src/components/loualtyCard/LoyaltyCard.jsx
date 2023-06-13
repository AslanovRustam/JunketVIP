import s from "./loyaltyCard.module.css";
import arrowUp from "../../images/arrowUp.png";
import download from "../../images/download.png";
import Button from "../button/Button";

export default function LoyaltyCard({
  logo,
  title,
  totalScore,
  daily,
  weekly1,
  weekly2,
  play,
  link,
  logoTitle,
}) {
  return (
    <>
      {link ? (
        <li className={s.container}>
          <div className={s.text}>
            <p className={s.title}>{title}</p>
            <p className={s.score}>{totalScore}</p>
          </div>
          <div className={s.deposit}>
            <p className={s.screamer}>
              Get a <span className={s.goldDeposit}>&nbsp; 100% </span>{" "}
              <span className={s.goldDeposit}>Cash</span>{" "}
              <span className={s.goldDeposit}>&nbsp;Back</span> On the
              <span className={s.whiteDeposit}>&nbsp;First</span>{" "}
              <span className={s.whiteDeposit}>Time</span>{" "}
              <span className={s.whiteDeposit}>&nbsp;Deposit</span>
            </p>
            <p className={s.subTitleDeposit}>Play and Win with Fairspin!</p>
            <Button bg />
          </div>
        </li>
      ) : (
        <li className={s.container}>
          <div className={s.wrapper}>
            <div>
              <img className={s.image} src={logo} alt="lion logo" />
              <div className={`${logoTitle}`}></div>
            </div>
            <div className={s.text}>
              <p className={s.title}>{title}</p>
              <p className={s.score}>
                Total score: <span>{totalScore}</span>
              </p>
            </div>
          </div>
          <ul className={s.variants}>
            <li className={s.item} key={daily}>
              <div className={s.arrowContainer}>
                <div className={s.imgContainer}>
                  <img className={s.imageArrow} src={arrowUp} alt="arrowUp" />
                </div>
                <span>CASHBACK</span>
              </div>
              <div className={s.bonusContainer}>
                <span className={s.bonus}>
                  Daily <span className={s.gold}>{daily}</span>
                </span>
                <span className={s.description}>NO WAGER</span>
              </div>
            </li>
            <li className={s.item}>
              <div className={s.arrowContainer}>
                <div className={s.imgContainer}>
                  <img className={s.imageArrow} src={arrowUp} alt="arrowUp" />
                </div>
                <span>CASHBACK</span>
              </div>
              <div className={s.bonusContainer}>
                <span className={s.bonus}>
                  Daily <span className={s.gold}>{weekly1}</span>
                </span>
                <span className={s.description}>NO WAGER</span>
              </div>
            </li>
            <li className={s.item}>
              <div className={s.arrowContainer}>
                <div className={s.imgContainer}>
                  <img className={s.imageArrow} src={arrowUp} alt="arrowUp" />
                </div>
                <span>CASHBACK</span>
              </div>
              <div className={s.bonusContainer}>
                <span className={s.bonus}>
                  Daily <span className={s.gold}>{weekly2}</span>
                </span>
                <span className={s.description}>
                  WAGER:<span className={s.gold}>X60</span>
                </span>
              </div>
            </li>
            <li className={s.item}>
              <div className={s.arrowContainer}>
                <div className={s.imgContainer}>
                  <img className={s.imageArrow} src={download} alt="arrowUp" />
                </div>
                <span>CASHBACK</span>
              </div>
              <div className={s.bonusContainer}>
                <span className={s.bonus}>
                  Play2Earn x <span className={s.gold}>{play}</span>
                </span>
                <span className={s.description}>NO WAGER</span>
              </div>
            </li>
          </ul>
        </li>
      )}
    </>
  );
}
