import { useRef} from "react";
import { Link } from "react-router-dom";
import style from './style.css';

export function Register ()
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
    <div className="register">
      <h1>Criar conta</h1>
      <form action="">
        <div>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="" id="name" />
          </div>
          <div>
          <label htmlFor="lastname">Sobrenome</label>
          <input type="text" name="" id="lastname" />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input ref={passwRef} type="password" name="" id="password" />
          <div ref={iconRef} id="icon" onClick={showHide}></div>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirmar Senha</label>
          <input type="password" name="" id="confirmpassword" />
        </div>
        <div>
          <button type="submit">Criar conta</button>
          <span>Já tem uma conta? <Link to="/login">Iniciar sessão</Link></span>
        </div>     
      </form>
    </div>
  );
}