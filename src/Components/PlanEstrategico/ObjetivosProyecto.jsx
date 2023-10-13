import { PlanData } from "../../Data/PlanData";
import { CardPlanItem } from "./CardPlanItem";

export const ObjetivosProyecto = () => {
  return (
    <section className="container mx-auto md:my-10 my-10 ">
      <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold mb-6 text-center text-titleColor">
        Pero, ¿para qué un Plan estratégico municipal?
      </h2>
      <p className="container mx-auto text-lg leading-8 text-center max-w-[60rem]">
        El Plan de Proyección Municipio de Sabaneta 2023- 2033 tendrá un enfoque
        de desarrollo territorial, involucrando a los actores de la comunidad,
        por ello la diversidad es importante, para:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-10 ">
        {Object.keys(PlanData).map((data) => (
          <CardPlanItem key={PlanData[data].id} planData={PlanData[data]} />
        ))}
      </div>
    </section>
  );
};
