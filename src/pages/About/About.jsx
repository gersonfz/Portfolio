import { AboutSection, SkillsSection } from '../../components';
import styles from './About.module.css'

const About = () => {

  return (
    <section className={styles.container}>

      <section className={styles.aboutSection} id='about'>

        <AboutSection/>

      </section>

      <section className={styles.skillSection} id='skills'>

        <SkillsSection/>

      </section>
    </section>
  )
}

export default About