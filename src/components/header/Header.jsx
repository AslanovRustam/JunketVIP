import s from "./header.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Fairspin } from "../../images/fairspin.svg";
import { ReactComponent as Vip } from "../../images/vipclub.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <Logo className={s.logo} />
        <div className={s.subLogo}>
          <Fairspin className={s.fairspin} />
          <Vip className={s.vip} />
        </div>
      </div>
      <button type="button" className={s.button}>
        JOIN VIP CLUB
      </button>
    </header>
  );
}
