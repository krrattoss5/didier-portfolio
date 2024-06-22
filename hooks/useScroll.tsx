import { SECTIONS, SCROLL_POSITIONS, SECTIONS_MOBILES, SCROLL_POSITIONS_MOBILE } from "@/constants";
import { useState, useEffect } from "react";

const useScroll = () => {
  const [currentScrollY, setCurrentScrollY] = useState({
    scroll: 0,
    current: "",
  });
  const [currentScrollYMobile, setCurrentScrollYMobile] = useState({
    scrollMobile: 0,
    currentMobile: "",
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let button = e.target as HTMLElement;
    const section = Object.values(SECTIONS).find(
      (sec) => sec.label === button.innerHTML
    );

    if (section) {
      setCurrentScrollY({ scroll: section.position, current: section.label });
      window.scroll(0, section.position);
    }
  };

  const handleClickMobile = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let button = e.target as HTMLElement;
    const section = Object.values(SECTIONS_MOBILES).find(
      (sec) => sec.label === button.innerHTML
    );

    if (section) {
      setCurrentScrollYMobile({ scrollMobile: section.position, currentMobile: section.label });
      window.scroll(0, section.position);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "inicio";

      if (scrollY < SCROLL_POSITIONS.sobreMi) {
        currentSection = "inicio";
      } else if (scrollY < SCROLL_POSITIONS.servicios) {
        currentSection = "sobreMi";
      } else if (scrollY < SCROLL_POSITIONS.proyectos) {
        currentSection = "servicios";
      } else if (scrollY < SCROLL_POSITIONS.contacto) {
        currentSection = "proyectos";
      } else {
        currentSection = "contacto";
      }

      setCurrentScrollY({
        current: currentSection,
        scroll: scrollY,
      });
    };

    const handleScrollMobile = () => {
      const scrollY = window.scrollY;
      let currentSection = "inicio";

      if (scrollY < SCROLL_POSITIONS_MOBILE.sobreMi) {
        currentSection = "inicio";
      } else if (scrollY < SCROLL_POSITIONS_MOBILE.servicios) {
        currentSection = "sobreMi";
      } else if (scrollY < SCROLL_POSITIONS_MOBILE.proyectos) {
        currentSection = "servicios";
      } else if (scrollY < SCROLL_POSITIONS_MOBILE.contacto) {
        currentSection = "proyectos";
      } else {
        currentSection = "contacto";
      }

      setCurrentScrollYMobile({
        currentMobile: currentSection,
        scrollMobile: scrollY,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollMobile)
    }
  }, [currentScrollY]);
  const { scroll, current } = currentScrollY;
  const {scrollMobile, currentMobile} = currentScrollYMobile
  return { scroll, current, scrollMobile, currentMobile, handleClick, handleClickMobile };
};

export default useScroll;
