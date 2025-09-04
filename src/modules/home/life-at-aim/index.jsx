import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { LuMegaphone } from "react-icons/lu";

import Tag from "../../../components/common/tag";
import SectionTitle from "../../../components/common/section-title";

import { useCarousel } from "../../../utils/hooks/useCarousel";
import { category } from "../../../styles";
import * as S from "./styles";

import { NEWS_ITEMS } from "../data";

const LifeAtAim = () => {
  const { listRef, scrollLeft, scrollRight, scroll } = useCarousel();

  return (
    <S.Wrapper>
      <SectionTitle title="Life At AIM" Icon={LuMegaphone} />

      <S.ListWrapper>
        {scrollLeft && (
          <S.Button
            className="left"
            shape="circle"
            onClick={() => scroll("left")}
            icon={<FaChevronLeft />}
          />
        )}

        {scrollRight && (
          <S.Button
            className="right"
            shape="circle"
            onClick={() => scroll("right")}
            icon={<FaChevronRight />}
          />
        )}

        <S.List ref={listRef}>
          {NEWS_ITEMS.map((news) => (
            <S.Item key={news.id}>
              <S.Thumbnail>
                <S.Image src={news.thumbnail} alt={news.title} />

                <Tag
                  text={news.category}
                  color={category[news.category]}
                  className="float"
                />
              </S.Thumbnail>

              <h1 className="title">{news.title}</h1>
            </S.Item>
          ))}
        </S.List>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default LifeAtAim;
