import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p data-aos="zoom-in-down" className="heading">
        My, <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="flip-left">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              <li>
                <h3>✅ Desarrollo de Interfaces.</h3>
              </li>
              <li>
                <h3>✅ Estilos y Diseño.</h3>
              </li>
              <li>
                <h3>✅ Optimización del Frontend.</h3>
              </li>
              <li>
                <h3>✅ Responsive Design.</h3>
              </li>
              <li>
                <h3>✅ Interacción y Usabilidad.</h3>
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div data-aos="flip-down">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              <li>
                <h3>✅ Desarrollo de API.</h3>
              </li>
              <li>
                <h3>✅ Gestión de Bases de Datos.</h3>
              </li>
              <li>
                <h3>✅ Autenticación y Seguridad.</h3>
              </li>
              <li>
                <h3>✅ Optimización del Rendimiento.</h3>
              </li>
              <li>
                <h3>✅ Integración de Servicios.</h3>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="flip-right">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              FullStack
            </h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              <li>
                <h3>✅ Desarrollo Completo de Aplicaciones.</h3>
              </li>
              <li>
                <h3>✅ Interfaz de Usuario.</h3>

              </li>
              <li>
                <h3>✅ Integración y Conexión.</h3>
              </li>
              <li>
                <h3>✅ Gestión de Proyectos.</h3>
              </li>
              <li>
                <h3>✅ SEO y Optimización.</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
