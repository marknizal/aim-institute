import { FaCircle } from "react-icons/fa";
import { Image } from "../../../components/shared";

import { category } from "../../../styles";
import * as S from "./styles";

import { newsItems } from "./data";

const Hero = () => {
  const featured = newsItems[Math.floor(Math.random() * newsItems.length)];
  const list = [...newsItems].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <S.Wrapper $bg={featured.thumbnail}>
      <S.Container>
        <S.Heading $bg={category[featured.category]}>
          <span className="category">
            <FaCircle /> {featured.category}
          </span>
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
