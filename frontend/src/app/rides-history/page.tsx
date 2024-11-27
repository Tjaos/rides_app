import Link from 'next/link';
import styles from './page.module.css';

export default function RideHistory() {
  return (
    <div className={styles.page}>
      <Link className={styles.link} href="/">
        Voltar para o início
      </Link>
      <main className={styles.main}>
        <h1>Histórico de Viagens</h1>
        
      </main>
    </div>
  );
}
