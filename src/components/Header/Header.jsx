import styles from './Header.module.scss';
import LanguageSelector from '../Common/LanguageSelector/LanguageSelector';
import MenuContext from '../../contexts/MenuContext';
import ThemeSelector from '../Common/ThemeSelector/ThemeSelector';
import { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Header() {
    const location = useLocation();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { setIsMenuOpen } = useContext(MenuContext);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
        setIsMenuOpen(prevState => !prevState);
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.inner_header} container`}>
                    <LanguageSelector />
                    <span className={styles.icon_menu} onClick={toggleMenu} />
                    <nav className={`${isOpen ? styles.activeMenu : ''}`}>
                        <span className={styles.close_menu} onClick={handleMenuItemClick} />
                        <ul>
                            <li><NavLink to='/' className={location.pathname === '/' ? styles.active : ''} onClick={handleMenuItemClick}>{t('nav-1')}</NavLink></li>
                            <li><NavLink to='/web' className={location.pathname === '/web' ? styles.active : ''} onClick={handleMenuItemClick}>{t('nav-2')}</NavLink></li>
                            <li><NavLink to='/games' className={location.pathname === '/games' ? styles.active : ''} onClick={handleMenuItemClick}>{t('nav-3')}</NavLink></li>
                        </ul>
                    </nav>
                    <ThemeSelector />
                </div>
            </header>
        </>
    );
}

export default Header;
