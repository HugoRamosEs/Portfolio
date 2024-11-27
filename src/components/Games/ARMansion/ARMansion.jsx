import styles from './ARMansion.module.scss'
import BackButton from '../../Common/BackButton/BackButton';

import { useTranslation } from 'react-i18next';

function ARMansion() {
    const { t } = useTranslation();

    return (
        <>
            <BackButton to='/games' />
            <section className={`${styles.armansion} container`}>
                <article>
                    <h1>ARMansion</h1>
                    <img src='../../../img/game-arm.png' alt='ARMansion' />
                    <p>{t('game_armansion_text')}</p>
                    <p>{t('game_armansion_text_2')}</p>
                    <p>{t('game_armansion_text_3')}</p>
                    <h2>{t('game_common_h2_1')}</h2>
                    <ul>
                        <li><strong>Unity:</strong> {t('game_armansion_text_4.1')}</li>
                        <li><strong>C#:</strong> {t('game_armansion_text_4.2')}</li>
                        <li><strong>Tiled:</strong> {t('game_armansion_text_4.3')}</li>
                        <li><strong>Vuforia:</strong> {t('game_armansion_text_4.4')}</li>
                    </ul>
                    <h2>{t('game_common_h2_3')}</h2>
                    <div className={styles.yt}>
                        <iframe 
                            src="https://www.youtube.com/embed/A4dhWRnEbZc" 
                            title={t('game_armansion_text_6')} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <h2>{t('game_common_h2_2')}</h2>
                    <div className='btns'>
                        <a className={`${styles.btn_section} btn`} href='https://github.com/HugoRamosEs/ARMansion-game/releases/tag/1.0' target='_blank'>{t('game_armansion_text_5')}</a>
                        <a className={`${styles.btn_section} btn`} href='https://github.com/HugoRamosEs/ARMansion-game' target='_blank'>{t('game_armansion_text_7')}</a>
                        <a className={`${styles.btn_section} btn`} href='../../../../doc/ARMansion_cat.pdf' target='_blank'>{t('game_armansion_text_8')}</a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ARMansion;
