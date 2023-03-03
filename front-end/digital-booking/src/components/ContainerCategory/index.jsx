import categories from '../../../categories.json'
import { Card } from '../Card'

import styles from './styles.module.css'

export function ContainerCategory() {
  const category = categories.category

  return (
    <div className={styles.containerCategory}>
      
      <div className={styles.containerCard}>
        {category.map((current) => {
          return (
            <Card
              key={current.title}
              img={current.img}
              title={current.title}
              number={current.found}
              className={styles.card}
            />
          )
        })}
      </div>
    </div>
  )
}
