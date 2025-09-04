import { useEffect, useRef, useState } from "react";

export const useCarousel = () => {
  const listRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  const updateScrollState = () => {
    const el = listRef.current;
    if (!el) return;
    setScrollLeft(el.scrollLeft > 0);
    setScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const updateItemWidth = () => {
    const el = listRef.current;
    if (!el) return;
    const firstItem = el.querySelector("li");
    if (firstItem) {
      const style = window.getComputedStyle(firstItem);
      const gap = parseFloat(style.marginRight || 0);
      setItemWidth(firstItem.offsetWidth + gap);
    }
  };

  const scroll = (direction) => {
    const el = listRef.current;
    if (!el || !itemWidth) return;
    el.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateItemWidth();
    updateScrollState();
    const el = listRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    const handleResize = () => {
      updateItemWidth();
      updateScrollState();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!listRef.current || !itemWidth) return;
      const el = listRef.current;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [itemWidth]);

  return {
    listRef,
    scrollLeft,
    scrollRight,
    scroll,
  };
};
