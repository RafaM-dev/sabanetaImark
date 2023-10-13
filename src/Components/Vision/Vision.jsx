
import bg from "../../assets/like-us-bg-1.png"
import ab from "../../assets/like-us-1.png"

export const Vision = () => {
    return (
        <section className="py-12 lg:py-16 bg-gray-100 relative text-white ">
            <div className="absolute top-0 left-0 w-full lg:w-[55%] h-full">
                <img className="h-full w-full object-cover" src={bg} alt="" />
            </div>
            <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full py-10">
                <img className="h-full w-full object-cover" src={ab} alt="" />
            </div>
            <div className="relative container mx-auto px-4 xl:px-0 py-10 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 lg:gap-0">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h1 className="max-w-2xl text-2xl lg:text-5xl font-black text-slate-50">VISIÓN SABANETA CIUDAD CERCANA</h1>
                            <p className="max-w-2xl text-lg font-normal text-slate-50">En el año 2033, Sabaneta se ha convertido en un ejemplo de comunidad donde la cercanía es el corazón de la vida cotidiana. Se promueve y disfruta de un territorio sostenible, seguro, incluyente, competitivo y eficiente.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Proximidad: acercar y optimizar en tiempo y distancia (educación, salud y empleo)</span>
                            </div>
                            <div className="bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Responsabilidad social (Inclusión social y diversa).</span>
                            </div>
                            <div className="accordion-item bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Ciudad integrada (Orden y control; cultura de civismo y seguridad)</span>
                            </div>
                            <div className="accordion-item bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Ética social (transparencia, respeto, compromiso social y honestidad)</span>
                            </div>
                            <div className="accordion-item bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Corresponsabilidad (Sostenibilidad territorial, resiliencia, integración, respeto y compromiso)</span>
                            </div>
                            <div className="accordion-item bg-[#287561] px-8 py-3 rounded-md space-y-2">
                                <span className="text-base sm:text-lg lg:text-lg">Competitividad (liderazgo regional, fortalecimiento empresarial, diversificación, emprendimiento, nuevos servicios y sofisticación de oferta local, empleabilidad).</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
