import Tag from "../../../components/common/tag";
import { Image } from "../../../components/shared";

import { category } from "../../../styles";
import * as S from "./styles";

import { NEWS_ITEMS } from "../data";

const Hero = () => {
  const featured = NEWS_ITEMS[Math.floor(Math.random() * NEWS_ITEMS.length)];
  const list = [...NEWS_ITEMS].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <S.Wrapper $bg={featured.thumbnail}>
      <S.Container>
        <S.Heading>
          <Tag text={featured.category} color={category[featured.category]} />

          <h1 className="title">{featured.title}</h1>
          <p className="sub-title">{featured.desc}</p>
        </S.Heading>

        <S.List>
          {list.map((item) => (
            <S.Item key={item.id}>
              <Image src={item.thumbnail} width="4rem" alt={item.title} />

              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
