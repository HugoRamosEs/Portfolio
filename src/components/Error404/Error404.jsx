import styles from './Error404.module.scss';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Error404() {
    const { t } = useTranslation();

    return (
        <>
            <section className={styles.error404}>
                <h1>ERROR 404</h1>
                <h2>{t('error_message')}</h2>
                <Link to='/' className='btn'>{t('error_back')}</Link>
            </section>
        </>
    )
}

export default Error404;
