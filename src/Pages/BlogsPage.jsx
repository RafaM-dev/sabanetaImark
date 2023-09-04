import { Banner } from "../Components/Banner/Banner";
import { BlogGrid } from "../Components/Blogs/BlogGrid";
import bannerBlog from "../assets/Banners/Relatos3.png";
import bannerBlogResponsive from "../assets/Banners/RelatosResponsive.png";

export const BlogsPage = () => {
  const imageUrl = window.innerWidth <= 768 ? bannerBlogResponsive : bannerBlog;

  return (
    <section>
      <Banner img={imageUrl} />
      <article className="md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56 mt-14">
        <BlogGrid />
      </article>
    </section>
  );
};
