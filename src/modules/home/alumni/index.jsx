import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

import Avatar from "../../../assets/avatar.webp";
import SectionTitle from "../../../components/common/section-title";

import { useCarousel } from "../../../utils/hooks/useCarousel";
import * as S from "./styles";

import { ALUMNI } from "../data";

const Alumni = () => {
  const { listRef, scrollLeft, scrollRight, scroll } = useCarousel();

  return (
    <S.Wrapper>
      <SectionTitle title="AIM Alumni" Icon={LuUsers} />

      <S.ListWrapper>
        {scrollLeft && (
          <S.Button
            className="left"
            shape="circle"
            onClick={() => scroll("left")}
            icon={<FaChevronLeft />}
            aria-label="Scroll left"
          />
        )}

        {scrollRight && (
          <S.Button
            className="right"
            shape="circle"
            onClick={() => scroll("right")}
            icon={<FaChevronRight />}
            aria-label="Scroll Right"
          />
        )}

        <S.List ref={listRef}>
          {ALUMNI.map((person) => (
            <S.Item key={person.id}>
              <S.Image src={person.profile || Avatar} alt={person.name} />

              <h1 className="name">{person.name}</h1>
              <p className="title">{person.title}</p>
            </S.Item>
          ))}
        </S.List>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default Alumni;
