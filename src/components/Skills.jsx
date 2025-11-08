import { categories } from "../data/skillsData"

const SkillIcon = ({ skill, index }) => {
    const animations = ["fade-right", "fade-up", "fade-down", "fade-left"]
    const aosAnimation = animations[index % animations.length]

    return (
        <div data-aos={aosAnimation} className="m-1 md:m-2">
            <i
                className={`${skill.icon} ${skill.size} max-sm:text-4xl`}
                title={skill.name}
                aria-label={skill.name}
                role="img"
            ></i>
        </div>
    )
}

const SkillCategory = ({ category }) => {
    return (
        <div className="mt-12 first:mt-0 flex flex-col border-2 rounded-2xl border-custom-brown px-0 md:px-8 w-full max-sm:mt-6 max-sm:mb-10 backdrop-blur-sm bg-white/10">
            <p className="mx-auto px-2 md:px-16 w-max font-black text-2xl max-sm:text-xl -translate-y-5 bg-custom-gold text-red-700">
                {category.title}
            </p>
            <div className="flex flex-wrap justify-center">
                {category.data.map((skill, index) => (
                    <SkillIcon
                        key={skill.name}
                        skill={skill}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div
            id="skills"
            className="h-screen p-1 md:p-8 pl-0 md:mt-0 flex flex-col lg:w-6/12 max-sm:h-auto max-sm:mt-10 max-sm:mb-10"
        >
            <div className="lg:opacity-90 md:opacity-0 sm:opacity-0">
                <div
                    style={{
                        backgroundImage: `url(/assets/bg-competence.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    className="flex w-full h-full absolute z-0 bg-cover bg-center hidden blur- md:block"
                    data-aos="fade-left"
                    data-aos-delay="500"
                ></div>
            </div>
            <div className="mx-auto px-4 z-0 max-sm:w-full">
                <div className="flex items-center mb-5">
                    <div className="h-px flex-grow bg-custom-brown"></div>
                    <div
                        className="flex text-min md:text-7xl lg:text-7xl sm:text-6xl px-4
                            font-custom-font-japon text-black max-sm:text-4xl"
                    >
                        <div data-aos="fade-right">
                            <span>Com</span>
                        </div>
                        <div data-aos="fade-down">
                            <span>petence</span>
                        </div>
                        <div data-aos="fade-up">
                            <span>s</span>
                        </div>
                    </div>
                    <div className="h-px flex-grow bg-custom-brown"></div>
                </div>
                <p className="text-lg font-custom-font-madeinfinity max-sm:text-sm max-sm:text-center max-sm:mb-10">
                    J'aime créer des choses qui prennent forme à l'écran, que ce
                    soit sites Web, applications ou quoi que ce soit entre les
                    deux. J'adore voir mon imagination s'animer sous les clics,
                    autant que résoudre des casses-têtes exigeants. Voici la
                    liste des stacks et outils (pour le moment) avec lesquels
                    j'ai déjà travaillé :
                </p>
                <div className="md:mt-10 sm:mt-10 flex flex-col justify-center items-center max-sm:mt-5">
                    {categories.map(category => (
                        <SkillCategory key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
