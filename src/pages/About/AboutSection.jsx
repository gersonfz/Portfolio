import { ButtonIcon } from '../../components';
import { GrLinkDown } from 'react-icons/gr'
import scrollToSection  from '../../utils/scrollTo';


const AboutSection = () => {
    
    return (
        <>
            <article>
                <p>
                    Hello, I'm Gerson Fernandez, a Venezuelan frontend developer with 2 years of experience in web development. I'm passionate about web development and have been practicing and improving my skills in my spare time.
                </p>
                <p>

                    During my studies, I learned HTML, CSS, and JavaScript on my own and since then, I've been creating personal projects and collaborating on open-source projects to keep learning and improving my skills.
                </p>
                <p>

                    I've worked with React JS and NextJS, and have also used libraries and tools like Axios and Fetch to connect to external APIs. I've worked on personal projects of different sizes and scopes, including interactive web applications and static websites.
                </p>
                <p>
                    My main focus is on creating efficient, scalable, and visually appealing web applications, and I make sure that all my applications look and work well on different devices and browsers. I also enjoy learning new technologies and tools and am always looking for ways to improve my skills.
                </p>
                <p>
                    When I'm not coding, I like to read and learn about new technologies, as well as collaborate on open-source projects to learn from other developers.
                </p>
                <p>
                    If you're looking for a motivated frontend developer with solid skills, I'm excited to work with you and continue learning along the way. Please don't hesitate to contact me!
                </p>
            </article>
            <div>
                <h3>
                    Skills
                </h3>
                <div onClick={() => scrollToSection('skills')}>
                    <ButtonIcon icon={GrLinkDown} />
                </div>
            </div>
        </>
    )
}

export default AboutSection