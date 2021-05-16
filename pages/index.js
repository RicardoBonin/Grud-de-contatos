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
  //const { error_name, error_email, error_password } = state.errors;
  const handlerChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  //validar nome

  const validateName = name => {
    if (name.length == 0) {
      setState({
        ...state,
        errors: { ...state.errors, error_name: true },
        errors_msg: {
          ...state.errors,
          error_name: 'Empty field. Please fill in the field with your name.'
        }
      });
    } else {
      setState({
        ...state,
        errors: { ...state.errors, error_name: false },
        errors_msg: { ...state.errors, error_name: '' }
      });
    }
  };

  //validade email
  const validadeEmail = email => {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    console.log('>>>', reg.test(email));
  };

  //validar senha

  const validadePassword = password => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    console.log('>>>', reg.test(password));
  };

  //Cadastra usuário

  const registerUser = () => {
    validateName(state.name);
    validadeEmail(state.email);
  };
  console.log(state);
  console.log(state.errors);
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

        {state.errors.error_name ||
        state.errors.error_email ||
        state.errors.error_password ? (
          <div>
            {state.errors.error_name && <p>{state.errors_msg.error_name}</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
}
