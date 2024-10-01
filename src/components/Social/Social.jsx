import styles from './Social.module.scss';

import { useTranslation } from 'react-i18next';

function Social() {
    const { t } = useTranslation();

    return (
        <>
            <section className={styles.social}>
                <article className='container'>
                    <img src='../../../img/hramos-azul.png' alt='Foto de perfil, Hugo Ramos' />
                    <h1>Hugo Ramos</h1>
                    <span>{t('dev')}</span>
                    <div className={styles.socialBtns}>
                        <a href='https://github.com/HugoRamosEs' target='_blank' className='btn'><span>&#xeab0;</span> Github</a>
                        <a href='https://www.linkedin.com/in/hugo-ramos-montesinos-66ba04259/' target='_blank' className='btn'><span>&#xeac9;</span> LinkedIn</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hugoramosmontesinos@gmail.com" target='_blank' className='btn'><span>&#xe945;</span> {t('mail')}</a>
                        <a href='../../../doc/CV_HugoRamos.pdf' target='_blank' className='btn'><span>&#xe926;</span> CV 2024</a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Social;
