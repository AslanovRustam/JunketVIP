import { useSwiper } from "swiper/react";
import s from "./slider.module.css";
import arrow from "../../images/arrowSlide.png";

export default function NextButton() {
  const swiper = useSwiper();

  return (
    <div className={s.nextBtn} onClick={() => swiper.slideNext()}>
      <img className={s.arrow} src={arrow} alt="arrow" />
    </div>
  );
}
