import { PlanEstrategico } from "../Components/PlanEstrategico/PlanEstrategico";
import { EtapasProyecto } from "../Components/PlanEstrategico/EtapasProyecto";
import { ObjetivosProyecto } from "../Components/PlanEstrategico/ObjetivosProyecto";
import bannerVision from "../assets/Banners/NuestraVision.png";
import { Banner } from "../Components/Banner/Banner";

export const NuestraVision = () => {
  return (
    <section>
      <Banner img={bannerVision} />
      <div className="bg-image-container w-full ">
        <PlanEstrategico />
        <ObjetivosProyecto />
      </div>
      <EtapasProyecto />
    </section>
  );
};
