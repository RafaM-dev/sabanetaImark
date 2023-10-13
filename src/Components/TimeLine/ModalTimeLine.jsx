import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { lazy } from "react";

const ImageItem = ({ src, alt, styles }) => (
  <div>
    <img className={`${styles} rounded-lg object-cover`} src={src} alt={alt} loading="lazy" />
  </div>
);

const VideoItem = ({ src, src2 }) => (
  <video
    controls
    loading={lazy}
    className={`${src2 ? "h-[19rem] md:h-[31rem]" : "h-auto"} rounded-xl w-full`}
  >
    <source src={src} type="video/mp4" />
    Tu navegador no admite la reproducción de videos en formato MP4.
  </video>
);

export const ModalTimeLine = ({ data, closeModal, descripcionModal, descripcionModal2 }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 "
      onClick={handleModalClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-lg overflow-hidden h-[95%] w-[90%] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex mb-2 ">
          <div className="w-full">
            <h3 className="w-[98%] text-black text-center text-md  md:text-lg lg:text-xl  mb-6 font-semibold">
              {descripcionModal}
            </h3>
            {descripcionModal2 &&
              <h3 className="w-[98%] text-black text-center text-md md:text-lg lg:text-xl  mb-6 font-semibold">
                {descripcionModal2}
              </h3>
            }
          </div>
          <div className="flex justify-between">
            <div className="w-full">
              {/* Contenido aquí */}
            </div>
            <button onClick={closeModal} className="w-8 h-8 text-black hover:text-gray-800">
              <AiOutlineClose size={25} />
            </button>
          </div>
        </div>

        <div className="md:h-[45rem] h-[85%] max-w-full ">
          <div
            className={`${data.video1 ? "md:grid-cols-3" : "md:grid-cols-2"
              } grid md:grid-cols-2  gap-4`}
          >
            <div className="grid gap-4 ">
              {data.img1 ? (
                <ImageItem
                  src={data.img1}
                  alt="Imagen 1"
                  styles="w-[35rem] h-[19rem]"
                />
              ) : <VideoItem src={data.video3} src2={data.video3} />}
              {data.img2 ? (
                <ImageItem
                  src={data.img2}
                  alt="Imagen 2"
                  styles="w-[35rem] h-[43rem]"
                />
              ) : <VideoItem src={data.video4} src2={data.video4} />}

            </div>
            {data.video1 ? (
              <div className="grid gap-4">
                <VideoItem src={data.video1} src2={data.video1} />
                {data.video2 ? (
                  <VideoItem src={data.video2} src2={data.video2} />
                ) : null}
              </div>
            ) : null}

            <div className="grid gap-4 ">
              {data.img2 ? (
                <ImageItem
                  src={data.img3}
                  alt="Imagen 3"
                  styles="w-[35rem] h-[19rem]"
                />
              ) : <VideoItem src={data.video5} src2={data.video5} />}
              {data.img2 ? (
                <ImageItem
                  src={data.img4}
                  alt="Imagen 4"
                  styles="w-[35rem] h-[43rem]"
                />
              ) : <VideoItem src={data.video6} src2={data.video6} />}
            </div>
            {data.video7 &&
              <div className="grid gap-4">
                <VideoItem src={data.video7} src2={data.video7} />
              </div>
            }
          </div>
        </div>
      </motion.div>
    </div>
  );
};
