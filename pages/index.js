import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
};

export default function Home() {
  const [state, setState] = useState(INITIAL_STATE);

  const handlerChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  console.log(state);
  return (
    <div className={styles.container}>
      <Head>
        <title>Grud de contatos</title>
      </Head>
      <div className={styles.register}>
        <h1>Cadastro de Usuário</h1>

        <form>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" onChange={handlerChange} id="name" />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            onChange={handlerChange}
            id="email"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            onChange={handlerChange}
            id="password"
          />
          <button type="click">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
