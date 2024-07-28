
import React from 'react';
import DarkModeHook from '../../hooks/utility/dark-mode-hook';

const DarkMode= () =>{ 
    const [darkMode,OnChangeDarkMode] = DarkModeHook()

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="dark-mode-toggle"
                checked={darkMode}
                onChange={OnChangeDarkMode}
            />
            <label htmlFor="dark-mode-toggle" className="toggle-label"></label>
        </div>
    );
};


export default DarkMode ;

