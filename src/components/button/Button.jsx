import s from "./button.module.css";

export default function Button({ bg }) {
  return (
    <a href="mailTo:junket@farispin.io">
      <button type="button" className={`${s.button} ${bg ? s.gold : ""}`}>
        JOIN VIP CLUB
      </button>
    </a>
  );
}
