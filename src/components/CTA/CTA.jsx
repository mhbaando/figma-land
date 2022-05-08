import './CTA.scss';
import Images from '../../constants/index';

// CTA => Call to Action
const CTA = () => {
  return (
    <section className="fg__cta">
      <div className="fg__cta--container">
        <div className="fg__cta-info">
          <h2>OpenType features and Variable fonts</h2>
          <button type="button">Try For Free</button>
        </div>
        <div className="fg__cta-image">
          <img src={Images.CTA} alt="Open Type features" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
