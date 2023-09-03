import banner from "../../assets/Banners/BannerPrincipal2.png";

export const BannerPrincipal = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-auto object-cover md:h-64 lg:h-auto"
      />

    </div>
  );
};