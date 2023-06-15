import s from "./footer.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Logo className={s.logo} />
      <a className={s.mail} href="mailTo:vip@farispin.io">
        vip@farispin.io
      </a>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#">FAQ</a>
        </li>
        <li className={s.item}>
          <a href="#">Terms & Conditions</a>
        </li>
        <li className={s.item}>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
}
