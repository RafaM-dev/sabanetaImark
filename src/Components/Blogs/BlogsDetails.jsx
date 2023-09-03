import { Link, useParams } from "react-router-dom";
import { BlogsData } from "../../Data/BlogsData";

export const BlogsDetails = () => {
  const { id } = useParams();
  const blog = BlogsData[`blog${id}`];
  if (!blog) {
    return <div>Blog no encontrado</div>;
  }
  const { fechaPublicacion, titulo, contenido, autor, img } = blog;
  return (
    <section className=" pb-16 sm:pt-5 md:pt-7 lg:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <div className="w-full">
            <img
              className="w-auto h-[10rem] lg:h-[30rem] md:h-[20rem] sm-[10rem]  rounded-lg mx-auto shadow-2xl"
              src={img}
              alt="Blog"
            />

            <h2 className="text-2xl sm-text-2xl md:text-5xl lg:text-5xl leading-tight my-12 text-center text-titleColor ">
              {titulo}
            </h2>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <li className="text-base ">
                <span className="block font-semibold text-titleColor ">
                  Escrito por:
                </span>{" "}
                <span className="text-gray-700">{autor}</span>
              </li>
              <li className="text-base ">
                <span className="block font-semibold text-titleColor ">
                  Fecha de publicación:
                </span>{" "}
                <span className="text-gray-700">{fechaPublicacion}</span>
              </li>
            </ul>

            {contenido.map((seccion, index) => (
              <p
                key={index}
                className="leading-9 text-justify my-7 text-xl"
                dangerouslySetInnerHTML={{ __html: seccion }}
              />
            ))}
          </div>
          <div className="container mx-auto ">
            <h4 className="text-3xl font-semibold mb-4">Más Relatos para ti</h4>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(BlogsData)
                .slice(0, 3)
                .map((blogKey) => (
                  <div
                    className="bg-white rounded-lg overflow-hidden flex items-center p-4 space-x-4 shadow-lg cursor-pointer"
                    key={BlogsData[blogKey].id}
                  >
                    <img
                      src={BlogsData[blogKey].img}
                      alt="Blog"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-base md:text-lg font-semibold">
                        <Link
                          to={`/Blogs/${BlogsData[blogKey].id}`}
                          className="hover:text-greenPrimary"
                        >
                          {BlogsData[blogKey].titulo}
                        </Link>
                      </h5>
                      <p className="text-sm text-gray-500">
                        {BlogsData[blogKey].fecha} {BlogsData[blogKey].anio}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
