import { useRef, useState} from "react";
import { Link } from "react-router-dom";
import { checkName, checkConfirmPassword, checkEmail, checkPassword } from "../../Scripts/validateForm";
import './style.css';

export function Register ()
{
  const passwRef = useRef();
  const confirmPasswRef = useRef();
  const iconRef = useRef();
  const nomeRef = useRef();
  const sobrenomeRef = useRef();

  const [email, setEmail] = useState('');

  //Gerenciamento de erros do form com useState
  const [nome, setNome] = useState(false);
  const [sobrenome, setSobrenome] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handlerSubmit = (event) => //Evento de submit que faz validações dos campos input
  {
    event.preventDefault();

    checkEmail(email) ? setEmailError(false) : setEmailError(true);
    checkPassword(passwRef.current.value) ? setPassword(false) : setPassword(true);
    checkConfirmPassword(passwRef.current.value, confirmPasswRef.current.value) ? setConfirmPassword(false) : setConfirmPassword(true);
    checkName(nomeRef.current.value) ? setNome(false) : setNome(true);
    checkName(sobrenomeRef.current.value) ? setSobrenome(false) : setSobrenome(true);

  }

  const showHide = () => //Função para visualização de senha do campo input
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
            <input className={nome ? 'border-error' : ''} ref={nomeRef} type="text" name="" id="name" />
          </div>
          <div>
          <label htmlFor="lastname">Sobrenome</label>
          <input className={sobrenome ? 'border-error' : ''}  ref={sobrenomeRef} type="text" name="" id="lastname" />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input className={emailError ? 'border-error' : ''} type="email" name="" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <div className="container-password">
            <input className={password ? 'border-error' : ''} ref={passwRef} type="password" name="" id="password"/>
            <div ref={iconRef} id="icon" onClick={showHide}></div>
          </div>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirmar Senha</label>
          <input className={confirmPassword ? 'border-error' : ''} ref={confirmPasswRef} type="password" name="" id="confirmpassword" />
        </div>
        <div>
          <button type="submit" onClick={handlerSubmit}>Criar conta</button>
          <span>Já tem uma conta? <Link to="/login">Iniciar sessão</Link></span>
        </div>
      </form>
        {nome || sobrenome || password || confirmPassword || emailError ? <div className="container-error">
          <ul>
            {nome ? <li>O nome digitado não é válido</li> : ''}
            {sobrenome ? <li>O sobrenome digitado não é válido</li> : ''}
            {emailError ? <li>E-mail digitado não é válido</li> : ''}
            {password ? <li>A senha deve ter mais de seis caracteres.</li> : ''}
            {confirmPassword ? <li>As senhas devem ser idênticas</li> : ''}
          </ul>
        </div> : ''}  
    </div>
  );
}