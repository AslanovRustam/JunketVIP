import { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import s from "./games.module.css";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import i1 from "../../images/icons/1.png";
import i2 from "../../images/icons/2.png";
import i3 from "../../images/icons/3.png";
import i4 from "../../images/icons/4.png";
import i5 from "../../images/icons/5.png";
import i6 from "../../images/icons/6.png";
import i7 from "../../images/icons/7.png";
import i8 from "../../images/icons/8.png";
import i9 from "../../images/icons/9.png";
import i10 from "../../images/icons/10.png";
import i11 from "../../images/icons/11.png";
import i12 from "../../images/icons/12.png";
import i13 from "../../images/icons/13.png";
import i14 from "../../images/icons/14.png";
import i15 from "../../images/icons/15.png";
import i16 from "../../images/icons/16.png";
import i17 from "../../images/icons/17.png";
import i18 from "../../images/icons/18.png";
import i19 from "../../images/icons/19.png";
import i20 from "../../images/icons/20.png";
import i21 from "../../images/icons/21.png";
import i22 from "../../images/icons/22.png";
import i23 from "../../images/icons/23.png";
import i24 from "../../images/icons/24.png";
import i25 from "../../images/icons/25.png";

const icons = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
  i22,
  i23,
  i24,
  i25,
];
const iconsMob = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
];

export default function Games() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [renderIcons, setRenderIcons] = useState(
    viewportWidth < 376 ? iconsMob : icons
  );
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setRenderIcons(viewportWidth < 376 ? iconsMob : icons);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={s.section}>
      <div className={s.games}>
        <div className={s.text}>
          <h2 className={s.title}>
            Only <span className={s.gold}>The Best</span>{" "}
            <span className={s.white}>Games</span>
          </h2>
          <p className={s.subTitle}>
            Explore our extensive range of high-quality games, including live
            casino and high-stakes options offering attractive payout
          </p>
          <ul className={s.list}>
            <li className={s.item}>
              <img className={s.icon} src={icon1} alt="icon1" />
              <p className={s.description}>Wide variety of Games</p>
            </li>
            <li className={s.item}>
              <img className={s.icon} src={icon2} alt="icon2" />
              <p className={s.description}>Top Game Providers</p>
            </li>
            <li className={s.item}>
              <img className={s.icon} src={icon3} alt="icon3" />
              <p className={s.description}>Impressive Payout Rates</p>
            </li>
            <li className={s.item}>
              <img className={s.icon} src={icon4} alt="icon4" />
              <p className={s.description}>Private Tournaments</p>
            </li>
          </ul>
        </div>
        <ul className={s.images}>
          {renderIcons.map((icon, index) => (
            <li key={index} className={s.gameIcon}>
              <img className={s.iconImg} src={icon} alt="icon game" />
            </li>
          ))}
        </ul>
      </div>
      {/* <div></div> */}
      <Slider />
    </section>
  );
}
