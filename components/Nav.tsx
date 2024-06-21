import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

interface Props {
  handleOpenMenu: () => void;
}

const Nav: React.FC<Props> = ({ handleOpenMenu }) => {
  const [currentScrollY, setCurrentScrollY] = useState({
    scroll: 0,
    current: "",
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let button = e.target as HTMLElement

    if (button.innerHTML === "INICIO") {
      setCurrentScrollY({ current: "inicio", scroll: 0 });
      window.scroll(0, 0);
    }

    if (button.innerHTML === "SOBRE MI") {
      setCurrentScrollY({ current: "sobre mi", scroll: 700 });
      window.scroll(0, 700);
    }

    if (button.innerHTML === "SERVICIOS") {
      setCurrentScrollY({ current: "servicios", scroll: 1350 });
      window.scroll(0, 1350);
    }

    if (button.innerHTML === "PROYECTOS") {
      setCurrentScrollY({ current: "proyectos", scroll: 2000 });
      window.scroll(0, 2000);
    }

    if (button.innerHTML === "CONTACTO") {
      setCurrentScrollY({ current: "contacto", scroll: 3000 });
      window.scroll(0, 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 230) {
        return setCurrentScrollY({
          scroll: window.scrollY,
          current: "inicio",
        });
      }

      if (window.scrollY > 230 && window.scrollY < 990) {
        return setCurrentScrollY({
          scroll: window.scrollY,
          current: "sobre mi",
        });
      }

      if (window.scrollY > 990 && window.scrollY < 1730) {
        return setCurrentScrollY({
          scroll: window.scrollY,
          current: "servicios",
        });
      }

      if (window.scrollY > 1729 && window.scrollY < 2410) {
        return setCurrentScrollY({
          scroll: window.scrollY,
          current: "proyectos",
        });
      }

      if (window.scrollY > 3028) {
        return setCurrentScrollY({
          scroll: window.scrollY,
          current: "contacto",
        });
      }
    };
    // console.log(window.scrollY)
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollY]);

  return (
    <div className="w-[100%] fixed top-0 h-[12vh] bg-[#141c27] shadow-md z-[10000000000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PORTFOLIO
          <span className="text-yellow-300">DEV</span>
        </h1>
        <span
          className={
            currentScrollY.current === "inicio" ? "selected" : "nav-link"
          }
          onClick={handleClick}
        >
          INICIO
        </span>
        <div
          className={
            currentScrollY.current === "sobre mi" ? "selected" : "nav-link"
          }
          onClick={handleClick}
        >
          SOBRE MI
        </div>
        <div
          className={
            currentScrollY.current === "servicios" ? "selected" : "nav-link"
          }
          onClick={handleClick}
        >
          SERVICIOS
        </div>
        <div
          className={
            currentScrollY.current === "proyectos" ? "selected" : "nav-link"
          }
          onClick={handleClick}
        >
          PROYECTOS
        </div>
        {/* <div className='nav-link'>BLOG</div> */}
        <div
          className={
            currentScrollY.current === "contacto" ? "selected" : "nav-link"
          }
          onClick={handleClick}
        >
          CONTACTO
        </div>
        <div onClick={handleOpenMenu}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
