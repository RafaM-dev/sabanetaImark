// import { useParams } from "react-router-dom";
// import { SitesInfo } from "../../Data/SitesInfo";
// import { motion } from "framer-motion";

// export const SitesDetails = () => {
//   const { id } = useParams();
//   const Site = SitesInfo[`Site${id}`];
//   if (!Site) {
//     return <div>Sitio no encontrado</div>;
//   }
//   const {
//     label,
//     titulo,
//     alt,
//     direccion,
//     telefono,
//     celular,
//     text,
//     cords,
//     imgSrc,
//   } = Site;
//   return (
//     <motion.div
//       className="info  p-4 px-20 pb-12  rounded-lg  mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-56"
//       initial={{ opacity: 0 }} // Inicialmente con opacidad 0
//       animate={{ opacity: 1 }} // Anima a opacidad 1 cuando se muestra
//       exit={{ opacity: 0 }} // Anima a opacidad 0 cuando se cierra
//       transition={{ duration: 0.5 }} // Duración de la animación (puedes ajustarla según tus preferencias)
//     >
//       <h1 className="text-center text-3xl my-3 mb-12 ">{label}</h1>
//       <div className="flex gap-28">
//         <img
//           src={imgSrc}
//           alt={alt}
//           className="w-8/12 h-[30rem] mb-4 rounded-lg object-cover "
//         />
//         <iframe
//           src={cords}
//           width="300"
//           height="auto"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       <h1>{titulo}</h1>
//       <p className="text-gray-800 text-justify text-lg p-2">
//         <strong>Dirección:</strong> {direccion}
//       </p>
//       <p className="text-gray-800 text-justify text-lg p-2">
//         <strong>Telefono:</strong> {telefono}
//       </p>
//       {celular ? (
//         <p className="text-gray-800 text-justify text-lg p-2">
//           <strong>Celular:</strong> {celular}
//         </p>
//       ) : null}

//       <p className="text-gray-800 text-justify text-lg p-2 mb-20">{text}</p>

//     </motion.div>
//   );
// };
