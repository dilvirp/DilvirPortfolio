import "./Hero.css"

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">
                <p>Hi, I'm</p>
                <h1>Dilvir Parmar</h1>
                <h2>Software Developer</h2>
                
                <p className="hero-description">I like to build software applications and enjoy working on challenging projects</p>


                <div className="hero-buttons">
                    <a href="#contact" className="btn">Contact Me</a>
                    <a href="#projects" className="btn">View My Work</a>
                </div>

            </div>

        </section>
    )
}


export default Hero