import './Hero.scss';
import Images from '../../constants/index';
import { motion } from 'framer-motion';

const Hero = () => {
  // convert from regular html to motion. something
  return (
    <section className="fg__hero">
      <motion.h1 whileInView={{ y: [-12, 0], opacity: [0, 1] }}>
        Work at the speed of thought
      </motion.h1>
      <motion.p whileInView={{ y: [-20, 0], opacity: [0, 1] }}>
        Most Calenders are designed for teams, slate is designed for freelancers
        whow want a simple way to plan their schedual
      </motion.p>
      <div className="fg__hero--buttons">
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="primary-btn"
        >
          Try For Free
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="ghost-btn"
        >
          Learn More
        </motion.button>
      </div>
      <div className="fg__hero--image">
        <motion.img
          initial={{ visibility: 'hidden', scale: 0 }}
          animate={{ visibility: 'visible', scale: 1 }}
          transition={{ duration: 0.4, easings: 'easeInOut' }}
          src={Images.HeroImage}
          alt="Hero Images"
        />
      </div>
    </section>
  );
};

export default Hero;
