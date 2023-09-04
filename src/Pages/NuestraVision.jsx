import { PlanEstrategico } from "../Components/PlanEstrategico/PlanEstrategico";
import { EtapasProyecto } from "../Components/PlanEstrategico/EtapasProyecto";
import { ObjetivosProyecto } from "../Components/PlanEstrategico/ObjetivosProyecto";
import bannerVision from "../assets/Banners/NuestraVision.png";
import bannerVisionResponsive from "../assets/Banners/NuestraVisionResponsive.png";
import { Banner } from "../Components/Banner/Banner";

export const NuestraVision = () => {
  const imageUrl = window.innerWidth <= 768 ? bannerVisionResponsive : bannerVision;

  return (
    <section>
      <Banner img={imageUrl} />
      <div className="bg-image-container w-full ">
        <PlanEstrategico />
        <ObjetivosProyecto />
      </div>
      <EtapasProyecto />


    </section>
  );
};
