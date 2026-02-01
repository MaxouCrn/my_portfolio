function AboutMe() {
    return (
        <div id="about" className="min-h-screen mb-8">
            <div className="opacity-80">
                <div
                    style={{
                        backgroundImage: `url(/assets/file.png)`,
                        backgroundSize: "cover",
                    }}
                    className="w-full h-full absolute z-0"
                    data-aos="fade-right"
                    data-aos-delay="500"
                ></div>
            </div>
            <div className="flex items-center justify-center min-h-screen pt-20 pb-10 max-lg:pt-24">
                <div className="flex flex-col items-center justify-center px-4 w-full mx-auto">
                    <div className="flex w-full items-center flex-wrap justify-center mb-24 relative max-lg:mb-2">
                        <div
                            className="bg-custom-black bg-opacity-80 rounded-2xl border-2 border-custom-brown mb-5 lg:mr-12"
                            data-aos="zoom-in"
                        >
                            <img
                                src="/assets/profil-pic-without-bg.png"
                                alt="Profile pic"
                                className="relative max-h-80 max-w-80 lg:w-64 lg:h-64
                                max-lg:w-52 max-lg:h-52 object-cover"
                            />
                        </div>
                        <div
                            className="bg-custom-black bg-opacity-80 rounded-2xl border-2 border-custom-brown
                            lg:justify-center lg:items-center p-2 max-lg:mt-8 max-lg:w-full"
                        >
                            <div className="flex items-center mb-5">
                                <div className="h-px flex-grow bg-custom-brown"></div>
                                <div
                                    className="flex text-5xl lg:text-7xl px-4
                                    font-custom-font-japon text-white "
                                >
                                    <div
                                        className="mr-5 max-lg:mr-2"
                                        data-aos="fade-right"
                                    >
                                        <span>A</span>
                                    </div>
                                    <div
                                        className="mr-5 max-lg:mr-2"
                                        data-aos="fade-down"
                                    >
                                        <span>propos</span>
                                    </div>
                                    <div data-aos="fade-up">
                                        <span>de moi</span>
                                    </div>
                                </div>
                                <div className="h-px flex-grow bg-custom-brown"></div>
                            </div>
                            <div
                                className="text-lg text-center text-white lg:text-2xl max-w-4xl p-12
                                font-custom-font-madeinfinity max-lg:p-5 max-lg:text-lg mx-auto"
                            >
                                <p>
                                    Ancien gendarme pendant 3 ans, j'ai fait le
                                    choix de me reconvertir dans le développement
                                    web.
                                </p>
                                <br />
                                <p>
                                    Aujourd'hui en Pré-MSc à Epitech Lille, je
                                    prépare un titre RNCP de niveau 7 "Architecte
                                    de Systèmes d'Information", tout en poursuivant
                                    mon alternance chez Hop3Team.
                                </p>
                                <br />
                                <p>
                                    Entre les projets d'école et les missions en
                                    entreprise, je construis mon expertise technique
                                    projet après projet.
                                </p>
                                <br />
                                <div
                                    data-aos="flip-down"
                                    className="flex justify-center mt-4"
                                >
                                    <a
                                        href="/cv/CV%20-%20CARON_Maxime.pdf"
                                        download
                                        className="bg-custom-gold text-black font-bold rounded-lg px-6 py-3
                                        transform transition duration-200 ease-in-out hover:scale-110
                                        shadow-md max-lg:text-xs max-lg:px-6 max-lg:py-3"
                                    >
                                        Télécharger mon CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
