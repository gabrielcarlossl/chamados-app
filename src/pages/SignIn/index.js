import React from 'react'
import { useState } from 'react'

import './signin.css'

import logo from '../../assets/logo.svg'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    alert('Clicou')
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='logo-area'>
          <img src={logo} alt="lambda logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder='Insira um e-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder='********' value={password} onChange={(e)=> setPassword(e.target.value)} />
          <button type='submit' >Acessar</button>
        </form>
      
        <a href="/register">Criar uma conta</a>

      </div>
    </div>
  )
}

export default SignIn