import './Features.scss';
import Images from '../../constants/index';
const Features = () => {
  return (
    <section className="fg__features">
      <h1>Features</h1>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
      <div className="fg__features--info">
        <div className="image">
          <img src={Images.Features} alt="Features Image" />
        </div>
        <div className="features">
          <div className="feature-1">
            <div className="feature-icon">
              <img src={Images.Feature_1} alt="Source of truth" />
              <h2>A single source of truth</h2>
            </div>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="feature-1">
            <div className="feature-icon">
              <img src={Images.Feature_2} alt="Source of truth" />
              <h2>Intuitive interface</h2>
            </div>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="feature-1">
            <div className="feature-icon">
              <img src={Images.Feature_3} alt="Source of truth" />
              <h2>Or with rules</h2>
            </div>
            <p>
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
