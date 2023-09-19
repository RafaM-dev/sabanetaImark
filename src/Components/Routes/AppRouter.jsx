import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage";
import { BlogsPage } from "../../Pages/BlogsPage";
import { BlogsDetails } from "../Blogs/BlogsDetails";
import { InfoPage } from "../../Pages/InfoPage";
import { NuestraVision } from "../../Pages/NuestraVision";
import { TuVisionPage } from "../../Pages/TuVisionPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blogs" element={<BlogsPage />} />
        <Route path="/Blogs/:id" element={<BlogsDetails />} />
        <Route path="/Infografia" element={<InfoPage />} />
        <Route path="/Vision" element={<NuestraVision />} />
        <Route path="/TuVision" element={<TuVisionPage />} />
      </Routes>
    </>
  );
};
