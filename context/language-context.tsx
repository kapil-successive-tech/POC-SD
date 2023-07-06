import React from 'react';

export const LanguageContext = React.createContext({ locale: 'en-us', setLocale: () => { } });

export default function LanguageProvider({ children }: any) {
  const [locale, setLocale] = React.useState('en-us');

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
