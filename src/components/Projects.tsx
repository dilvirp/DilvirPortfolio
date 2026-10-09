import "./Projects.css"

function Projects() {

    const projects = [
        {
            "name": "Book Store Application",
            "type": "Team Project",
            "description": "A full-stack bookstore application developed collaboratively, featuring CRUD operations, user authentication, and detailed book information including genre, ISBN, and author.",
            "technologies": ["React", "ASP.NET Core"],
            links:
                [
                    {
                        "label": "Frontend Github",
                        "url": "https://github.com/dilvirp/Open_Source_Group_6"
                    },

                    {
                        "label": "Backend Github",
                        "url": "https://github.com/dilvirp/Open_Source_Group_6_Backend"
                    }
                ]
        },

        {
            "name": "Car Inventory API",
            "type": "Team Project",
            "description": "C++ REST API for managing vehicle inventory. My contributions focused on performance and stability testing.",
            "technologies": ["C++", "Crow", "Docker", "JMeter"],
            links:
                []
        },

        {
            "name": "Portfolio Website",
            "type": "Personal Project",
            "description": "A responsive portfolio website built to showcase my projects, technical skills, and experience.",
            "technologies": ["React", "TypeScript", "CSS", "Vite"],
            links:
                [
                    {
                        "label": "GitHub",
                        "url": ""
                    },
                ]
        }
    ]

    return (

        <section id="projects" className="projects">
            <div className="project-content">

                <h2>Projects</h2>

                {projects.map((project) => (
                    <div className="project-card" key={project.name}>

                        <h3>{project.name}</h3>

                        <p>{project.type}</p>

                        <p>{project.description}</p>

                        <div className="project-technology" >
                            {project.technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>

                        {(project.links.some((link) => link.url !== "")) &&
                            (
                                <div className="project-links">
                                    {project.links.filter((link) => link.url !=="").map((link) => (
                                        <a key= {link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                    ))}
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects