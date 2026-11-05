export default function IntroScreen({ info, onEnter }) {
  return (
    <section className="introStage" aria-label="Portada de la invitación">
      <div className="introCard royalCard introCard--decorated introCard--minimal introCard--rightDoll">
        <div className="introCrown" aria-hidden="true">♛</div>

        <div className="introHero">
          <div className="introHeroText">
            <p className="introInvitation introInvitation--solo">Estás invitado a celebrar</p>
            <h1 className="introHeading introHeading--compact">Mi cumpleaños <span>#{info.age}</span></h1>
          </div>

          <div className="introSticker introSticker--solo introSticker--rightOnly">
            <img src={info.decorations.topLeft} alt="Red animada saludando" />
          </div>
        </div>

        <button className="primaryButton enterButton" type="button" onClick={onEnter}>
          <span>ABRIR INVITACIÓN</span>
        </button>
      </div>
    </section>
  );
}
