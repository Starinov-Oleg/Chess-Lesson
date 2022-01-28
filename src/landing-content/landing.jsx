import SectionLearn from './content-learn/content-learn';
import SectionBaner from './content-banner/content-banner';
import SectionProgramm from './content-programm/content-programm';
import SectionCouching from './content-couching/content-couching';
import SectionNews from './content-news/content-news';
import SectionSafe from './ content-safe/content-safe';
import Header from '../main/header/Header';
import Footer from '../main/footer/Footer';

function Landing() {
  return (
    <div className="Landing">
      <Header/>
      <SectionLearn/>
      <SectionBaner/>
      <SectionSafe/>
      <SectionProgramm/>
      <SectionCouching/>
      <SectionNews/>
      <Footer/>
    </div>
  );
}

export default Landing;