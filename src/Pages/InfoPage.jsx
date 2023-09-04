import { Banner } from "../Components/Banner/Banner";
import { Infografia } from "../Components/Infografia/Infografia";
import bannerInfo from "../assets/Banners/Recursos.png";
import bannerInfoResponsive from "../assets/Banners/RecursosResponsive.png";

export const InfoPage = () => {
  const imageUrl = window.innerWidth <= 768 ? bannerInfoResponsive : bannerInfo;

  return (
    <section>
      <Banner img={imageUrl} />

      <Infografia />
    </section>
  );
};
