

export function Register ()
{
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
          <input type="password" name="" id="password" />
          <div id="icon" ></div>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirmar Senha</label>
          <input type="password" name="" id="confirmpassword" />
        </div>
        <div>
          <button type="submit">Criar conta</button>
          <span>Já tem uma conta? <a href="">Iniciar sessão</a></span>
        </div>     
      </form>
    </div>
  );
}