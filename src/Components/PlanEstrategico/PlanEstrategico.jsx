import planImg from "../../assets/b.jpeg";

export const PlanEstrategico = () => {
  return (
    <div className="py-5 md:py-16 lg:py-16">
      <header className="flex flex-col md:flex-row items-center container mx-auto  gap-10 border rounded-xl  bg-[#F9FEFC] shadow-sm  pb-5 lg:pb-0">
        <div className=" sm:w-2/5 w-40 h-full rounded-xl ">
          <img
            src={planImg}
            alt="PlanImage"
            className="w-full h-full mx-auto md:mx-0 md:rounded-s-xl lg:rounded-s-xl lg:rounded-none rounded-xl"
          />
        </div>
        <div className="md:w-3/5 container mx-auto text-center md:text-left lg:pr-10">
          <h1 className="text-3xl md:text-4xl md:py-7 lg:py-2 lg:text-5xl font-semibold md:mb-0 text-titleColor lg:leading-[1.5]">
            Estamos creando el Plan Estratégico de Proyección Municipio de
            Sabaneta 2023-2033
          </h1>
          <p className="container mx-auto text-justify text-lg px-4 lg:leading-10 md:leading-8 mt-5 md:mt-0 md:pr-10 lg:pr-10 md:px-0 lg:px-0 md:pb-0 lg:pb-0 ">
            Como Municipio necesitamos establecer una visión de largo plazo para
            proyectarnos a la región y al mundo, pero hacerlo requiere de
            plasmar un pensamiento estratégico que reconozca nuestra identidad
            actual, la identidad deseada y que establezca una plataforma
            estratégica que nos permita desplegar la proyección para los
            próximos 10 años. El plan será construido por la Universidad de
            Antioquia en compañía de la Alcaldía de Sabaneta como responsables
            del mismo. Pero tu participación será clave para poder hacerlo.
          </p>
        </div>
      </header>
    </div>
  );
};
