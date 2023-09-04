import { TimeLineData } from "../../Data/TimeLineData";
import { TimeLineItem } from "./TimeLineItem";

export const TimeLine = ({ param }) => {
  const etapaObj = TimeLineData.find((item) => param in item);
  if (!etapaObj) {
    return <div>No data found for the provided param</div>;
  }
  const currentEtapa = etapaObj[param];
  const textStyle = { color: currentEtapa.color }; // Inline style for text color

  return (
    <section className="text-white py-8 mx-auto">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl text-center  font-semibold" style={textStyle}>
          {currentEtapa.tituloEtapa}
        </h1>
        <h2 className="text-base md:text-xl lg:text-2xl text-justify mx-4 md:mx-0 md:text-center font-semibold mt-4" style={textStyle}>
          {currentEtapa.descripcionEtapa}
        </h2>
        <div className="flex flex-col items-center mx-auto">
          <div className="relative wrap overflow-hidden p-4">
            <div
              className="absolute h-full border md:right-2/4 right-[95%] sm:right-[96%] "
              style={{
                border: `1px solid ${currentEtapa.color}`,
                borderRadius: "1%",
              }}
            ></div>
            <div
              className=" absolute h-full border md:left-2/4 left-[4%] sm:left-[4%]"
              style={{
                border: `1px solid ${currentEtapa.color}`,
                borderRadius: "1%",
              }}
            ></div>
            {Object.values(currentEtapa.objetos).map((timeline) => (
              <TimeLineItem
                key={timeline.id}
                lineComponent={timeline}
                colorText={textStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
