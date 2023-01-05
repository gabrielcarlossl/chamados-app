import React from "react";
import { useState } from "react";

import logo from "../../assets/logo.svg";
import eye from "../../assets/eye.png";

function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={logo} alt="lambda logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira um e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="show-password-area">
            <button className="passwordBtn" onClick={togglePassword}>
              {" "}
              <img className="eye" src={eye} alt="" /> Mostrar Senha
            </button>
          </div>
          <button type="submit">Cadastrar</button>
        </form>

        <a href="/">Já tem uma conta?</a>
      </div>
    </div>
  );
}

export default SignUp;
