import { Fade } from "react-awesome-reveal";
import { lazy, Suspense } from "react";
import { Main, Section, Loader } from "../../components/shared";

const Hero = lazy(() => import("./hero"));
const LifeAtAim = lazy(() => import("./life-at-aim"));
const Features = lazy(() => import("./features"));
const Programs = lazy(() => import("./programs"));
const Alumni = lazy(() => import("./alumni"));
const AimInMotion = lazy(() => import("./aim-in-motion"));
const AimBlogs = lazy(() => import("./blogs"));

const Home = () => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Section>
          <Fade triggerOnce direction="up">
            <Hero />
          </Fade>
        </Section>

        <Section>
          <LifeAtAim />
        </Section>

        <Section $bg="#163E71">
          <Fade triggerOnce direction="left">
            <Features />
          </Fade>
        </Section>

        <Section>
          <Programs />
        </Section>

        <Section>
          <Alumni />
        </Section>

        <Section>
          <AimInMotion />
        </Section>

        <Section>
          <AimBlogs />
        </Section>
      </Suspense>
    </Main>
  );
};

export default Home;
