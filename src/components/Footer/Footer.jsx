import './Footer.scss';
import Image from '../../constants/index';
import Images from '../../constants/index';

const Footer = () => {
  return (
    <footer className="fg__footer">
      <div className="links">
        <h2>Fingertipe</h2>
        <a href="#">Home</a>
        <a href="#">Example</a>
        <a href="#">Picing</a>
        <a href="#">Update</a>
      </div>

      <div className="links">
        <h2>Resources</h2>
        <a href="#">Home</a>
        <a href="#">Example</a>
        <a href="#">Picing</a>
        <a href="#">Update</a>
      </div>

      <div className="links">
        <h2>About</h2>
        <a href="#">Home</a>
        <a href="#">Example</a>
        <a href="#">Picing</a>
        <a href="#">Update</a>
      </div>

      <div className="addresses">
        <div className="address">
          <img src={Images.location} alt="Adress" />
          <p>7480 Mockingbird Hill undefined </p>
        </div>
        <div className="address">
          <img src={Images.phone} alt="Phone" />
          <p>(239) 555-0108</p>
        </div>

        <div className="social">
          <img src={Images.facebook} alt="Facebook" />
          <img src={Images.twitter} alt="Twitter" />
          <img src={Images.linkedin} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
