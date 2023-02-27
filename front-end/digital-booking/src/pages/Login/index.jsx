import { useRef} from "react";
import style from './style.css';

export function Login ()
{
  const passwRef = useRef();
  const iconRef = useRef();

  const showHide = () =>
  {
    if(passwRef.current.type === 'password')
    {
      passwRef.current.type = "text";
      iconRef.current.className = "hide";
    }else
    {
      passwRef.current.type = "password";
      iconRef.current.className = "";
    }
  }

  return (
    <div className="login">
      <h1>Iniciar sessão</h1>
      <form action="">

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="" id="email" />
        </div>
        
        <div className="loginpassword">
          <label htmlFor="password">Senha</label>
          <input ref={passwRef} type="password" name="" id="password" />
          <div ref={iconRef} id="icon" onClick={showHide}></div>
        </div>

        <div>
          <button type="submit">Iniciar</button>
          <span>Não é cadastrado? <a href="/register">Criar conta</a></span>
        </div>     
        
      </form>
    </div>
  );
}