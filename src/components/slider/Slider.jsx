import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import s from "./slider.module.css";
import company1 from "../../images/comp/company1.png";
import company2 from "../../images/comp/company2.png";
import company3 from "../../images/comp/company3.png";
import company4 from "../../images/comp/company4.png";
import company5 from "../../images/comp/company5.png";
import company6 from "../../images/comp/company6.png";

const items = [
  { logo: company1, title: "Pragmatic Play" },
  { logo: company2, title: "Netent" },
  { logo: company3, title: "3 Oaks Gaming" },
  { logo: company4, title: "Playson" },
  { logo: company5, title: "Evoplay" },
  { logo: company6, title: "Nolimit city" },
];

export default function Slider() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section>
      <Swiper
        spaceBetween={16}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        slidesPerView={viewportWidth < 376 ? 1.2 : 5}
      >
        <ul className={s.mobList}>
          {items.map(({ logo, title }) => (
            <SwiperSlide key={title}>
              <img src={logo} alt={title} />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </section>
  );
}
