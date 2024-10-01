import styles from './ThemeSelector.module.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import { useContext, useEffect } from 'react';

function ThemeSelector() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = (prevTheme === 'light' ? 'dark' : 'light');
            console.log('Tema cambiado a:', newTheme);
            return newTheme;
        });
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
