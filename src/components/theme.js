import { createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, liteTheme } from 'themes/themes';

export const ThemeContext = createContext(() => console.error('Attempted to set theme outside of ThemeContext'));

export const Theme = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const themeToggler = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [ theme ]);

    return (
        <ThemeProvider theme={theme === 'light' ? liteTheme : darkTheme}>
            <ThemeContext.Provider value={themeToggler}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
};
