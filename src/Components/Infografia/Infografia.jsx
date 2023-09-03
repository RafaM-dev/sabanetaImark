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
  // const [activeTab, setActiveTab] = useState(0);

  // const showPanel = (index) => {
  //   setActiveTab(index);
  // };

  return (
    <section className="md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56 p-1 ">
      {/* <h1 className="text-center text-5xl my-9">Introducción</h1>
      <p className="text-justify">Imark, Grupo de Investigación en marketing hizo una sesión de entendimiento con la
        Dirección de planeación del Municipio de Sabaneta, donde se les presentaron diferentes
        dimensiones de los índices más destacados a nivel mundial que miden los ranking de
        ciudades inteligentes, incluyendo mediciones realizadas en el país. Teniendo en cuenta
        estos índices y sus definiciones se eligieron diez dimensiones que fueron las más comunes
        entre las mediciones. A partir de estas 10 dimensiones se hizo una votación y se
        priorizaron los 5 más importantes para el municipio y con base en estos se realizó la
        investigación digital. Así mismo, desde Imark se decidió agregar la dimensión de inclusión
        y accesibilidad, ya que en el segundo taller con ciudadanos resultó ser un tema de gran
        interés para la comunidad.<br></br>

        Una vez se hizo la investigación, se socializaron los resultados con el equipo de la
        Dirección de planeación y se incluyó la información de cómo está Sabaneta en cada una de
        las dimensiones y los proyectos que están adelantando actualmente.</p> */}
      {/* <div className="tabButtons">
        <button className={activeTab === 0 ? "active" : ""} onClick={() => showPanel(0)}>
          Infografía 1
        </button>
        <button className={activeTab === 1 ? "active" : ""} onClick={() => showPanel(1)}>
          Infografía 2
        </button>
        <button className={activeTab === 2 ? "active" : ""} onClick={() => showPanel(2)}>
          Infografía 3
        </button>
      </div> */}
      <article className={` my-20 tabPanel `}>
        <div className="flex flex-col items-center md:flex-row md:items-center">

          <h1 className="text-5xl md:text-[7.5rem] text-titleColor text-center md:text-left md:mr-10 ">
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

        <div className="flex flex-col items-center md:flex-row justify-center mb-10 text-titleColor font-semibold text-2xl my-10">
          <p className="md:mr-3">
            ¡Haz clic en el enlace para descargar el Informe!
          </p>
          <a href={Doc} download className="underline ">
            Descargar Informe de investigación
          </a>
        </div>
        {showModal && <Modal {...modalProps} onClose={toggleModal} />}

      </article>

    </section>
  );
};
