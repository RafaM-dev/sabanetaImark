import "./Cards.css";
import { SitesInfo } from "../../Data/SitesInfo";
import { Link } from "react-router-dom";

export const Cards = () => {
  const cardComponent = Object.keys(SitesInfo).map((siteKey) => {
    const { id, imgSrc, label } = SitesInfo[siteKey];
    return { id, imgSrc, label };
  });

  return (
    <div className="containers mx-10 md:mx-8 lg:mx-15 xl:mx-15 2xl:mx-56 pt-12 ">
      {cardComponent.map((cardComponent) => (
        <CardsItem key={cardComponent.id} cardComponent={cardComponent} />
      ))}
    </div>
  );
};

const CardsItem = ({ cardComponent }) => {
  return (
    <Link
      to={`/Sitios/${cardComponent.id}`}
      className="card sm:h-80 xl:h-80 lg:h-80 h-36 rounded-xl"
    >
      <div className="card-overlay flex justify-center items-center text-white p-20 text-[1rem] md:text-[2rem] ">
        <h1>{cardComponent.label}</h1>
      </div>
      <img src={cardComponent.imgSrc} className="bg-cover" alt="" />
    </Link>
  );
};
