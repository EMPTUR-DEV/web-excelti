import styles from "./magic-component.module.scss";
import { useRef,useState,useEffect } from 'react';
import useOnScreen from '../../../hooks/intersectionObserver';

const MagicComponent = ({children}) => {
  const [ style,setStyle ] = useState(styles.notShow);
  const ref = useRef();
  const onScreen = useOnScreen(ref, "");
  
  useEffect(()=>{
    setStyle(styles.show);
  }, []);

  useEffect(()=>{
    onScreen ? setStyle(styles.show) : setStyle(styles.notShow);

  }, [onScreen]);
  
  return (
    <div  className={style}  ref={ref}> 
        {children}
    </div>
  )
}

export default MagicComponent;