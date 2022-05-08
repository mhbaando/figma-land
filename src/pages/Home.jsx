// this is home page
import {
  Header,
  HeroContainer,
  FeaturesContainer,
  ContentsContainer,
  PartnersContainer,
  GallertContainer,
  TestimonialsContaier,
  CTAContainer,
  FooterContainer,
} from '../containers/index';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroContainer />
        <FeaturesContainer />
        <ContentsContainer />
        <GallertContainer />
        <PartnersContainer />
        <TestimonialsContaier />
        <CTAContainer />
      </main>
      <FooterContainer />
    </>
  );
};

export default Home;
