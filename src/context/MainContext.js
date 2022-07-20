import React, { createContext, useState } from "react";

export const TitleText = createContext();

const MainContextProvider = ({ children }) => {
    const [title, setTitle] = useState("");

    const TitleData = {
        setTitle,
        title,
    };

    return (
        <TitleText.Provider value={TitleData}>{children}</TitleText.Provider>
    );
};

export default MainContextProvider;