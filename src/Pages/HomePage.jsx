import { TimeLine } from "../Components/TimeLine/TimeLine";
import { Blogs } from "../Components/Blogs/Blogs";
import { Testimonials } from "../Components/Testimonials/Testimonials";
import { BlogsData } from "../Data/BlogsData";
import { About } from "../Components/About/About";
import { Link } from "react-router-dom";
import test1 from "../assets/testimonio1.png";
import test2 from "../assets/testimonio2.png";
import test3 from "../assets/testimonio3.png";
import { BannerPrincipal } from "../Components/Banner/BannerPrincipal";

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
        <h2 className="text-justify  tracking-tight  max-w-[85rem] mx-4 font-semibold text-lg py-5 sm:text-center sm:mx-10 lg:mx-auto lg:text-2xl sm:text-xl  sm:py-10 ">
          Identificamos nuestros activos patrimoniales, aquellos que han marcado nuestra historia y que nos identifican como sabaneteños. Estamos diseñando la proyección que será un plan donde la ruta a seguir sea clara y donde las líneas estratégicas priorizadas aporten a la Sabaneta que soñamos.</h2>
        <TimeLine param="etapa1" />
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
          Voces de la comunidad
        </h1>
        <div className="flex flex-wrap justify-center lg:gap-4 md:mt-5 lg:mt-10 mx-8">
          <Testimonials
            descripcion={
              "“Yo suelo ser una ciudadana de a pie, no existo en escenarios electorales, pero sí en una comunidad... somos corresponsables, somos de sentimientos y emociones para con la naturaleza”"
            }
            name={"Adela, vereda La Doctora"}
            img={test1}
          />
          <Testimonials
            descripcion={
              "“Mi papá tuvo una finca de café en La Doctora, vivían cuando tenían 40 años donde se unen Las Brisas. A mí me tocó hacer la primera calle importante en sabaneta que se convirtió en la Avenida Pilsen”"
            }
            name={"Relatos ciudadanos "}
            img={test2}
          />
          <Testimonials
            descripcion={
              "“Nos motivó a venirnos a Sabaneta el ambiente, muy familiar, hemos visto el parque lleno de familia, de gente, y la rumba es tranquila, como de pueblo y en el día se puede caminar tranquilamente, el ambiente y la seguridad se nota”"
            }
            name={"Liceth Calderón"}
            img={test3}
          />
        </div>
      </div>
    </>
  );
};
