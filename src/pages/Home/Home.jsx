import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import { BsGithub, BsLinkedin, SiGmail, AiOutlineCheck } from 'react-icons/all';
import imgEclipse from '../../assets/img-eclipse.svg';
import eclipseSola from '../../assets/eclipse-sola.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DownloadButton from '../../components/Button/DownloadButton';


const Home = () => {
  const [download, setDownload] = useState(false);
  const downloadFile = (click) => {
    setDownload(click)
    setTimeout(() => {
      setDownload(false);
    }, 3000);
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
          <a href='https://github.com/gersonfz?tab=repositories' target='_blank' rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href='https://www.linkedin.com/in/gerson-fernandez-espinoza17/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin />
          </a>
          <NavLink to='/contact'>
            <SiGmail />
          </NavLink>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.imagenHome}>
          <img src={imgEclipse} alt="Imagen generada por IA" />
          <img src={eclipseSola} alt="Eclipse compenetrando la imagen" />
        </div>
        <div className={styles.buttonDownload} onClick={() => downloadFile(true)}>
          {!download ?
            <div>
              <h2>Descarga exitosa</h2>
              <span className={styles.checked}>
                <AiOutlineCheck />
              </span>
            </div>
            :
            <DownloadButton/>
          }
        </div>
      </section>
    </section>
  )
}

export default Home;