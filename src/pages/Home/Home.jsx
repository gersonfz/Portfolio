import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/all';
import imgEclipse from '../../assets/img-eclipse.svg';
import eclipseSola from '../../assets/eclipse-sola.svg';
import { useState } from 'react';
import { DownloadButton } from '../../components';
import { SpinnerDotted } from 'spinners-react';



const Home = () => {
  const [loading, setLoading] = useState(false);
  const downloadFile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }
  return (
    <section className={styles.container}>
      <section className={styles.firstSection}>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: [
                'Gerson Fernandez',
                'Web Developer'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={styles.contactIcons}>
          <a href='https://github.com/gersonfz' target='_blank' rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/gerson-fernandez-espinoza17/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+584241641926" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.imagenHome}>
          <img src={imgEclipse} alt="Imagen generada por IA" />
          <img src={eclipseSola} alt="Eclipse compenetrando la imagen" />
        </div>
        <div className={styles.sectionDownload} onClick={() => downloadFile(true)}>
          {loading ? (
            <SpinnerDotted color="#1e63cb" />
          ) : (
            <DownloadButton />
          )}
        </div>
      </section>
    </section>
  )
}


export default Home;