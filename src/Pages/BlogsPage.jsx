import { Banner } from "../Components/Banner/Banner";
import { BlogGrid } from "../Components/Blogs/BlogGrid";
import bannerBlog from "../assets/Banners/Relatos3.png";

export const BlogsPage = () => {
  return (
    <section>
      <Banner img={bannerBlog} />

      <article className="md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56 mt-14">
        <BlogGrid />
      </article>
    </section>
  );
};
