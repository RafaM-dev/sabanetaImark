export const CardPlanItem = ({ planData }) => {
  return (
    <div
      className="bg-white  p-4 flex space-x-4 rounded-xl shadow-2xl h-[11rem]"
      //   key={PlanData[data].id}
    >
      <div className="flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-orangeBtn rounded-xl m-auto shadow-lg">
        <img
          className=" object-contain mx-auto w-[2.5rem] h-[2.5rem]"
          src={planData.img}
        ></img>
      </div>

      <div className="w-[85%] flex flex-col justify-center">
        <h3 className="text-lg text-center md:text-left">
          {planData.descripcion}
        </h3>
      </div>
    </div>
  );
};
