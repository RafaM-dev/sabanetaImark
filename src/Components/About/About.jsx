import about3 from "../../assets/about-033.png";
import about1 from "../../assets/about-011.png";
import about2 from "../../assets/aboutNew.png";
import { motion } from "framer-motion";
import { useInViewWithAnimation } from "../../hooks/useInViewWithAnimation";

export const About = () => {
  const { refs: refsDiv1, controls: controlsDiv1 } = useInViewWithAnimation();

  return (
    <section className="px-4 sm:py-8 2xl:py-35 relative pt-16">
      <div className="absolute w-44 h-40 left-52 bg-greenPrimary blur-3xl rounded-full z-0"></div>
      <motion.div
        ref={refsDiv1.div1}
        className="container mx-auto relative"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controlsDiv1.div1}
        transition={{ duration: 1.7, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 sm:w-4/5 px-4">
            <div className="grid grid-cols-2 gap-4 mb-7 sm:mb-0">
              <div className="col-span-1 w-full h-auto ">
                <img
                  src={about1}
                  alt="About Image 1"
                  className="rounded-xl shadow-xl mb-8 object-cover filter"
                />
                <img
                  src={about2}
                  alt="About Image 2"
                  className="rounded-xl shadow-xl  object-cover filter"
                />
              </div>
              <div className="col-span-1  p-4 flex  h-auto  items-center ">
                <img
                  src={about3}
                  alt="About Image 3"
                  className="rounded-xl shadow-xl h-56 sm:h-96  object-cover filter"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl sm:my-6 font-bold text-titleColor">
                Estamos creando la visión para los próximos diez años de
                Sabaneta
              </h1>
              <ul className="text-lg sm:text-2xl md:text-2xl  font-normal my-5 sm:my-8">
                <li className="p-1 sm:p-2 bg-titleColor rounded-xl text-white text-center  my-3">
                  Comunidad sabaneteña
                </li>
                <li className="p-1 sm:p-2 bg-titleColor rounded-xl text-white text-center my-3">
                  Sector productivo y social
                </li>
                <li className="p-1 sm:p-2 bg-titleColor rounded-xl text-white text-center my-3">
                  Administración municipal
                </li>
              </ul>
              <p className="text-black mb-6 text-lg sm:text-2xl  md:text-xl lg:text-2xl text-justify leading-8">
                Integramos nuestras miradas como actores claves para el
                beneficio de nuestro municipio, un norte claro para reconocer,
                proteger y potenciar nuestros bienes patrimoniales.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
