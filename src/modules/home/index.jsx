import { Main, Section } from "../../components/shared";

import Hero from "./hero";
import LifeAtAim from "./life-at-aim";
import Features from "./features";
import Programs from "./programs";
import Alumni from "./alumni";

const Home = () => {
  return (
    <Main>
      <Section>
        <Hero />
      </Section>

      <Section>
        <LifeAtAim />
      </Section>

      <Section $bg="#163E71">
        <Features />
      </Section>

      <Section>
        <Programs />
      </Section>

      <Section>
        <Alumni />
      </Section>
    </Main>
  );
};

export default Home;
