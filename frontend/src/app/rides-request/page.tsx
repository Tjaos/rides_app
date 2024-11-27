'use client';
import { useState } from 'react';
import styles from './page.module.css';
export default function RideRequest() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    customerId: '',
  });

  // Função para atualizar os dados do formulário
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para enviar os dados para a API
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/solicitacao-viagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Enviando todos os campos
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Solicitação de Viagem</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Endereço de Origem:
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange} // Alterando o valor do estado para o campo correto
            />
          </label>
          <label>
            Endereço de Destino:
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
          </label>
          <label>
            ID do Cliente:
            <input
              type="text"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Procurar Viagem</button>
        </form>
      </main>
    </div>
  );
}
