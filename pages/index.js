import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grud de contatos</title>
      </Head>
      <h1>Hello word</h1>
    </div>
  );
}
