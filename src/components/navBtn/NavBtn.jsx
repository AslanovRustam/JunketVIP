import { useSwiper } from "swiper/react";
import s from "./navBtn.module.css";
import arrow from "../../images/arrowSlide.png";
import star from "../../images/star.png";

export default function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.titleContainer}>
        <img className={s.image} src={star} alt="star" />
        <p className={s.title}>You can reach 5 levels</p>
      </div>
      <div className={s.buttons}>
        <div className={s.btnPrev} onClick={() => swiper.slidePrev()}>
          <img className={s.arrowPrev} src={arrow} alt="arrow" />
        </div>
        <div className={s.btnNext} onClick={() => swiper.slideNext()}>
          <img className={s.arrowNext} src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
