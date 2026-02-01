import { categories } from "../data/skillsData"

const SkillIcon = ({ skill, index }) => {
    const animations = ["fade-right", "fade-up", "fade-down", "fade-left"]
    const aosAnimation = animations[index % animations.length]

    return (
        <div data-aos={aosAnimation} className="m-1 md:m-2">
            <i
                className={`${skill.icon} ${skill.size} `}
                title={skill.name}
                aria-label={skill.name}
                role="img"
            ></i>
        </div>
    )
}

const SkillCategory = ({ category }) => {
    return (
        <div className="mt-12 first:mt-0 flex flex-col border-2 rounded-2xl border-custom-brown px-0 md:px-8 w-full max-lg:mt-6 max-lg:mb-10 backdrop-blur-sm bg-white/10">
            <p className="mx-auto px-2 md:px-16 w-max font-black text-2xl max-lg:text-xl -translate-y-5 bg-custom-gold text-red-700">
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
            className="h-auto p-1 lg:p-8 pl-0 flex flex-col lg:w-6/12 max-lg:mt-10 max-lg:mb-10"
        >
            <div className="lg:opacity-90 max-lg:opacity-0">
                <div
                    style={{
                        backgroundImage: `url(/assets/bg-competence.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    className="flex w-full h-full absolute z-0 bg-cover bg-center hidden blur- lg:block"
                    data-aos="fade-left"
                    data-aos-delay="500"
                ></div>
            </div>
            <div className="mx-auto px-4 z-0 max-lg:w-full">
                <div className="flex items-center mb-5">
                    <div className="h-px flex-grow bg-custom-brown"></div>
                    <div
                        className="flex text-5xl lg:text-7xl px-4
                            font-custom-font-japon text-black "
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
                <p className="text-lg font-custom-font-madeinfinity max-lg:text-sm max-lg:text-center max-lg:mb-10">
                    Du front au back, je touche à tout. Voici les technologies
                    sur lesquelles j'ai déjà travaillé et avec lesquelles je
                    continue de progresser :
                </p>
                <div className="lg:mt-10 flex flex-col justify-center items-center max-lg:mt-5">
                    {categories.map(category => (
                        <SkillCategory key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
