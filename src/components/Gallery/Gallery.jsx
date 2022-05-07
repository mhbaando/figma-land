import React from 'react';
import './Gallery.scss';
import Images from '../../constants/index';
const Gallery = () => {
  return (
    <section className="fg__gallery">
      <h1>Gallery</h1>
      <p>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className="gallery">
        <img src={Images.Drone} alt="Drone" />
        <img src={Images.Tablet} alt="Drone" />
        <img src={Images.Meeting} alt="Drone" />
        <img src={Images.DoMore} alt="Drone" />
        <img src={Images.Code} alt="Drone" />
        <img src={Images.labtop} alt="Drone" />
        <img src={Images.Camera} alt="Drone" />
      </div>
    </section>
  );
};

export default Gallery;
