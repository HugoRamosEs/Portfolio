import styles from './Ltap.module.scss';
import BackButton from '../../Common/BackButton/BackButton';
import { useTranslation } from 'react-i18next';

function Ltap() {
    const { t } = useTranslation();

    return (
        <>
            <BackButton to='/games' />
            <section className={`${styles.ltap} container`}>
                <article>
                    <h1>Leaving The After Party</h1>
                    <img src='../../../img/game-ltap.png' alt='Leaving The After Party' />
                    <p>{t('game_ltap_text')}</p>
                    <p>{t('game_ltap_text_2')}</p>
                    <h2>{t('game_common_h2_1')}</h2>
                    <ul>
                        <li><strong>Unity: </strong> {t('game_ltap_text_4.1')}</li>
                        <li><strong>C#:</strong> {t('game_ltap_text_4.2')}</li>
                        <li><strong>PHP:</strong> {t('game_ltap_text_4.4')}</li>
                        <li><strong>SQL Server:</strong> {t('game_ltap_text_4.5')}</li>
                        <li><strong>Azure:</strong> {t('game_ltap_text_4.6')}</li>
                        <li><strong>Tiled:</strong> {t('game_ltap_text_4.3')}</li>
                    </ul>
                    <h2>{t('game_common_h2_2')}</h2>
                    <div className='btns'>
                        <a className='btn' href='https://leavingtheafterparty.vercel.app/' target='_blank'>{t('game_ltap_text_6')}</a>
                        <a className='btn' href='https://github.com/HugoRamosEs/LeavingTheAfterparty-game' target='_blank'>{t('game_ltap_text_5')}</a>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Ltap;
