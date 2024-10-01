import styles from './OpenAI_Hramos.module.scss';
import BackButton from '../../Common/BackButton/BackButton';

import { useTranslation } from 'react-i18next';

function OpenAI_Hramos() {
    const { t } = useTranslation();

    return (
        <>
            <BackButton to='/web' />
            <section className={`${styles.openai_hramos} container`}>
                <article>
                    <h1>OpenAI-Hramos.API</h1>
                    <p>{t('web_openai_hramos_text')}</p>
                    <p>{t('web_openai_hramos_text_2')}</p>
                    <p>{t('web_openai_hramos_text_3')}</p>
                    <p>{t('web_openai_hramos_text_4')}<a href='https://github.com/Encamina/enmarcha'>Enmarcha</a></p>
                    <h2>{t('web_common_h2_2')}</h2>
                    <div className='btns'>
                        <a className='btn' href='https://github.com/HugoRamosEs/OpenAI-Hramos.API' target='_blank'>{t('game_ltap_text_5')}</a>
                    </div>
                </article>

            </section>
        </>
    )
}

export default OpenAI_Hramos;