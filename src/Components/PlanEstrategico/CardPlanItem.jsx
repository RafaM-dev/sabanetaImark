export const CardPlanItem = ({ planData }) => {
  return (
    <div className="bg-white p-4 md:flex md:space-x-4 rounded-xl shadow-2xl md:h-[18rem] lg:h-[12rem]">
      <div className="flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-orangeBtn rounded-xl m-auto shadow-lg">
        <img
          className="object-contain mx-auto w-[2.5rem] h-[2.5rem]"
          src={planData.img}
          alt="Plan Image"
        />
      </div>

      <div className="w-full md:w-[85%] flex flex-col justify-center">
        <h3 className="text-lg text-justify text-center md:text-left md:py-0 py-3 ">
          {planData.descripcion}
        </h3>
      </div>
    </div>

  );
};
