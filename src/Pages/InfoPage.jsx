import { Banner } from "../Components/Banner/Banner";
import { Infografia } from "../Components/Infografia/Infografia";
import bannerInfo from "../assets/Banners/Recursos.png";

export const InfoPage = () => {
  return (
    <section>
      <Banner img={bannerInfo} />

      <Infografia />
    </section>
  );
};
