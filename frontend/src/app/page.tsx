import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div>
      <h1>Bem-vindo ao App de Viagens</h1>

      <div className="div_buttons">
        <button className="home_buttons"> <Link href="/rides-request">Solicitar Viagem</Link></button>
        <button className="home_buttons"> <Link href="/rides-history">Ver Histórico de Viagens</Link></button>
      </div >
      </div>
      </main>
      
    </div>
  );
}
