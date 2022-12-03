import { createContext, useState, useEffect } from "react";


export const LanguageContext = createContext({
    setLanguage: () => null,
    language: null
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const value = { language, setLanguage };

    useEffect(() => {
        setLanguage('pt-BR');
    }, []);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}