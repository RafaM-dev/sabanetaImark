import { Link } from "react-router-dom";

export const EtapasProyecto = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-8 sm:py-10 lg:px-8 h-[30rem] ">
      <div className="absolute inset-0  bg-[radial-gradient(60rem_100rem_at_top,#ff6730,white)] opacity-70"></div>
      <div className="absolute inset-y-0 right-1/2  mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#fefefe] shadow-xl shadow-orange-900/10 ring-1 ring-orange-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className=" max-w-2xl lg:max-w-4xl relative z-0 ml-[18rem]">
        <h2 className="text-5xl font-semibold mb-6 text-titleColor">
          ¿Cómo lo haremos?
        </h2>
        <p className="text-xl mb-6 w-[38rem]">
          Hemos diseñado una metodología de 4 etapas para la potenciación de
          activos los estratégicos del Municipio
        </p>
        <div className="flex flex-col">
          <Link className="text-xl bg-orangeBtn text-center text-white font-semibold my-[5px] p-2 rounded-xl w-[28rem] hover:bg-darkOrange hover:scale-105 transition-transform  ">
            Participación e identidad
          </Link>

          <Link className="text-xl bg-orangeBtn text-center text-white font-semibold my-[5px] p-2 rounded-xl w-[28rem] hover:bg-darkOrange hover:scale-105 transition-transform ">
            Co creación plataforma estratégicas
          </Link>

          <Link className="text-xl bg-orangeBtn text-center text-white font-semibold my-[5px] p-2 rounded-xl w-[28rem] hover:bg-darkOrange hover:scale-105 transition-transform ">
            Diseño del despliegue estratégico
          </Link>

          <Link className="text-xl bg-orangeBtn text-center text-white font-semibold my-[5px] p-2 rounded-xl w-[28rem] hover:bg-darkOrange hover:scale-105 transition-transform ">
            Plan de proyección
          </Link>
        </div>
      </div>
    </section>
  );
};
