import "./Experience.css"
import SHIP from "../assets/SHIP.png"


function Experience() {

    const experience =
        [
            {
                "role": "Technical Support Analyst",
                "company": "Services and Housing in the Province (SHIP)",
                "employmentType": "Student Placement",
                "duration": "June-Present 2026",
                "description": [
                    "Enrolled new company devices using Microsoft Intune.",
                    "Set up and configured laptops, desktop computers, and mobile phones for staff members.",
                    "Configured existing employee accounts and authentication methods on company devices.",
                    "Installed and configured Microsoft 365 applications for employees.",
                    "Diagnosed and resolved printer-related issues.",
                    "Replaced faulty or damaged hardware and provided technical support to staff."
                ],
                "technologies": ["Microsoft Intune", "Microsoft 365"],
                "logo": SHIP
            }
        ]

    return (
        <section id="experience" className="experience">
            <div className="experience-content">
                <h2 >My Experience</h2>

                {experience.map((experience) => (
                    <div className="experience-card" key={experience.company}>

                        <div className="experience-header">
                            <img src={experience.logo} alt={`${experience.company} logo`} className="experience-logo"></img>
                            <div className="experience-details">
                                <h3>{experience.role}</h3>
                                <p>{experience.company}</p>
                                <p>{experience.employmentType} · {experience.duration}</p>

                            </div>
                        </div>

                        <div className="experience-description">
                            <h4>Responsibilites & Achievements</h4>
                            <ul>
                                {experience.description.map((responsbility) => (
                                    <li key={responsbility}>{responsbility}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="experience-technologies" >
                            <h4>Technologies Used</h4>
                            {experience.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;