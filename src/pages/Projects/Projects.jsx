import styles from './Projects.module.css';
import Coffee_Beans from '../../assets/Coffee_Beans.svg';
import { CardList } from '../../components';

const Projects = () => {
    const projectCards = [
        {
            title: "Portfolio",
            content: "Crafted with React, CSS Modules, and an array of React components and hooks, my portfolio epitomizes technical prowess, delivering a stunning, immersive user experience and seamless interactivity.",
            skills: ["React", "CSS Module", "API", "jsonplaceholder"],
            date: "June 2023",
            image: Coffee_Beans
        },
        {
            title: "Aplication API",
            content: "Utilizing React's hooks and axios, the meticulously crafted webpage impeccably synergizes with an API, while harnessing the power of Tailwind CSS to deliver awe-inspiring, pixel-perfect styles and an unparalleled user experience.",
            skills: ["React", "Tailwind CSS", "Axios", "API", "jsonplaceholder"],
            date: "April 2023",
            "image": Coffee_Beans
        },
        {
            title: "Coffee Beans",
            content: "It's a ReactJS-powered e-commerce application leveraging Firebase as the backend database. It employs key React components like fetch, react-router-dom, and utilizes advanced state management with useEffect and useState hooks.",
            skills: ["React", "React-Bootstrap", "Aos", "Firebase", "CSS Module"],
            date: "July 2022",
            "image": Coffee_Beans
        },
    ];

    return (
        <section className={styles.container}>

            <div>
                <CardList cards={projectCards}/>
            </div>
            {/* <div className={styles.containerProjects}>
                {projectCards.map((card, index) => (
                    <div key={index} className={styles.cardProject}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardFront}>
                                <img src={card.image} alt={card.title} className={styles.image} />
                                <div className={styles.content}>
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                            <div className={styles.cardBack}>
                                <h3>Skills</h3>
                                <ul>
                                    {card.skills.map(skill => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                                <h3>{card.date}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
    );
};

export default Projects;