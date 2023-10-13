import { useEffect, useState } from "react";
import { useInViewWithAnimation } from "../../hooks/useInViewWithAnimation";
import { motion } from "framer-motion";
import { ModalTimeLine } from "./ModalTimeLine";
import { Link } from "react-router-dom";

export const TimeLineItem = ({ lineComponent, colorText }) => {
  const motionRef = useInViewWithAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);


  return (
    <motion.div
      className={`flex justify-between ${lineComponent.posicion === "left-timeline"
        ? "flex-row-reverse"
        : "flex-row"
        } items-center w-full ${lineComponent.posicion}`}
      ref={motionRef.refs.div1}
      variants={{
        hidden: { opacity: 0, x: lineComponent.posicion === "left-timeline" ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={motionRef.controls.div1}
      transition={{ duration: 1, delay: 0.4 }}
    >

      <div className={`order-1 ${lineComponent.descripcion || lineComponent.descripcionModal ? "w-1/3 " : "w-full pl-[30rem]"} hidden md:block md:w-[40%]`} >
        <video
          className="rounded-full rounded-full-img md:max-w-[15rem] lg:max-w-[18rem] m-auto"
          autoPlay
          loop
          muted
        >
          <source src={lineComponent.ilustracion} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
      {lineComponent.titulo ?
        <div className="order-1 w-full md:w-[46%] ml-6 md:ml-0 md:px-1   ${lineComponent.textPos}" d
          style={colorText}
        >
          <p className="mb-3 text-xl" >
            {lineComponent.fecha}
          </p>
          <h4 className="mb-3 font-bold text-2xl md:text-3xl"
            style={colorText}
          >
            {lineComponent.titulo}
          </h4>
          {lineComponent.descripcion &&
            <p
              className="text-base md:text-xl leading-snug text-opacity-100 text-justify"
              style={colorText}
            >
              {lineComponent.descripcion}
            </p>
          }
          {lineComponent.descripcion2 &&
            <>
              <br />
              <p
                className="text-base md:text-xl leading-snug text-opacity-100 text-justify"
                style={colorText}
              >
                {lineComponent.descripcion2}{lineComponent.aqui && <Link to={`/Vision`} className="underline">aquí.</Link>}
              </p>
            </>
          }
          {lineComponent.titulo &&
            <a
              onClick={openModal}
              className="py-2 underline cursor-pointer text-lg md:text-xl "
              style={{ colorText }}
            >
              <span className="hover:scale-50">{lineComponent.linkGaleria}</span>
            </a>
          }
          {isModalOpen && (
            <ModalTimeLine data={lineComponent.modal} descripcionModal={lineComponent.descripcionModal} descripcionModal2={lineComponent.descripcionModal2} closeModal={closeModal} />
          )}
        </div>
        : null}
    </motion.div >
  );
};
