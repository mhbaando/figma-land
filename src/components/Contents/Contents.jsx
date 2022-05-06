import './Contents.scss';
import Images from '../../constants/index';
const Contents = () => {
  return (
    <section className="fg__contents">
      <h1>Contents</h1>
      <p>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className="fg__contents--info">
        <div className="info-1">
          <h2>Work</h2>
          <p>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <button type="button">Sign Up</button>
          <img src={Images.WorkImage} alt="Work Images" />
        </div>

        <div className="info-1">
          <h2>Design with real data</h2>
          <p>
            Ever wondered if you're too reliant on a client for work? Slate
            helps you identify .
          </p>
          <button type="button">Try For Free</button>
          <div className="image">
            <img src={Images.RealData} alt="Work Images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
