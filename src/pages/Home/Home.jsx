import styles from "./Home.module.css"
import FirstSection from "./Sections/FirstSection/FirstSection";
import SecondSection from "./Sections/SecondSection/SecondSection";
import ThirdSection from "./Sections/ThirdSection/ThirdSection";
import FourthSection from "./Sections/FourthSection/FourthSection";
import grids from "../../utils/cssGridClassNames";

const Home = () => {

  return (
    <>
      <main className={`${grids} ${styles.main}`}>
        <section>
          <FirstSection/>
        </section>
        <section>
          <SecondSection/>
        </section>
        <section>
          <ThirdSection/>
        </section>
        <section>
          <FourthSection/>
        </section>
      </main>
    </>
  );
};

export default Home;