import styles from './ThemeSelector.module.scss';
import { useState, useEffect } from 'react';

function ThemeSelector() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <span 
            className={styles.themeSelector} 
            onClick={toggleTheme} 
            role="button" 
            tabIndex="0" 
            aria-label="Toggle theme"
        >
        </span>
    );  
}

export default ThemeSelector;
