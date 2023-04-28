import { AiOutlineCloudDownload } from 'react-icons/ai';

const pdfUrl = '../../assets/CV_Frontend.pdf';

const DownloadButton = () => {
  return (
    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download='CV_Frontend.pdf'>
      Descargar CV
      <AiOutlineCloudDownload />
    </a>
  );
}

export default DownloadButton