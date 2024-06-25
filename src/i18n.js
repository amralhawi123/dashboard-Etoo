import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';
import { TranslationEnglish } from './locall/TranslationEnglish';
import { TranslationArabic } from './locall/TranslationArabic';

   i18n
     .use(initReactI18next)
     .init({
       resources: {
         en: {
           translation: TranslationEnglish,
         },
         ar: {
           translation: TranslationArabic,
         },
       },
       lng: 'en',
       fallbackLng: 'en',
       interpolation: {
         escapeValue: false,
       },
     });

   export default i18n;
