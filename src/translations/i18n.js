import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_ES } from "./es";
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_PT } from "./pt";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: TRANSLATIONS_ES
            },
            en: {
                translation: TRANSLATIONS_EN
            },
            pt: {
                translation: TRANSLATIONS_PT
            },
            fallbackLng: "es"
        }
    });


export default i18n;