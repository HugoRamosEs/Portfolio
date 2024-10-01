import styles from './Web.module.scss';
import Social from '../Social/Social';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Web() {
    const { t } = useTranslation();

    return (
        <>
            <Social />
            <section className={`${styles.web} container`}>
                <article>
                    <h2>{t('web_a1_title')}</h2>
                    <div className={styles.web}>
                        <img src='../../../img/openai-azure-banner.png' alt='Azure OpenAI' />
                        <div className={styles.text}>
                            <h3>OpenAI-Hramos.API</h3>
                            <p className='date'>may. 10 - 2024</p>
                            <div className='badges'>
                                <span className='badge'><img src='../../../img/icons/dotnet.png' alt='Logo .NET' />.NET</span>
                                <span className='badge'><img src='../../../img/icons/mysql.png' alt='Logo MySQL' />MySQL</span>
                                <span className='badge'><img src='../../../img/icons/azure.png' alt='Logo Azure' />Azure</span>
                                <span className='badge'><img src='../../../img/icons/sk.png' alt='Logo Semantic Kernel' />Semantic Kernel</span>
                                <span className='badge'><img src='../../../img/icons/openai.webp' alt='Logo OpenAI' />OpenAI</span>
                            </div>
                            <p>{t('web_d1_text')}</p>
                            <Link to="/web/openai_hramos" className='btn'>{t('game_dx_link')}</Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Web;
