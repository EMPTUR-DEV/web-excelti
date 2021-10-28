import React from 'react';
import styles from './traduction.module.scss';
import Info from '../../components/shared/info/info';
import { useTranslation } from "react-i18next";


const Traduction = () => {
const { t } = useTranslation();
    return (
        <div className={styles.traductionContainer}>
            <Info
            title={t("traduction").toUpperCase()} 
            />
        </div>
    )
}

export default Traduction;
