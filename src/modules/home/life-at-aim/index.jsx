import { LuMegaphone } from "react-icons/lu";

import Tag from "../../../components/common/tag";
import SectionTitle from "../../../components/common/section-title";

import styled from "@emotion/styled";
import { Container as C, Image as I } from "../../../components/shared";
import { category, breakpoint } from "../../../styles";

import { NEWS_ITEMS } from "../data";

const Wrapper = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  scroll-snap-type: x mandatory;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  grid-auto-columns: calc((100% - 3 * 1.5rem) / 4);

  ${breakpoint.tablet} {
    grid-auto-columns: calc((100% - 2 * 1rem) / 3);
    gap: 1rem;
  }

  ${breakpoint.mobile} {
    grid-auto-columns: 100%;
  }
`;

const Item = styled.li`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  .title {
    font-size: 1.15rem;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;

  .float {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
`;

const Image = styled(I)`
  transition: all 0.3s ease;
`;

const LifeAtAim = () => {
  return (
    <Wrapper>
      <SectionTitle title="Life At AIM" Icon={LuMegaphone} />

      <List>
        {NEWS_ITEMS.map((news) => (
          <Item key={news.id}>
            <Thumbnail>
              <Image src={news.thumbnail} alt={news.title} />

              <Tag
                text={news.category}
                color={category[news.category]}
                className="float"
              />
            </Thumbnail>

            <h1 className="title">{news.title}</h1>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default LifeAtAim;
