import styles from './LanguageSelector.module.scss';
import i18n from 'i18next';
import MenuContext from '../../../contexts/MenuContext';
import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const enImg = '../../../img/en.png';
    const esImg = '../../../img/es.png';
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        setIsOpen(false);
        setIsMenuOpen(false);
    };

    const closeDropdown = () => {
        setIsOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.langSelector}>
            <button onClick={toggleDropdown} title={t('title-lang')} className={`${styles.selectorButton} ${isOpen ? styles.open : ''}`}>
                <img
                    src={selectedLanguage === 'en' ? enImg : esImg}
                    alt={selectedLanguage === 'en' ? t('lang-en') : t('lang-es')}
                    className={styles.flag}
                />
            </button>
            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                <span className={`${styles.close_language_menu} ${isOpen ? styles.visible : ''}`} onClick={closeDropdown} />
                <button
                    onClick={() => changeLanguage('en')}
                    className={`${styles.option} ${selectedLanguage === 'en' ? styles.active : ''}`}
                >
                    <img src={enImg} alt="English" className={styles.flag} />
                    <span>{t('lang-en')}</span>
                </button>
                <button
                    onClick={() => changeLanguage('es')}
                    className={`${styles.option} ${selectedLanguage === 'es' ? styles.active : ''}`}
                >
                    <img src={esImg} alt="Español" className={styles.flag} />
                    <span>{t('lang-es')}</span>
                </button>
            </div>
        </div>
    );
}

export default LanguageSelector;
