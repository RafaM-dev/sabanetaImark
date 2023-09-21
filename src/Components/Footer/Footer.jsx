import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 lg:py-8">
      <div className="mx-4 md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56">
        <div className="sm:flex sm:flex-col sm:justify-between">
          <Link to="/" className="mb-4 md:mb-8 w-64 sm:w-72">
            <img src={Logo} alt="" />
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-6 md:gap-8 ">
            <div>
              <h2 className="my-4 md:mt-0 md:mb-6 text-base font-bold text-dark uppercase dark:text-dark">
                Enlaces de interés
              </h2>
              <ul className="text-dark dark:text-gray-400 font-medium text-sm">
                <li className="mb-2">
                  <Link to="/" className="hover:underline">
                    Inicio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Vision" className="hover:underline">
                    Nuestra Visión
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Blogs" className="hover:underline">
                    Relatos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Infografia" className="hover:underline">
                    Recursos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/TuVision" className="hover:underline">
                    Tu Visión
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" my-3 md:mb-6 text-base font-bold text-dark uppercase dark:text-dark">
                Contacto
              </h2>
              <ul className="text-dark dark:text-gray-400 font-medium break-words text-sm">
                <li className="mb-2">
                  <span className="font-bold">Dirección: </span> Carrera 46 # 75 Sur 36 Sabaneta - Antioquia
                </li>
                <li className="mb-2">
                  <span className="font-bold">Horario de atención:</span> Lunes a jueves de 8:00 a.m a 12:00 m. y
                  de 2:00 p.m a 6:00 p.m <br></br>Viernes de 8:00 a.m a 12:00 m.
                  y de 2:00 p.m a 5:00 p.m
                </li>
                <li className="mb-2">
                  <span className="font-bold">Correo institucional:</span> aten.ciudadano@sabaneta.gov.co
                </li>
                <li className="mb-2">
                  <span className="font-bold">notificaciones judiciales:</span> notificacionesjudiciales@sabaneta.gov.co
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <h2 className=" my-3 md:mb-6 text-base font-bold text-dark uppercase dark:text-dark">
                Legal
              </h2>
              <ul className="text-dark dark:text-gray-400 font-medium text-sm">
                <li className="mb-2">
                  <a
                    href="https://www.sabaneta.gov.co/normatividad/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Normatividad
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.sabaneta.gov.co/politicas/editorial-y-de-actualizacion/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Politicas
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.sabaneta.gov.co/ayuda-para-navegar/mapa-del-sitio/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mapa del sitio
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.sabaneta.gov.co/transparenciaco/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Transparencia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

