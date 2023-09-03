import planImg from "../../assets/b.jpeg";

export const PlanEstrategico = () => {
  return (
    <div className=" py-16">
      <header className=" flex flex-col md:flex-row items-center container mx-auto  gap-10 border rounded-xl  bg-[#F9FEFC] shadow-sm">
        <div className="md:w-2/5 w-100 h-100 rounded-xl ">
          <img
            src={planImg}
            alt="PlanImage"
            className="w-full h-full mx-auto md:mx-0 rounded-s-xl"
          />
        </div>
        <div className="md:w-3/5 container mx-auto text-center md:text-left pr-10">
          <h1 className="text-[2.7rem] font-semibold mb-4 text-titleColor ">
            Estamos creando el Plan Estratégico de Proyección Municipio de
            Sabaneta 2023-2033
          </h1>
          {/* <p className="text-xl text-gray-800 ">Proyección 2023-2033</p> */}
          <p className="container mx-auto text-justify text-lg leading-10 mt-5 pr-10">
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
