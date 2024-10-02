import styles from './Games.module.scss';
import Social from '../Social/Social';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Games() {
    const { t } = useTranslation();

    return (
        <>
            <Social />
            <section className={`${styles.games} container`}>
                <article>
                    <h2>{t('games_a1_title')}</h2>
                    <div className={styles.game}>
                        <img src='../../../img/game-ltap-banner.png' alt='Leaving The After Party' />
                        <div className={styles.text}>
                            <h3>Leaving The After Party</h3>
                            <p className='date'>may. 19 - 2024</p>
                            <div className='badges'>
                                <span className='badge'><img src='../../../img/icons/dotnet.png' alt='Logo .NET' />.NET</span>
                                <span className='badge'><img src='../../../img/icons/unity.png' alt='Logo Unity' />Unity</span>
                                <span className='badge'><img src='../../../img/icons/tiled.png' alt='Logo Unity' />Tiled</span>
                                <span className='badge'><img src='../../../img/icons/php.png' alt='Logo PHP' />PHP</span>
                                <span className='badge'><img src='../../../img/icons/sql-server.png' alt='Logo SQL Server' />SQL Server</span>
                                <span className='badge'><img src='../../../img/icons/azure.png' alt='Logo Azure' />Azure</span>
                            </div>
                            <p>{t('game_d1_text')}</p>
                            <Link to="/games/ltap" className='btn'>{t('game_dx_link')}</Link>
                        </div>
                    </div>
                    <div className={styles.game}>
                        <img src='../../../img/game-arm-banner.png' alt='ARMansion' />
                        <div className={styles.text}>
                            <h3>ARMansion</h3>
                            <p className='date'>jan. 22 - 2022</p>
                            <div className='badges'>
                                <span className='badge'><img src='../../../img/icons/dotnet.png' alt='Logo .NET' />.NET</span>
                                <span className='badge'><img src='../../../img/icons/unity.png' alt='Logo Unity' />Unity</span>
                                <span className='badge'><img src='../../../img/icons/tiled.png' alt='Logo Unity' />Tiled</span>
                            </div>
                            <p>{t('game_d2_text')}</p>
                           <Link to="/games/armansion" className='btn'>{t('game_dx_link')}</Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Games;
