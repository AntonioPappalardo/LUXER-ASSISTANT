import React from 'react'
import * as Localization from 'expo-localization';
import it from './language/it';
import en from './language/en';
import fr from './language/fr';

const lang = {
  'en-US': en,
  'fr-FR': fr,
  'it-IT': it,
}

const langDict = (key) => lang[key]

export const LanguageContext = React.createContext(null);

export const LanguageProvider = ({ initialState = Localization.locale, children }) => {
  const [lang, setLang] = React.useState(initialState);
  
  return (
    <LanguageContext.Provider value={[langDict(lang), setLang]}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => React.useContext(LanguageContext);

