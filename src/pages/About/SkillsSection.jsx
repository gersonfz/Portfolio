import { HiOutlineArrowUp } from 'react-icons/hi';
import { ButtonIcon, CardList } from '../../components';
import scrollToSection from '../../utils/scrollTo';
import styles from './About.module.css'


const SkillsSection = () => {


    const cards = [
        {
            
            image: 'https://placekitten.com/200/300',
            title: 'Kitten',
            content: 'This is a cute kitten.',
        },
        {
            
            image: 'https://placekitten.com/201/301',
            title: 'Another Kitten',
            content: 'This is another cute kitten.',
        },
        {
            
            image: 'https://placekitten.com/202/302',
            title: 'Third Kitten',
            content: 'This is the third cute kitten.',
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