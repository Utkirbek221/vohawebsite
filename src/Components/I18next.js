import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../i18n/en/translation.json';
import translationRU from '../i18n/ru/translation.json';
import translationUZ from '../i18n/uz/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    },
    uz: {
        translation: translationUZ
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : "ru", // default language
    });

export default i18n;
