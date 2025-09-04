import { Main, Section } from "../../components/shared";
import Hero from "./hero";
import LifeAtAim from "./life-at-aim";

const Home = () => {
  return (
    <Main>
      <Section>
        <Hero />
      </Section>

      <Section>
        <LifeAtAim />
      </Section>
    </Main>
  );
};

export default Home;
