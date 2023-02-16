import './style.css';
import categories from '../../../categories.json';
import { Card } from './card';

export function ContainerCategory()
{

    const category = categories.category;

    return (
        <div className="category">
            <h2>Buscar por tipo de acomodação</h2>
            <div className='container-card'>
                {
                    category.map(current =>
                        {
                            return <Card img={current.img} title={current.title} number={current.found}></Card>
                        })
                }
            </div>
        </div>
    );
}