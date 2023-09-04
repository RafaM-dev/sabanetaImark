import banner from "../../assets/Banners/BannerPrincipal2.png";

export const BannerPrincipal = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="Banner"
        className="object-cover "
      />

    </div>
  );
};