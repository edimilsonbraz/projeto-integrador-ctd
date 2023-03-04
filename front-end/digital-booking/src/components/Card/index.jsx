import styles from './styles.module.css';

export function Card(props)
{
    return (
        <div className={styles.card}>
            <div style={{backgroundImage: `url(${props.img})`}}></div> 
            <div>   
                <h1>{props.title}</h1>
                <span>{props.number} hotéis</span>
            </div>
        </div>
    );
}
