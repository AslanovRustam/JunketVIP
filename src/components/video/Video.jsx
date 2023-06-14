import { useState } from "react";
import s from "./video.module.css";
import playerPlay from "../../images/play.png";

export default function Video() {
  const [play, setPlay] = useState(false);

  return (
    <section className={s.section}>
      <div className={s.bgContainer}>
        <div className={s.playerContainer}>
          {!play && (
            <div className={s.btn} onClick={() => setPlay(true)}>
              <img className={s.image} src={playerPlay} alt="play" />
            </div>
          )}
          {play && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3K3W_Gfd-e0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div className={s.text}>
        <p className={s.title}>
          <span className={s.white}>How</span> does it{" "}
          <span className={s.white}>feel</span> to be{" "}
          <span className={s.white}>a</span>{" "}
          <span className={s.gold}>Fairspin VIP?</span>
        </p>
        <p className={s.subtitle}>One of our VIPs reveals all in the video </p>
      </div>
    </section>
  );
}
