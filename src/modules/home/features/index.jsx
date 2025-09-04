import Student from "../../../assets/student.webp";
import SectionTitle from "../../../components/common/section-title";
import Grid from "../../../components/common/grid";

import { FEATURES } from "../data";
import { Image } from "../../../components/shared";
import { Fade } from "react-awesome-reveal";

import * as S from "./styles";

const Features = () => {
  return (
    <S.Wrapper>
      <SectionTitle title="Be future-ready. Be AIM." color="yellow" />

      <Grid columns={{ default: 2, tablet: 1 }} className="grid">
        <S.List>
          {FEATURES.map((feature, index) => (
            <Fade direction="up" delay={index * 200} key={feature.id}>
              <S.Item key={feature.id}>
                <S.Icon $bg={feature.bg}>
                  <feature.icon />
                </S.Icon>

                <div className="block">
                  <h1 className="title">{feature.title}</h1>
                  <p className="desc">{feature.desc}</p>
                </div>
              </S.Item>
            </Fade>
          ))}
        </S.List>

        <Image src={Student} alt="Student" className="model" />
      </Grid>
    </S.Wrapper>
  );
};

export default Features;
