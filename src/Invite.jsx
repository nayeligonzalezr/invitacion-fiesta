import { useEffect, useRef, useState } from "react";
import { FaHeart, FaMapMarkerAlt, FaMusic, FaPause, FaPlay } from "react-icons/fa";
import IntroScreen from "./components/IntroScreen";
import { invitationInfo as info } from "./config/info";

export function Background() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambientGlow ambientGlow--top" />
      <div className="ambientGlow ambientGlow--bottom" />
      <div className="backgroundCard backgroundCard--one"><span>A</span><b>♥</b></div>
      <div className="backgroundCard backgroundCard--two"><span>Q</span><b>♦</b></div>
      <div className="backgroundCard backgroundCard--three"><span>8</span><b>♥</b></div>
      <div className="backgroundCard backgroundCard--four"><span>K</span><b>♣</b></div>
      <span className="ambientHeart heart1">♥</span>
      <span className="ambientHeart heart2">♦</span>
      <span className="ambientHeart heart3">♠</span>
      <span className="ambientHeart heart4">✦</span>
      <span className="ambientHeart heart5">♣</span>
      <span className="ambientHeart heart6">✦</span>
      <span className="ambientHeart heart7">♛</span>
      <span className="ambientHeart heart8">♥</span>
    </div>
  );
}

function RedDecorations() {
  return (
    <>
      <div className="floatingRed floatingRed--topLeft"><img src={info.decorations.topLeft} alt="Red animada saludando" /></div>
      <div className="floatingRed floatingRed--lowerRight"><img src={info.decorations.lowerRight} alt="Red animada con corazones mágicos" /></div>
    </>
  );
}

function DecorativeCards() {
  return (
    // Únicamente la carta superior derecha del panel principal.
    // No colocar cartas decorativas junto a la ubicación.
    <div className="decorativeCards" aria-hidden="true">
      <span className="tinyCard tinyCard--b"><i>♦</i></span>
    </div>
  );
}

export function InvitationBody() {
  return (
    <main className="invitationStage" id="invitacion">
      <article className="invitationCard royalCard invitationCard--decorated">
        <RedDecorations />
        <DecorativeCards />
        <span className="crownAccent crownAccent--one" aria-hidden="true">♛</span>
        <span className="crownAccent crownAccent--two" aria-hidden="true">♛</span>
        

        <div className="playingCorner playingCorner--left" aria-hidden="true">Q<span>♥</span></div>
        <div className="playingCorner playingCorner--right" aria-hidden="true">Q<span>♥</span></div>
        <div className="topEmblem" aria-hidden="true"><span>♥</span><span className="emblemCrown">♛</span></div>

        <section className="sectionPanel sectionPanel--hero sectionPanel--heroDark">
          <p className="miniLabel headerLabel">DEL REINO DE CORAZONES</p>
          <p className="invitationOverline">Te invito a celebrar</p>
          <h1 className="mainHeading">Mi cumpleaños <span>#{info.age}</span></h1>
          <div className="ornament ornament--wide" aria-hidden="true"><i /><FaHeart /><i /></div>
          <p className="decorCaption">Prepárate para una celebración llena de brillo, corazones y mucha diversión.</p>
        </section>

        <section className="sectionPanel sectionPanel--date">
          <div className="detailsDivider" aria-hidden="true"><span>♠</span><span>♥</span><span>♦</span></div>
          <p className="detailsEyebrow">APARTA ESTA FECHA</p>
          <div className="eventDetails">
            <div className="dateTile">
              <span className="dateDayName">{info.date.weekday}</span>
              <strong className="dateNumber">{info.date.day}</strong>
              <span className="dateMonth">{info.date.month}</span>
              <span className="dateYear">{info.date.year}</span>
            </div>
            <span className="detailsSpacer" aria-hidden="true">♥</span>
            <div className="timeTile">
              <span className="clockIcon" aria-hidden="true">◷</span>
              <span className="timeLabel">A LAS</span>
              <strong className="timeNumber">{info.time}</strong>
              <span className="timePeriod">DEL DÍA</span>
            </div>
          </div>
        </section>

        <section className="sectionPanel sectionPanel--venue">
          <div className="venueBlock">
            <span className="venuePin"><FaMapMarkerAlt /></span>
            <p className="detailsEyebrow venueEyebrow">LA CELEBRACIÓN SERÁ EN</p>
            <h2>{info.venue}</h2>
            <p className="address">{info.address}</p>
            <a className="primaryButton mapButton" href={info.mapUrl} target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt aria-hidden="true" /><span>VER UBICACIÓN</span>
            </a>
          </div>
        </section>
        <span className="crownAccent crownAccent--three" aria-hidden="true">♛</span>
        <div className="bottomMessage"><span aria-hidden="true">♥</span><p>{info.confirmText}</p><span aria-hidden="true">♥</span></div>
        <footer className="cardFooter" aria-hidden="true">♥  RED  ♥  QUEEN OF HEARTS  ♥</footer>
      </article>
    </main>
  );
}

export default function Invite() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [musicError, setMusicError] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Precargar el MP3 antes del primer clic para evitar retrasos en móvil.
    audio.preload = "auto";
    audio.volume = 0.8;

    const onPlay = () => {
      setPlaying(true);
      setMusicError("");
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      setPlaying(false);
      setMusicError("No se pudo cargar el audio. Intenta reproducirlo otra vez.");
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    audio.addEventListener("error", onError);
    audio.load();

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  // IMPORTANTE: llamar a play() directamente desde el evento del clic.
  // Esto conserva la activación del usuario que exigen Safari/iOS y otros navegadores.
  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 0.8;
    setMusicError("");

    try {
      const playRequest = audio.play();
      if (playRequest && typeof playRequest.then === "function") {
        playRequest.then(() => {
          setPlaying(true);
          setMusicError("");
        }).catch((error) => {
          console.warn("No se pudo iniciar la música:", error);
          setPlaying(false);
          setMusicError("El navegador detuvo el audio. Toca REPRODUCIR para activarlo.");
        });
      }
    } catch (error) {
      console.warn("No se pudo iniciar la música:", error);
      setPlaying(false);
      setMusicError("Toca REPRODUCIR para activar la música.");
    }
  };

  const startInvitation = () => {
    // No colocar setOpened() ni un await antes de playMusic():
    // la reproducción debe solicitarse dentro del mismo gesto del usuario.
    playMusic();
    setOpened(true);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) playMusic();
    else audio.pause();
  };

  return (
    <div className={`site ${opened ? "site--opened" : "site--intro"}`}>
      <audio ref={audioRef} src={info.music} loop preload="auto" />
      <Background />
      {opened ? <InvitationBody /> : <IntroScreen info={info} onEnter={startInvitation} />}
      {opened && (
        <>
          <button
            type="button" onClick={toggleMusic}
            className={`musicControl ${playing ? "musicControl--active" : ""}`}
            aria-label={playing ? "Pausar música" : "Reproducir música"}
            title={playing ? "Pausar música" : "Reproducir música"}
            aria-pressed={playing}
          >
            <FaMusic className="musicIcon" aria-hidden="true" />
            <span>{playing ? "PAUSAR" : "REPRODUCIR"}</span>
            {playing ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
          </button>
          {musicError && (
            <div className="musicNotice" role="status">
              <span>{musicError}</span>
              <button type="button" onClick={playMusic}>Reproducir música</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
