import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errors: {
    error_name: false,
    error_email: false,
    error_password: false
  },
  errors_msg: {
    error_name: '',
    error_email: '',
    error_password: ''
  }
};

export default function Home() {
  const [state, setState] = useState(INITIAL_STATE);

  const handlerChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  //validar nome

  const validateName = name => {
    if (name.length == 0) {
      setState({
        ...state.errors,
        error_name: true
      });
      setState({
        ...state.errors_msg,
        error_name: 'Campo vazio. Por favor, coloque um nome valido.'
      });
    } else {
      setState({
        ...state.errors,
        error_name: false
      });
    }
  };

  //validade email

  //validar senha

  //Cadastra usuário

  const registerUser = () => {
    validateName(state.name);
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
          <button type="button" onClick={registerUser}>
            Cadastrar
          </button>
        </form>

        {state.errors.error_name && (
          <div>
            <p>Error</p>
          </div>
        )}
      </div>
    </div>
  );
}
