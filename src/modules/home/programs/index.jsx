import { PROGRAMS } from "../data";
import { LuBookOpen } from "react-icons/lu";

import { Image } from "../../../components/shared";
import SectionTitle from "../../../components/common/section-title";
import Grid from "../../../components/common/grid";

import * as S from "./styles";

const Programs = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <SectionTitle Icon={LuBookOpen} title="AIM Programs" color="yellow" />

        <Grid gap="2rem">
          {PROGRAMS.map((program) => (
            <figure className="image" key={program.id}>
              <Image src={program.src} alt={program.alt} />
            </figure>
          ))}
        </Grid>
      </S.Container>
    </S.Wrapper>
  );
};

export default Programs;
