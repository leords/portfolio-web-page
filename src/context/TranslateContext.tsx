import React, { createContext, useState } from "react";

interface Translate {
    translate: string
    setTranslate: (newState: string) => void
}

export const TranslateContext = createContext<Translate>({} as Translate);

export const TranslateProvider = ({children}: {children: JSX.Element}) => {

    const [translate, setTranslate] = useState('english')

    return (
        <TranslateContext.Provider value={{translate, setTranslate}}>
            {children}
        </TranslateContext.Provider>
    )
}