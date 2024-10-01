import styles from './BackButton.module.scss';
import MenuContext from '../../../contexts/MenuContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function BackButton({ to }) {
    const { t } = useTranslation();
    const { isMenuOpen } = useContext(MenuContext);

    const handleClick = (e) => {
        if (isMenuOpen) {
            e.preventDefault();
        }
    };

    return (
        <Link
            to={to}
            className={`${styles.back_button} btn ${isMenuOpen ? styles.hidden : ''}`}
            onClick={handleClick}
        >
            {t('back_button')}
        </Link>
    );
}

export default BackButton;
