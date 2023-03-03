import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { checkEmail, checkPassword } from '../../Scripts/validateForm'

import styles from './styles.module.css'

export function Login() {
  const passwRef = useRef()
  const iconRef = useRef()

  const [email, setEmail] = useState('')

  //Gerenciamento de erros do form com useState

  const [password, setPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handlerSubmit = (
    event //Evento de submit que faz validações dos campos input
  ) => {
    event.preventDefault()

    checkEmail(email) ? setEmailError(false) : setEmailError(true)
    checkPassword(passwRef.current.value)
      ? setPassword(false)
      : setPassword(true)
  }

  const showHide = () =>
    //Função para visualização de senha do campo input
    {
      if (passwRef.current.type === 'password') {
        passwRef.current.type = 'text'
        iconRef.current.className = ''
      } else {
        passwRef.current.type = 'password'
        iconRef.current.className = ''
      }
    }

  return (
    <div className={styles.login}>
      <h1>Iniciar sessão</h1>
      <form action="">
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            className={emailError ? 'border-error' : ''}
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.loginpassword}>
          <label htmlFor="password">Senha</label>
          <input
            className={password ? 'border-error' : ''}
            ref={passwRef}
            type="password"
            name=""
            id="password"
          />
          <div ref={iconRef} id="icon" onClick={showHide}></div>
        </div>

        <div>
          <button type="submit" onClick={handlerSubmit}>
            Iniciar
          </button>
          <span>
            Não é cadastrado? <Link to="/register">Criar conta</Link>
          </span>
        </div>
      </form>
      {password || emailError ? (
        <div className={styles.containerError}>
          <ul>
            {emailError ? <li> * E-mail digitado não é válido</li> : ''}
            {password ? <li>* A senha deve ter mais de seis caracteres.</li> : ''}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
