import "./Contact.css"


function Contact()
{
    return(
        <section id="contact" className="contact">
            <h3>Contact</h3>

            <div className="contact-content">
                <h2>Let's build something together.</h2>

                <p>I'm open to software developer opportunites, collaborations, and new connections. Feel free to reach out!</p>

                <div className="contact-buttons">
                    <a href="mailto:pdbparmar@gmail.com">Email Me</a>
                    <a href="https://www.linkedin.com/in/dilvirparmar/">LinkedIn</a>
                    <a href="https://github.com/dilvirp">GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;