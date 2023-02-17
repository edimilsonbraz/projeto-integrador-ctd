//Essa função verifica se o email digitado no input é válido
//Retorna true se for valido e false se for invalido
export function checkEmail(email)
{
    if(email.includes('@') && email.includes('.'))
    {
        const user = email.slice(0, email.indexOf('@'));
        const domain = email.slice(email.indexOf('@') + 1, email.length);
        const point = domain.slice(domain.indexOf('.') + 1, domain.length)

        if(user.length < 1 || user.includes(' '))
        {
            return false;
        }else if(domain.length < 1 || !domain.includes('.') || point.length < 1)
        {
            return false;
        }else
        {
            return true;
        }
    }else
    {
        return false;
    }

}