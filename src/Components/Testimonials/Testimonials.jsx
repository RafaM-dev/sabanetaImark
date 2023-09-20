import { motion } from "framer-motion";
import { useInViewWithAnimation } from "../../hooks/useInViewWithAnimation";
/* eslint react/prop-types: 0 */

export const Testimonials = ({ descripcion, name, img }) => {
  const { refs: refsDiv1, controls: controlsDiv1 } = useInViewWithAnimation();

  return (
    <section className="bg-white lg:w-3/6 xl:w-1/4 mb-3 md:mb-8 lg:mb-14 ">
      <motion.div
        className="max-w-screen-xl"
        ref={refsDiv1.div1}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controlsDiv1.div1}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <blockquote className="rounded-xl bg-gray-50 p-8">
          <div className="flex items-center gap-4">
            <img
              alt="Persona"
              src={img}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />

            <div>
              <p className="mt-1 text-lg font-semibold text-black ">{name}</p>
            </div>
          </div>

          <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
            {descripcion}
          </p>
        </blockquote>

        {/* Repite el bloque de código para cada testimonio adicional */}
      </motion.div>
    </section>
  );
};
