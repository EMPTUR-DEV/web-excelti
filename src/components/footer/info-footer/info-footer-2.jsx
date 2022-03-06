import React from 'react'
import styles from './info-footer.module.scss'
import useTraductions from '../../../hooks/useTraductions';
import { useTranslation } from "react-i18next";

const InfoFooter2 = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();

    return (
        <div className={`${styles.container}`}>
            <h3 >Secciones</h3>
            <nav>
                <ul>
                    <li>{t("traduction")}</li>
                    <li>{t("interpretation")}</li>
                    <li>{t("training")}</li>
                    <li>{t("ourProfessionals")}</li>
                </ul>
            </nav>
        </div>
    )
}

export default InfoFooter2
