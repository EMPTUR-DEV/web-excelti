import styles from './logo.module.scss';
import ReactLogo from './excelti.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Logo = () => {
    const history = useHistory()
    const pushHistory = (link) => {
      history.push(link)
    }
    return(
      <div className={styles.container}>
        <a  href="/">
        
          <img className={styles.logo} alt= 'logo' src={ReactLogo}/>
        </a>
      </div>);
}

export default Logo;