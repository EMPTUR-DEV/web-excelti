import styles from "./magic-component.module.scss";
import { useRef } from 'react';
import useOnScreen from '../../../hooks/intersectionObserver';

const MagicComponent = ({children}) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "");
  return (
    <div  className={onScreen ? styles.show : ''}  ref={ref}> 
        {children}
    </div>
  )
}

export default MagicComponent;