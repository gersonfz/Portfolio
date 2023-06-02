import { HiOutlineArrowUp } from 'react-icons/hi';
import { ButtonIcon, CardList } from '../../components';
import scrollToSection from '../../utils/scrollTo';
import styles from './About.module.css'
import frontendImage from '../../assets/react-cards.jpg'
import backendImage from '../../assets/backend.jpg'


const SkillsSection = () => {


    const cards = [
        {
            image: frontendImage,
            title: 'Frontend Developer',
            content: 'I enjoy creating clean and understandable code, utilizing current tools to always deliver the best solution.',
            subtitle: 'Languaje I Speak: ',
            subcontent: ['JS', 'HTML', 'CSS', 'Git', 'Sass', 'HBS', 'ReactJs']
        },
        {
            image: backendImage,
            title: 'Backend Developer',
            content: 'I love backend development—creating powerful, efficient systems with server-side technologies, databases, and APIs to drive website and app functionality.',
            subtitle: 'Languaje I Speak: ',
            subcontent: ['NodeJs', 'ExpressJs', 'Sockets', 'MongoDB', 'Firebase', 'MariaDB', 'MySQL']
        }
    ]
    return (
        <>
            <article className={styles.cardsSkills}>
                <CardList cards={cards} />
            </article>
            <div>
                <h3>
                    About
                </h3>
                <div onClick={() => scrollToSection('about')}>
                    <ButtonIcon icon={HiOutlineArrowUp} />
                </div>
            </div>
        </>
    )
}

export default SkillsSection