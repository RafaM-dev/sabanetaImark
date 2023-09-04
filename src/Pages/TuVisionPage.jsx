import { Banner } from "../Components/Banner/Banner";
import { ContactForm } from "../Components/Contact/ContactForm";
import bannerTuVision from "../assets/Banners/TuVision3.png";
import bannerTuVisionResponsive from "../assets/Banners/TuVisionResponsive.png";

export const TuVisionPage = () => {
  const imageUrl = window.innerWidth <= 768 ? bannerTuVisionResponsive : bannerTuVision;

  return (
    <section>
      <Banner img={imageUrl} />
      <ContactForm />
    </section>
  );
};
