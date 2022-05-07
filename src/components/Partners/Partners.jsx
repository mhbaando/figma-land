import './Partners.scss';
import partenersLogo from './PartenersData';
const Partners = () => {
  const logos = partenersLogo.map((partner, index) => {
    return (
      <div className="fg__partener">
        <img src={partner.imgSrc} alt={partner.name} />
      </div>
    );
  });
  return (
    <section className="fg__parteners">
      <h1>Parteners</h1>
      <p>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className="fg__partners--logo">{logos}</div>
    </section>
  );
};

export default Partners;
