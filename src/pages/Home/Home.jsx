import styles from "./Home.module.css";
import FirstSection from "./Sections/FirstSection/FirstSection";
import SecondSection from "./Sections/SecondSection/SecondSection";
import ThirdSection from "./Sections/ThirdSection/ThirdSection";
import FourthSection from "./Sections/FourthSection/FourthSection";
import grids from "../../utils/cssGridClassNames";

const Home = () => {
  return (
    <>
      <main className={`${grids} ${styles.main}`}>
        <section
          role="banner"
          aria-label="Welcome to the Little Lemon Restaurant website"
        >
          <FirstSection />
        </section>
        <section>
          <SecondSection />
        </section>
        <section aria-label="Customer Testimonials">
          <ThirdSection />
        </section>
        <section aria-label="About us">
          <FourthSection />
        </section>
      </main>
    </>
  );
};

export default Home;
