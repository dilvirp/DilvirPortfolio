import "./Skills.css"

function Skills() {

    const languages = ["C#", "Java", "C++", "TypeScript"]
    const frontends = ["React", "HTML", "CSS"]
    const backends = ["ASP.NET Core", "Node.js"]
    const tools = ["Git", "GitHub", "Docker", "Postman", "JMeter", "Azure"]
    return (

        <section id="skills" className="skills">
            <div className="skills-content">
                <h2>Skills</h2>

                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-list">
                        {languages.map((language) => (
                            <span key={language}>{language}</span>
                        ))}
                    </div>
                </div>


                <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skill-list">
                        {frontends.map((frontend) => (
                            <span key={frontend}>{frontend}</span>))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Backend/Frameworks</h3>
                    <div className="skill-list">
                        {backends.map((backend => (
                            <span key={backend}>{backend}</span>
                        )))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Tools/Technologies</h3>
                    <div className="skill-list">
                        {tools.map((tool) =>
                            <span key={tool}>{tool}</span>
                        )}
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Skills;