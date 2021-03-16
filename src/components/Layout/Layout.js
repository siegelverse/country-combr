import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children, title = 'CountryCombr' }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <header className={styles.header}>
                <img src='/logo.svg' alt='logo' />
            </header>
    
            <main className={styles.main}>
                {children}
            </main>
    
            <footer className={styles.footer}>
                <a href='http://www.marcus-siegel.dev'>Marcus Siegel</a>
            </footer>
        </div>
    )
}

export default Layout;