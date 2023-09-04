import { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import iglesia from "../../assets/iglesia.jpg";

const sectorOptions = [
  "Aliadas del Sur",
  "Ancón Sur",
  "Betania	x	",
  "Calle Del Banco",
  "Calle Larga",
  "El Carmelo II",
  "Entreamigos",
  "Holanda	x",
  "La Barquereña",
  "La Florida",
  "Lagos de la Doctora",
  "Las Casitas",
  "Los Alcázares	",
  "Los Arias",
  "Manuel Restrepo",
  "Maria Auxiliadora",
  "Nuestra Señora De Los Dolores",
  "Paso Ancho",
  "Playas De Maria	",
  "Prados De Sabaneta	",
  "Promisión	",
  "Restrepo Naranjo",
  "Sabaneta Real",
  "San Joaquín",
  "San Rafael",
  "Santa Ana",
  "Tres Esquinas",
  "Vegas De La Doctora	",
  "Vegas De San José",
  "Villas Del Carmen",
  "Virgen Del Carmen",
];
export const ContactForm = () => {
  const form = useRef();

  const {
    message,
    email,
    from_name,
    onResetForm,
    onInputChange,
    from_phone,
    from_sector,
  } = useForm({
    message: "",
    email: "",
    from_name: "",
    from_phone: "",
    from_sector: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fddtj9l",
        "template_3k260xo",
        form.current,
        "bdprWPgvQPxH59ztw"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Correo Enviado",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    onResetForm();
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-center text-titleColor dark:text-white ">
          Queremos conocer tu opinión para el futuro de Sabaneta
        </h2>
        <p className="my-5 sm:my-10 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400  text-lg sm:text-xl ">
          Si tienes algún aporte o comentario para el Plan estratégico (2023 -
          2033), escríbenos y comparte tu visión con nosotros.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 relative rounded-xl md:block hidden">
            <img
              src={iglesia}
              alt="Iglesia"
              className="w-full rounded-xl h-[40rem] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl h-[40rem]"></div>
          </div>
          <form
            onSubmit={sendEmail}
            action="POST"
            ref={form}
            className="md:w-1/2 space-y-3 "
          >
            <label
              htmlFor="name"
              className="block  text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Nombre Completo
            </label>
            <input
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder=" Nombre completo"
              required
              name="from_name"
              value={from_name}
              onChange={onInputChange}
            />
            <label
              htmlFor="sector"
              className="block  text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Sector al que pertenece
            </label>
            <select
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              name="from_sector"
              value={from_sector}
              onChange={onInputChange}
            >
              <option value="">Selecciona un sector</option>
              {sectorOptions.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>

            <label
              htmlFor="phone"
              className="block  text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Teléfono
            </label>
            <input
              required
              type="tel"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              maxLength="10"
              pattern="[0-9]{10}"
              name="from_phone"
              id="phone"
              value={from_phone}
              onChange={onInputChange}
              placeholder="Ingresa tu teléfono"
            />

            <label
              htmlFor="email"
              className="block  text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder=" Correo Electronico"
              required
              onChange={onInputChange}
            />

            <label
              htmlFor="message"
              className="block  text-base font-medium text-gray-900 dark:text-gray-400"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Escribenos tu mensaje"
              onChange={onInputChange}
              value={message}
            ></textarea>
            <button
              type="submit"
              className="flex justify-center items-center py-3 mx-auto px-5 text-base font-medium text-center text-white rounded-lg bg-greenPrimary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
