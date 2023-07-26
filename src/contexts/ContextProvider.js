import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setColor = (color) =>{
        setCurrentColor(color);
        
        // last choosed auto activated when user comes again
        localStorage.setItem('colorMode', color);
        // auto close Theme Settings navbar
        setThemeSettings(false);
    }

    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        
        // last choosed auto activated when user comes again
        localStorage.setItem('themeMode', e.target.value);
        // auto close Theme Settings navbar
        setThemeSettings(false);
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }
    
    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu, 
                isClicked, setIsClicked, 
                handleClick, 
                screenSize, setScreenSize, 
                currentColor, currentMode,
                themeSettings, setThemeSettings,
                setMode, setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)