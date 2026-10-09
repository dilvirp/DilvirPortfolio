import "./About.css"

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>About Me</h2>

                <h3>Who I am?</h3>
                <p className="about-description">I am a passionate software developer. I like to build applications and like to solve problems. I find joy in creating learning new technologies and implementing them in my projects.
                    I am always looking for new challenges and opportunities to grow as a developer.
                </p>

                <h3>What I am focused on</h3>
                <div className="focus-tags">
                    <span>Web Development</span>
                    <span>Software Development</span>
                    <span>AI learning</span>
                    <span>Azure cloud</span>
                </div>
            </div>
        </section>
    )
}

export default About;