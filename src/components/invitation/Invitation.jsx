import Button from "../button/Button";
import s from "./invitation.module.css";

export default function Invitation() {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        Get <span className={s.white}>Personal</span> <br></br>{" "}
        <span className={s.gold}>VIP Club</span>
        &nbsp;Invitation
      </h2>
      <p className={s.subtitle}>Chat with your Personal VIP Manager</p>
      <Button bg />
    </section>
  );
}
