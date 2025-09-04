import { LuVideo } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import SectionTitle from "../../../components/common/section-title";
import Grid from "../../../components/common/grid";
import { Button } from "antd";

import * as S from "./styles";

import { VIDEOS } from "../data";

const AimInMotion = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <SectionTitle Icon={LuVideo} title="AIM In Motion" color="white" />
          <Button color="red" variant="solid" icon={<FaYoutube />}>
            Follow us on YouTube
          </Button>
        </S.Box>

        {VIDEOS.filter((video) => video.featured).map((video, index) => (
          <Fade key={index} direction="up">
            <S.Featured>
              <iframe
                src={video.src}
                title={video.title}
                allowFullScreen
                loading="lazy"
              />
              <h2>{video.title}</h2>
            </S.Featured>
          </Fade>
        ))}

        <Grid columns={{ default: 4 }} gap="1.5rem">
          {VIDEOS.filter((video) => !video.featured).map((video, index) => (
            <Fade key={index} direction="up" delay={index * 100}>
              <S.Frame>
                <iframe
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                />
                <h3>{video.title}</h3>
              </S.Frame>
            </Fade>
          ))}
        </Grid>
      </S.Container>
    </S.Wrapper>
  );
};

export default AimInMotion;
