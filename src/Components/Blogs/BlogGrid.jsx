import { BlogsData } from "../../Data/BlogsData";
import { Blogs } from "./Blogs";

export const BlogGrid = () => {
  const blogsComponents = Object.keys(BlogsData).map((blogKey) => {
    const { id, fecha, anio, img, titulo, contenido } = BlogsData[blogKey];
    return (
      <Blogs
        key={id}
        id={id}
        fecha={fecha}
        anio={anio}
        img={img}
        titulo={titulo}
        contenido={contenido}
      />
    );
  });
  return (
    <section>
      <article className="grid grid-cols-3 gap-4 ">
        {blogsComponents}
      </article>
    </section>
  );
};
