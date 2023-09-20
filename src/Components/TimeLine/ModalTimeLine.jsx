import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const ImageItem = ({ src, alt, styles }) => (
  <div>
    <img className={`${styles} rounded-lg object-cover`} src={src} alt={alt} loading="lazy" />
  </div>
);

const VideoItem = ({ src, src2 }) => (
  <video
    controls
    className={`${src2 ? "h-[19rem] md:h-[31rem]" : "h-auto"} rounded-xl w-full`}
  >
    <source src={src} type="video/mp4" />
    Tu navegador no admite la reproducción de videos en formato MP4.
  </video>
);

export const ModalTimeLine = ({ data, closeModal }) => {
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
        className="bg-white p-6 rounded-xl shadow-lg overflow-hidden h-full md:h-auto  "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full mb-2">
          <h1 className="flex w-full text-black justify-center items-center text-4xl mb-6 font-semibold">
            Contenido Multimedia
          </h1>
          <button
            onClick={closeModal}
            className="w-8 text-gray-600 hover:text-gray-800 mb-4"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>

        <div className="md:h-[45rem] h-[85%] max-w-7xl overflow-y-auto">
          <div
            className={`${data.video1 ? "md:grid-cols-3" : "md:grid-cols-2"
              } grid md:grid-cols-2  gap-4`}
          >
            <div className="grid gap-4 ">
              <ImageItem
                src={data.img1}
                alt="Imagen 1"
                styles="w-[35rem] h-[19rem]"
              />
              <ImageItem
                src={data.img2}
                alt="Imagen 2"
                styles="w-[35rem] h-[43rem]"
              />
            </div>
            {data.video1 ? (
              <div className="grid gap-4">
                <VideoItem src={data.video1} src2={data.video2} />
                {data.video2 ? (
                  <VideoItem src={data.video2} src2={data.video2} />
                ) : null}
              </div>
            ) : null}

            <div className="grid gap-4 ">
              <ImageItem
                src={data.img3}
                alt="Imagen 3"
                styles="w-[35rem] h-[19rem]"
              />
              <ImageItem
                src={data.img4}
                alt="Imagen 4"
                styles="w-[35rem] h-[43rem]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
