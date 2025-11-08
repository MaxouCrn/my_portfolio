export const skillsData = {
    frontend: [
        { name: "HTML5", icon: "devicon-html5-plain colored", size: "text-6xl" },
        { name: "CSS3", icon: "devicon-css3-plain colored", size: "text-6xl" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored", size: "text-6xl" },
        { name: "React", icon: "devicon-react-original colored", size: "text-6xl" },
        { name: "Typescript", icon: "devicon-typescript-plain colored", size: "text-6xl" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", size: "text-6xl" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", size: "text-6xl" }
    ],
    backend: [
        { name: "PHP", icon: "devicon-php-plain colored", size: "text-6xl" },
        { name: "MySQL", icon: "devicon-mysql-plain colored", size: "text-6xl" },
        { name: "Laravel", icon: "devicon-laravel-plain colored", size: "text-6xl" },
        { name: "Symfony", icon: "devicon-symfony-original colored", size: "text-6xl" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored", size: "text-6xl" },
        { name: "Express.js", icon: "devicon-express-original colored", size: "text-6xl" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored", size: "text-6xl" },
        { name: "Ruby", icon: "devicon-ruby-plain colored", size: "text-5xl" },
        { name: "Rails", icon: "devicon-rails-plain colored", size: "text-6xl" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", size: "text-6xl" }
    ],
    tools: [
        { name: "GitHub", icon: "devicon-github-original colored", size: "text-6xl" },
        { name: "Docker", icon: "devicon-docker-plain colored", size: "text-6xl" },
        { name: "Figma", icon: "devicon-figma-plain colored", size: "text-6xl" },
        { name: "Postman", icon: "devicon-postman-plain colored", size: "text-6xl" },
        { name: "Trello", icon: "devicon-trello-plain colored", size: "text-6xl" },
        { name: "Jira", icon: "devicon-jira-plain colored", size: "text-6xl" },
        { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored", size: "text-6xl" },
        { name: "Visual Studio Code", icon: "devicon-vscode-plain colored", size: "text-6xl" }
    ]
}

export const categories = [
    { id: "frontend", title: "Front-End", data: skillsData.frontend },
    { id: "backend", title: "Back-End", data: skillsData.backend },
    { id: "tools", title: "Outils", data: skillsData.tools }
]

// Mapping pour les stacks des projets
export const stackIconMap = {
    "REACT": "devicon-react-original colored",
    "TYPESCRIPT": "devicon-typescript-plain colored",
    "EXPO": "devicon-react-original colored", // Expo utilise React
    "TAILWINDS": "devicon-tailwindcss-plain colored",
    "API": "devicon-fastapi-plain colored",
    "NODE": "devicon-nodejs-plain colored",
    "EXPRESS": "devicon-express-original colored",
    "MONGODB": "devicon-mongodb-plain colored",
    "PHP": "devicon-php-plain colored",
    "HTML": "devicon-html5-plain colored",
    "JS": "devicon-javascript-plain colored",
    "MYSQL": "devicon-mysql-plain colored",
    "CSS": "devicon-css3-plain colored",
    "DOCKER": "devicon-docker-plain colored"
}
