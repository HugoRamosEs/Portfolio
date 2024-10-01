import styles from './AboutMe.module.scss'
import Social from '../Social/Social';
import ThemeContext from '../../contexts/ThemeContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Social />
            <section className={`${styles.aboutMe} container`}>
                <article>
                    <h2>{t('aboutMe_a1_title')}</h2>
                    <p>{t('aboutMe_a1_text')}</p>
                </article>
                <article className={styles.skill}>
                    <h2>{t('aboutMe_a2_title')}</h2>
                    <div className={styles.desktopImage}>
                        {theme === 'dark' ? (
                            <img src='/img/skill-scheme-dark.png' alt='Skill Scheme' />
                        ) : (
                            <img src='/img/skill-scheme-light.png' alt='Skill Scheme' />
                        )}
                    </div>
                    <div className={styles.mobileImage}>
                        {theme === 'dark' ? (
                            <img src='/img/skill-scheme-mobile-dark.png' alt='Skill Scheme' />
                        ) : (
                            <img src='/img/skill-scheme-mobile-light.png' alt='Skill Scheme' />
                        )}
                    </div>
                </article>
                <article className={styles.certificates}>
                    <h2>{t('aboutMe_a5_title')}</h2>
                    <div className={styles.certificate}>
                        <img src='../../../img/microsoft-associate-badge.png' alt='Logo Microsoft Associate' />
                        <div>
                            <h3>Microsoft Certified: Azure Developer Associate</h3>
                            <p className='date'>{`(sep. 2024)`}</p>
                            <a href='https://learn.microsoft.com/api/credentials/share/es-es/HugoRamosMontesinos-6094/7269530208FBE20C?sharingId=57E6DE5D93211A38' target='_blank' className='btn'>{t('aboutMe_a5_link')}</a>
                        </div>
                    </div>
                </article>
                <article className={styles.work}>
                    <h2>{t('aboutMe_a3_title')}</h2>
                    <div className={styles.company}>
                        <img src='../../../img/encamina.png' alt='Logo ENCAMINA' />
                        <div>
                            <h3>ENCAMINA</h3>
                            <h4>{t('aboutMe_a3_subtitle')}</h4>
                            <p className='date'>{`(mar. 2024 - jul. 2024)`}</p>
                            <div className='badges'>
                                <span className='badge'><img src='../../../img/icons/dotnet.png' alt='Logo .NET' />.NET</span>
                                <span className='badge'><img src='../../../img/icons/azure.png' alt='Logo Azure' />Azure</span>
                                <span className='badge'><img src='../../../img/icons/sk.png' alt='Logo Semantic Kernel' />Semantic Kernel</span>
                                <span className='badge'><img src='../../../img/icons/openai.webp' alt='Logo OpenAI' />OpenAI</span>
                            </div>
                            <p>{t('aboutMe_a3_text')}</p>
                            <p>{t('aboutMe_a3_text_2')}</p>
                        </div>
                    </div>
                </article>
                <article className={styles.moreInfo}>
                    <h2>{t('aboutMe_a4_title')}</h2>
                    <div className={styles.languages}>
                        <h3>{t('aboutMe_a4_subtitle')}</h3>
                        <h4>{t('aboutMe_a4_text')}</h4>
                        <div className={styles.languageLevel}>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                        </div>
                        <h4>{t('aboutMe_a4_text_2')}</h4>
                        <div className={styles.languageLevel}>
                        <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <h4>{t('aboutMe_a4_text_3')}</h4>
                        <div className={styles.languageLevel}>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dotFilled}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                    </div>
                    <div className={styles.studies}>
                        <h3>{t('aboutMe_a4_subtitle_2')}</h3>
                        <div className={styles.study}>
                            <img src='../../../img/thosi.png' alt='Logo Thos I Codina' />
                            <div>
                                <h4>{t('aboutMe_a4_study')}</h4>
                                <p>INS Thos I Codina (sep. 2022 - may. 2024)</p>
                            </div>
                        </div>
                        <div className={styles.study}>
                            <img src='../../../img/biada.jpg' alt='Logo Miquel Biada' />
                            <div>
                                <h4>{t('aboutMe_a4_study_2')}</h4>
                                <p>IES Miquel Biada (sep. 2020 - jun. 2022)</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default AboutMe;
