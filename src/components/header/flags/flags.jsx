import React from "react";
import styles from "./flags.module.scss";
import { useTranslation } from 'react-i18next';

const Flags = () => {
    const { i18n } = useTranslation();
     const flags =[ //{flag:styles.spain,lenguage:'es'}
    // ,{flag:styles.portugal,lenguage:'es'},{flag:styles.british,lenguage:'en'}
 ]

    return (
        <div className={styles.container}>
            {
                flags.map(item =>(
                    <div key={item.lenguage} 
                    onClick={() =>(i18n.changeLanguage(item.lenguage))}
                    className={item.flag}/>
                )
                )
            }
        </div>
    )
}

export default Flags;