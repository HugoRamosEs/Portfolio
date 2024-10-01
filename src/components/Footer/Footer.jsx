import styles from './Footer.module.scss';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <footer className={styles.footer}>
                <section className='container'>
                    <article>
                        <h2>{t('footer_title')}</h2>
                        <ul>
                            <li><NavLink to='/'>{t('nav-1')}</NavLink></li>
                            <li><NavLink to='/web'>{t('nav-2')}</NavLink></li>
                            <li><NavLink to='games'>{t('nav-3')}</NavLink></li>
                        </ul>
                    </article>
                    <article>
                        <h2>{t('footer_title_2')}</h2>
                        <ul>
                            <li><a href='https://github.com/HugoRamosEs' target='_blank' >Github</a></li>
                            <li><a href='https://www.linkedin.com/in/hugo-ramos-montesinos-66ba04259/' target='_blank'>LinkedIn</a></li>
                            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=hugoramosmontesinos@gmail.com" target='_blank'>{t('mail')}</a></li>
                        </ul>
                    </article>
                    <article>
                        <p>Hugo Ramos - 2024 &#169;</p>
                    </article>
                </section>
            </footer>
        </>
    )
}

export default Footer;
