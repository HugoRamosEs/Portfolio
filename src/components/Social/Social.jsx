import styles from './Social.module.scss';
import i18n from 'i18next';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

function Social() {
    const selectedLanguage = i18n.language;
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles.social}>
            <article className='container'>
                {theme === 'dark' ? (
                    <img src='../../../img/hramos-azul.png' alt='Foto de perfil, Hugo Ramos' />
                ) : (
                    <img src='../../../img/hramos-naranja.png' alt='Foto de perfil, Hugo Ramos' />
                )}
                <h1>Hugo Ramos</h1>
                <span>{t('dev')}</span>
                <div className={styles.socialBtns}>
                    <a href='https://github.com/HugoRamosEs' target='_blank' rel="noopener noreferrer" className='btn'><span>&#xeab0;</span> Github</a>
                    <a href='https://www.linkedin.com/in/hugoramosmontesinos/' target='_blank' rel="noopener noreferrer" className='btn'><span>&#xeac9;</span> LinkedIn</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hugoramosmontesinos@gmail.com" target='_blank' rel="noopener noreferrer" className='btn'><span>&#xe945;</span> {t('mail')}</a>
                    <a href={`../../../doc/CV_HugoRamos_2024_${selectedLanguage}.pdf`} target='_blank' rel="noopener noreferrer" className='btn'><span>&#xe926;</span> CV 2024</a>
                </div>
            </article>
        </section>
    );
}

export default Social;
