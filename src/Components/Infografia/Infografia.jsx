import { useState } from "react";
import "./Info.css";
import { Modal } from "../Modal/Modal";
import Doc from "../../Docs/Informe Investigación Digital Sabaneta.pdf";
import { InfografiaData } from "../../Data/InfografiaData";

export const Infografia = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({
    titulo: "",
    descripcion: "",
    img: "",
    ilustracion: "",
  });
  const toggleModal = (props) => {
    setModalProps(props);
    setShowModal(!showModal);
  };

  return (
    <section className="md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56 p-1 ">
      <article className={` my-20 tabPanel `}>
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <h1 className="text-5xl md:text-8xl text-titleColor text-center md:text-left md:mr-10  mb-5">
            Dimensiones
          </h1>
          <div className="flex flex-col  md:gap-5 m-auto">
            {Object.keys(InfografiaData).map((info) => (
              <button
                key={InfografiaData[info].id}
                className={`button ${InfografiaData[info].className} rounded-xl animated my-2 md:my-0 md:mr-2 text-[1rem] md:text-[1.5rem]`}
                onClick={() => toggleModal(InfografiaData[info])}
              >
                {InfografiaData[info].titulo}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-center mb-10 text-titleColor font-semibold text-lg md:text-2xl my-10 md:mx-0 mx-2">
          <p className="md:mr-3">
            ¡Haz clic en el enlace para descargar el Informe!
          </p>
          <a href={Doc} download className="underline ">
            Informe de investigación
          </a>
        </div>
        {showModal && <Modal {...modalProps} onClose={toggleModal} />}
      </article>
    </section>
  );
};
