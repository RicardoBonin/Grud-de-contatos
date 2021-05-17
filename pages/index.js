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
  const [errorName, setErrorName] = useState({
    error_name: false,
    error_msg: ''
  });
  const [errorEmail, setErrorEmail] = useState({
    error_email: false,
    error_msg: ''
  });
  const [errorPassword, setErrorPassword] = useState({
    error_password: false,
    error_msg: ''
  });
  const [success, setSuccess] = useState(false);

  const handlerChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  //validar nome

  const validateName = name => {
    if (name.length === 0) {
      setErrorName({
        ...errorName,
        error_name: true,
        error_msg: 'Campo vazio. Por favor, preencha o campo com seu nome.'
      });
    } else {
      setErrorName({
        ...errorName,
        error_name: false,
        error_msg: ''
      });
    }
  };

  //validade email
  const validadeEmail = email => {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) {
      setErrorEmail({
        ...errorEmail,
        error_email: true,
        error_msg: 'Erro. Por favor, adicione um email válido.'
      });
    } else {
      setErrorEmail({
        ...errorEmail,
        error_email: false,
        error_msg: ''
      });
    }
  };

  //validar senha

  const validadePassword = password => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (!reg.test(password)) {
      setErrorPassword({
        ...errorPassword,
        error_password: true,
        error_msg:
          'Erro. Sua senha deve conter um símbolo, um número, uma letra maiúscula, deve conter pelo menos 8 caracteres e não pode conter caracteres iguais.'
      });
    } else {
      setErrorPassword({
        ...errorPassword,
        error_password: false,
        error_msg: ''
      });
    }
  };

  //Cadastra usuário

  const registerUser = () => {
    validateName(state.name);
    validadeEmail(state.email);
    validadePassword(state.password);
    if (
      !errorName.error_name &&
      !errorEmail.error_email &&
      !errorPassword.error_password
    ) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };
  const resetFields = () => {
    setErrorName({
      ...errorName,
      error_name: false,
      error_msg: ''
    });
    setErrorEmail({
      ...errorEmail,
      error_email: false,
      error_msg: ''
    });
    setErrorPassword({
      ...errorPassword,
      error_password: false,
      error_msg: ''
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Grud de contatos</title>
      </Head>
      <div className={styles.register}>
        <h1>Cadastro de Usuário</h1>
        <form>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            onChange={handlerChange}
            onClick={resetFields}
            id="name"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            onChange={handlerChange}
            onClick={resetFields}
            id="email"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            onChange={handlerChange}
            onClick={resetFields}
            id="password"
          />
          <button type="button" onClick={registerUser}>
            Cadastrar
          </button>
        </form>

        {errorName.error_name ||
        errorEmail.error_email ||
        errorPassword.error_password ? (
          <div className={styles.errors}>
            {errorName.error_name && <p>{errorName.error_msg}</p>}
            {errorEmail.error_email && <p>{errorEmail.error_msg}</p>}
            {errorPassword.error_password && <p>{errorPassword.error_msg}</p>}
          </div>
        ) : null}
        {success && (
          <div className={styles.success}>
            <p>Cadastro realizado com sucesso!</p>
          </div>
        )}
      </div>
    </div>
  );
}
