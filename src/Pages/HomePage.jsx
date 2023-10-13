import { TimeLine } from "../Components/TimeLine/TimeLine";
import { Blogs } from "../Components/Blogs/Blogs";
import { BlogsData } from "../Data/BlogsData";
import { About } from "../Components/About/About";
import { Link } from "react-router-dom";
import { BannerPrincipal } from "../Components/Banner/BannerPrincipal";
import { Slider } from "../Components/Slider/Slider";

export const HomePage = () => {

  const blogsComponents = Object.keys(BlogsData)
    .map((blogKey) => {
      const { id, fecha, anio, img, titulo, descripcion } = BlogsData[blogKey];
      return (
        <Blogs
          key={id}
          id={id}
          fecha={fecha}
          anio={anio}
          img={img}
          titulo={titulo}
          descripcion={descripcion}
        />
      );
    })
    .slice(0, 3);

  return (
    <>
      <BannerPrincipal />
      <About />
      <section className="w-full ">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl w-full  pt-10 text-family-roboto sans-serif text-titleColor">
          Avancemos Juntos
        </h1>
        <h2 className="text-justify  tracking-tight  max-w-[85rem] mx-4 font-semibold text-lg py-5 sm:text-center sm:mx-10 lg:mx-auto lg:text-2xl sm:text-lg  sm:py-10 ">
          Identificamos nuestros activos patrimoniales, aquellos que han marcado nuestra historia y que nos identifican como sabaneteños. Estamos diseñando la proyección que será un plan donde la ruta a seguir sea clara y donde las líneas estratégicas priorizadas aporten a la Sabaneta que soñamos.</h2>
        <TimeLine param="etapa1" />
        <div className="bg-image-text w-full h-auto flex justify-center items-center ">
          <h2 className="text-justify text-white tracking-tight max-w-[100rem] mx-4 font-medium text-base py-5  sm:mx-10 lg:mx-10 lg:text-2xl sm:text-xl  sm:py-10">
            Después de haber tenido espacios de creación colectiva con la ciudadanía, el sector social y productivo, emprendedor y de haber caminado los barrios y veredas, priorizamos las líneas estratégicas para el desarrollo de Sabaneta. En este proceso que avanza de la mano de la Universidad de Antioquia, encontramos que hay una percepción del municipio como una ciudad dormitorio, una Sabaneta caracterizada por el desarrollo habitacional, donde sus habitantes trabajan y realizan actividades en otros municipios.
            <br />
            <br />
            Las dimensiones que más valoramos como sabaneteños son la Calidad de vida y la forma en que vivimos, la educación, la salud, la seguridad que sentimos y tenemos recorriendo el municipio, la movilidad, el entretenimiento, el aire de pueblo que ha perdurado hasta hoy, la inclusión, la economía, el turismo ecológico, religioso y el ambiente sostenible.
          </h2>
        </div>

        <TimeLine param="etapa2" />
        <TimeLine param="etapa3" />
        <TimeLine param="etapa4" />
        {/* <Prueba /> */}
      </section>
      <div className="bg-image-container w-full ">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl w-full my-4  md:mt-20   md:mb-10 text-titleColor">
          Relatos sabaneteños
        </h1>
        <div className="grid grid-cols-1 gap-0 md:gap-4 mx-4 sm:grid-cols-2 sm:mx-8 md:grid-cols-2 md:mx-8 lg:grid-cols-3 lg:mx-16 xl:grid-cols-3 xl:mx-20 2xl:grid-cols-3 2xl:mx-56">
          {blogsComponents}
        </div>
        <button className="rounded-md flex justify-center items-center bg-white px-3.5 py-2  overflow-hidden relative group cursor-pointer border-2 font-medium border-[#F9A081] text-orangeBtn w-28 m-auto mt-10">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-orangeBtn top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <Link
            to="/Blogs"
            className="relative text-dark transition duration-300 group-hover:text-white ease rounded-xl"
          >
            Ver Más
          </Link>
        </button>
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl w-full my-14 lg:my-20 text-titleColor">
          Voces sabaneteñas
        </h1>
        <Slider />
      </div>
    </>
  );
};
