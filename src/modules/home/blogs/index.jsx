import { LuBellRing, LuClock } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { useCarousel } from "../../../utils/hooks/useCarousel";
import { formatDate } from "../../../utils/helpers/formatDate";

import SectionTitle from "../../../components/common/section-title";
import * as S from "./styles";

import { BLOGS } from "../data";

const AimBlogs = () => {
  const { listRef, scrollLeft, scrollRight, scroll } = useCarousel();

  return (
    <S.Wrapper>
      <SectionTitle
        title="Latest AIM Blog"
        subtitle="Get information, inspiration, and insights on AIM by AIMers"
        Icon={LuBellRing}
      />

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
          {BLOGS.map((blog) => (
            <S.Item key={blog.id}>
              <div className="details">
                <h1>{blog.title}</h1>
                <span>
                  <LuClock /> {formatDate(blog.date, "long")}
                </span>
                <p>{blog.description}</p>
              </div>

              <S.Thumbnail src={blog.thumbnail} alt={blog.title} />
            </S.Item>
          ))}
        </S.List>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default AimBlogs;
