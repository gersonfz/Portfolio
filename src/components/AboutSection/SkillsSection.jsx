import { HiOutlineArrowUp } from 'react-icons/hi';
import { ButtonIcon } from '../../components';
import scrollToSection from '../../utils/scrollTo';

const SkillsSection = () => {

    return (
        <>
            <article>
                <h2>
                    Frontend developer: 2 years ago
                </h2>
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