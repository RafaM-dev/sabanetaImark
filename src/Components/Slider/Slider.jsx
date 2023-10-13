import { useState } from 'react';
import { motion } from 'framer-motion';
import test1 from "../../assets/testimonio1.png";
import test2 from "../../assets/testimonio2.png";
import test3 from "../../assets/testimonio3.png";
import leftArrow from '../../assets/arrow-left.svg';
import rightArrow from '../../assets/arrow-right.svg';
import { Testimonials } from '../Testimonials/Testimonials';

const testimonialData = [
    {
        descripcion: "“Yo suelo ser una ciudadana de a pie, no existo en escenarios electorales, pero sí en una comunidad... somos corresponsables, somos de sentimientos y emociones para con la naturaleza”",
        name: "Adela, vereda La Doctora",
        img: test1,
    },
    {
        descripcion: "“Mi papá tuvo una finca de café en La Doctora, vivían cuando tenían 40 años donde se unen Las Brisas. A mí me tocó hacer la primera calle importante en Sabaneta que se convirtió en la Avenida Pilsen”",
        name: "Relatos ciudadanos",
        img: test2,
    },
    {
        descripcion: "“Nos motivó a venirnos a Sabaneta el ambiente, muy familiar, hemos visto el parque lleno de familia, de gente, y la rumba es tranquila, como de pueblo y en el día se puede caminar tranquilamente, el ambiente y la seguridad se nota”",
        name: "Liceth Calderón",
        img: test3,
    },
    {
        descripcion: "“En 1998, con este mismo ejercicio, determinaron que la vocación de Sabaneta iba a ser inmobiliaria, ya estaba contemplado, por lo tanto, la vocación de Sabaneta hoy es una vocación inmobiliaria, y cuando uno decide que su municipio se convierta en inmobiliario entonces trae todos los problemas posibles que trae un inmobiliario”",
        name: "Funcionario, 2023",
        img: test1,
    },
    {
        descripcion: "“El ser un municipio dormitorio hace que las personas que vengan a dormir no saben que pasa en el día”",
        name: "Sabaneteña, 2023",
        img: test3,
    },
    {
        descripcion: "“Ya los habitantes de Sabaneta, los coterráneos, son pocos, ya son muchos habitantes que han venido y esto se convirtió en una ciudad dormitorio”",
        name: "Funcionario, 2023",
        img: test2,
    },

];

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => {
            const newSlide = prevSlide - 3;
            return newSlide < 0 ? testimonialData.length - Math.abs(newSlide) : newSlide;
        });
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 3) % testimonialData.length);
    };

    const displayedSlides = [
        (currentSlide) % testimonialData.length,
        (currentSlide + 1) % testimonialData.length,
        (currentSlide + 2) % testimonialData.length
    ];

    return (
        <div className='mb-16'>
            <div className="relative w-full h-auto flex flex-col sm:flex-row max-w-[85rem] mx-4 py-5 sm:text-center sm:mx-10 lg:mx-auto sm:py-10 gap-6">
                {displayedSlides.map((slideIndex, index) => (
                    <motion.div
                        key={slideIndex}
                        custom={index}
                        className="w-full sm:w-1/3"
                    >
                        <Testimonials descripcion={testimonialData[slideIndex].descripcion} name={testimonialData[slideIndex].name} img={testimonialData[slideIndex].img} />
                    </motion.div>
                ))}
            </div>
            <div className='flex w-full justify-center items-center gap-3'>
                <button
                    onClick={handlePrev}
                    className="hover:scale-90 text-white font-bold py-1 px- rounded-full"
                >
                    <img className='w-8 h-auto transform -scale-x-1' src={rightArrow} alt="Previous" />
                </button>
                <button
                    onClick={handleNext}
                    className="hover:scale-90 text-white font-bold py-1 px- rounded-full"
                >
                    <img className='w-8 h-auto' src={leftArrow} alt="Next" />
                </button>
            </div>
        </div>
    );
}
