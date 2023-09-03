import { Banner } from "../Components/Banner/Banner";
import { ContactForm } from "../Components/Contact/ContactForm";
import bannerTuVision from "../assets/Banners/TuVision3.png";

export const TuVisionPage = () => {
  return (
    <section>
      <Banner img={bannerTuVision} />

      <ContactForm />
    </section>
  );
};
