import { AiOutlineCloudDownload } from 'react-icons/ai';
import styles from './Button.module.css'

const pdfUrl = '../../assets/CV_Frontend.pdf';

const DownloadButton = () => {
  return (
    <a className={styles.downloadButton} href={pdfUrl} target="_blank" rel="noopener noreferrer" download='CV_Frontend.pdf'>
      Descargar CV
      <AiOutlineCloudDownload />
    </a>
  );
}

export default DownloadButton