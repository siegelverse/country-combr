import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <img src='/logo.svg' alt='logo' />
            </header>
    
            <main className={styles.main}>
                {children}
            </main>
    
            <footer className={styles.footer}>
                footer
            </footer>
        </div>
    )
}

export default Layout;