import React from 'react'
import styles from './card.module.css'
import content from './contents'
function Card() {
  return (
    <div className={styles.container} >
       <div className={styles.card}>
        <div className={styles.header}>
            <h4>{content[0].Header}</h4>

        </div>
        <div className={styles.img}>
     
   <img src={content[0].image}/>
  { console.log(content[0])}
        </div>


       </div>
     


    </div>
  )
}

export default Card