import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({
  titulo,
  descripcion,
  descripcion2,
  pais,
  listado,
  proyecto,
  listadoProyecto,
  tituloProyecto,
  img,
  onClose,
}) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor modal
  };
  return (
    <div className="modal px-3" onClick={onClose} >
      <div className="modal-content relative" onClick={handleModalClick} style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose size={25} />{" "}
        </button>
        <h1 className="text-center p-4 text-5xl  w-auto m-auto text-titleColor font-medium">{titulo}</h1>
        <p className="text-justify p-4 text-lg">{descripcion}</p>
        {descripcion2 && <p className="text-justify p-4 text-lg">{descripcion2}</p>}
        <img
          src={img}
          alt="imagen"
          className="w-60 m-auto shadow-2xl rounded-full mb-8"
        />
        <p className="text-justify p-4 text-lg">{pais}</p>

        <ul className="p-4 text-xl w-auto">
          {listado.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className=" p-4 text-3xl  w-auto  font-medium">{proyecto}:</h3>
        {tituloProyecto && <h3 className=" p-4 text-xl  w-auto">{tituloProyecto}</h3>}
        <ul className=" text-lg p-4">
          {listadoProyecto.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};