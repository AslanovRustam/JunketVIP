import { useSwiper } from "swiper/react";
import s from "./slider.module.css";
import arrow from "../../images/arrowSlide.png";

export default function PrevButton() {
  const swiper = useSwiper();

  return (
    <div className={s.prevBtn} onClick={() => swiper.slidePrev()}>
      <img className={s.arrow} src={arrow} alt="arrow" />
    </div>
  );
}
