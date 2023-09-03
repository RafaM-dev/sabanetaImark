import Ciudadano1 from "../assets/TallerCiudadano/Foto1.jpg";
import Ciudadano2 from "../assets/TallerCiudadano/Foto2.jpg";
import Ciudadano3 from "../assets/TallerCiudadano/Foto3.jpg";
import Ciudadano4 from "../assets/TallerCiudadano/Foto4.jpg";
import CiudadanoVid from "../assets/TallerCiudadano/Video1.mp4";
import Parque1 from "../assets/TallerParque/Foto1.png";
import Parque4 from "../assets/TallerParque/Foto4.jpg";
import ParqueVid2 from "../assets/TallerParque/Video2.mp4";
import Verdeas1 from "../assets/TallerVeredas/Foto1.png";
import Verdeas2 from "../assets/TallerVeredas/Foto2.jpg";
import Verdeas3 from "../assets/TallerVeredas/Foto3.png";
import Verdeas4 from "../assets/TallerVeredas/Foto4.jpg";
import VerdeasVid1 from "../assets/TallerVeredas/Video1.mp4";
import Romera1 from "../assets/TallerRomera/Foto1.jpg";
import Romera2 from "../assets/TallerRomera/Foto2.jpg";
import Romera3 from "../assets/TallerRomera/Foto3.jpg";
import Romera4 from "../assets/TallerRomera/Foto4.jpg";
import RomeraVid1 from "../assets/TallerRomera/Video1.mp4";
import Sector1 from "../assets/TallerSector/Foto1.jpg";
import Sector2 from "../assets/TallerSector/Foto2.jpg";
import Sector3 from "../assets/TallerSector/Foto3.jpg";
import Sector4 from "../assets/TallerSector/Foto4.jpg";
import SectorVid1 from "../assets/TallerSector/Video1.mp4";
import Baquere1 from "../assets/TallerBaquereña/Foto2.jpg";
import Baquere2 from "../assets/TallerBaquereña/Foto3.jpg";
import BaquereVid1 from "../assets/TallerBaquereña/Video1.mp4";

// ilustraciones

import etapa1Ilus from "../assets/Animaciones/13.mp4"
import etapa3Ilus from "../assets/Animaciones/23.mp4"
import etapa2Ilus from "../assets/Animaciones/15.mp4"
import etapa4Ilus from "../assets/Animaciones/27.mp4"
import etapa5Ilus from "../assets/Animaciones/12.mp4"
import etapaProxima from "../assets/Animaciones/16.mp4"
import etapaProxima2 from "../assets/Animaciones/19.mp4"
import etapaProxima3 from "../assets/Animaciones/22.mp4"


export const TimeLineData = [
  {
    etapa1: {
      id: 1,
      tituloEtapa:
        "Etapa 1: Participamos e identificamos nuestros activos patrimoniales",
      descripcionEtapa: " La experiencia de cada habitante del municipio es importante. Por eso convocamos a la ciudadanía a identificar el estado de los activos tangibles o intangibles y a describir la identidad de Sabaneta. Propusimos acciones de protección y mejora a 2023-2033 teniendo como referente la investigación social y digital.",
      color: "#006944",
      objetos: {
        TimeLine1: {
          id: 1,
          titulo: "Ciudadanías propositivas",
          fecha: "24 Julio, 2023",
          descripcion:
            "Identificamos los activos patrimoniales, ambientales, culturales y sociales para fortalecerlos estratégicamente a diez años. La comunidad sabaneteña ha aportado sus propuestas ",
          posicion: "right-timeline",
          textPos: "text-right",
          ref: "refsDiv1",
          controls: "controlsDiv1",
          modal: {
            img1: Ciudadano1,
            img2: Ciudadano2,
            img3: Ciudadano3,
            img4: Ciudadano4,
            video1: CiudadanoVid,
            video2: CiudadanoVid,
          },
          ilustracion: etapa1Ilus,
        },
        TimeLine2: {
          id: 2,
          titulo: "Empresas y organizaciones comprometidas con el futuro",
          fecha: "27 Julio, 2023",
          descripcion:
            "Representantes del sector productivo y social, aportaron sus ideas e identificaron los aspectos a mejorar. El turismo, el emprendimiento, las empresas que han marcado la historia y el presente del municipio hicieron su contribución al Plan de Proyección.",
          posicion: "left-timeline",
          textPos: "text-left",
          ref: "refsDiv2",
          controls: "controlsDiv2",
          modal: {
            img1: Sector1,
            img2: Sector2,
            img3: Sector3,
            img4: Sector4,
            video1: SectorVid1,
          },
          ilustracion: etapa2Ilus,

        },
        TimeLine3: {
          id: 3,
          titulo: "La ruralidad sabaneteña, presente en la visión estratégica",
          fecha: "1 Agosto, 2023",
          descripcion:
            "Las propuestas para mejorar la calidad de vida del municipio se construyen desde el desarrollo con enfoque territorial del municipio.",
          posicion: "right-timeline ",
          textPos: "text-right",
          ref: "refsDiv3",
          controls: "controlsDiv3",
          modal: {
            img1: Verdeas1,
            img2: Verdeas2,
            img3: Verdeas3,
            img4: Verdeas4,
            video1: VerdeasVid1,
            video2: "",
          },
          ilustracion: etapa3Ilus,

        },
        TimeLine4: {
          id: 4,
          titulo: "Reserva La Romera, oasis ecológico y patrimonio sabaneteño",
          fecha: "13 Agosto, 2023",
          descripcion:
            "Los habitantes del municipio coinciden en la importancia estratégica y ecológica de La Romera. Servicios ecosistémicos y aportes ecoturísticos por descubrir.",
          posicion: "left-timeline",
          textPos: "text-left",
          ref: "refsDiv4",
          controls: "controlsDiv4",
          modal: {
            img1: Romera1,
            img2: Romera2,
            img3: Romera3,
            img4: Romera4,
            video1: RomeraVid1,
            video2: "",
          },
          ilustracion: etapa4Ilus,

        },
        TimeLine5: {
          id: 5,
          titulo: "La cultura sabaneteña:  La Barquereña y el parque principal",
          fecha: "2 Agosto, 2023",
          descripcion:
            "El arte y la cultura recorren cada rincón del municipio. En la Casa Cultural La Barquereña convergen la música, la pintura, la danza y la creatividad de los sabaneteños. En el parque central, visitantes y locales comparten los patrimonios gastronómicos y religiosos de Sabaneta.",
          posicion: "right-timeline",
          textPos: "text-right",
          ref: "refsDiv5",
          controls: "controlsDiv5",
          modal: {
            img1: Parque1,
            img2: Baquere1,
            img3: Baquere2,
            img4: Parque4,
            video1: ParqueVid2,
            video2: BaquereVid1,
          },
          ilustracion: etapa5Ilus,

        },
      },
    },
  },
  {
    etapa2: {
      id: 2,
      tituloEtapa: "Etapa 2: Co creamos la plataforma estratégica",
      descripcionEtapa: "Estamos en la conformación de un comité de planeación con diversidad de actores que será el encargado de definir las líneas decisivas y fundamentales para la década. ",
      color: "#36B8C5",

      objetos: {
        TimeLine1: {
          id: 1,
          posicion: "right-timeline",
          textPos: "text-right",
          ref: "refsDiv1",
          controls: "controlsDiv1",
          ilustracion: etapaProxima,
        },
      },
    },
  },
  {
    etapa3: {
      id: 3,
      tituloEtapa: "Etapa 3: Diseñamos el despliegue estratégico",
      descripcionEtapa: "Después de tener las líneas de la estrategia, identificaremos y generaremos los proyectos de acuerdo a la priorización previa, para hacer su selección y sus presupuestos.",
      color: "#006944",

      objetos: {
        TimeLine1: {
          id: 1,
          posicion: "right-timeline",
          textPos: "text-right",
          ref: "refsDiv1",
          controls: "controlsDiv1",
          ilustracion: etapaProxima2,

        },
      },
    },
  },
  {
    etapa4: {
      id: 4,
      tituloEtapa: "Etapa 4: Condensamos nuestro Plan de proyección",
      descripcionEtapa: "Aquí es cuando condensamos las ideas y propuestas realizadas desde la primera etapa. Haremos la redacción del Plan y su socialización. ",
      color: "#36B8C5",

      objetos: {
        TimeLine1: {
          id: 1,
          posicion: "right-timeline",
          textPos: "text-right",
          ref: "refsDiv1",
          controls: "controlsDiv1",
          ilustracion: etapaProxima3,
        },
      },
    },
  },
];
