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
    <div className="modal" onClick={onClose}>
      <div className="modal-content overflow-auto" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose size={25} />
        </button>
        <h1 className="text-center p-4 text-4xl md:text-5xl w-auto m-auto text-titleColor font-medium">
          {titulo}
        </h1>
        <img
          src={img}
          alt="imagen"
          className="w-60 m-auto shadow-2xl rounded-full mb-4 md:mb-8"
        />
        <p className="text-justify p-4 text-base md:text-lg">{descripcion}</p>
        {descripcion2 && (
          <p className="text-justify p-4 text-base md:text-lg">{descripcion2}</p>
        )}
        <p className="text-justify p-4 text-base md:text-lg">{pais}</p>

        <ul className="p-4 text-base md:text-xl w-auto">
          {listado.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="p-4 text-2xl md:text-3xl w-auto font-medium">{proyecto}:</h3>
        {tituloProyecto && (
          <h3 className="p-4 text-base md:text-xl w-auto">{tituloProyecto}</h3>
        )}
        <ul className="text-base md:text-lg p-4">
          {listadoProyecto.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
