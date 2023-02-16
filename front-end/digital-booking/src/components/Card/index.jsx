import './style.css';

export function Card(props)
{
    return (
        <div className="card">
            <div>
                <img src={props.img} alt="" />
            </div> 
            <div>   
                <h1>{props.title}</h1>
                <span>{props.number} hotéis</span>
            </div>
        </div>
    );
}