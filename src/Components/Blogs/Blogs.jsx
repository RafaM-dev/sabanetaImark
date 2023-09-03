import { Link } from "react-router-dom";

export const Blogs = ({ fecha, anio, img, titulo, contenido, id }) => {
  return (
    <article className="flex flex-col  bg-white transition shadow-xl hover:shadow-2xl md:w-full p-4 dark:bg-gray-900 dark:shadow-gray-800/25 border-solid border-2 rounded-xl mt-4 md:mt-9 ">
      <div className="p-2">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
        >
          <span>{fecha}</span>
          <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10 h-[2px]  "></span>
          <span>{anio}</span>
        </time>
      </div>
      <div className="hidden sm:block ">
        <img
          alt="Img"
          src={img}
          className="aspect-square h-full w-full object-cover rounded xl:h-56 sm:h-44"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="md:border-s border-gray-900/10  pt-4 dark:border-white/10 sm:!border-l-transparent ">
          <a href="#">
            <h3 className="font-bold  text-gray-900 dark:text-white">
              {titulo}
            </h3>
          </a>

          <p
            className={`mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200 text-justify  mb-3`}
          >
            {contenido}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to={`/Blogs/${id}`}
            className="block bg-orangeBtn px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-darkOrange rounded-xl"
          >
            Leer Relato
          </Link>
        </div>
      </div>
    </article>
  );
};
