import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import content from './contents'
function Card(props) {

 


  return (

    <div className={styles.container} >
      <button type='select' onClick={props.onClicked}>
      
             <div className={styles.card } style={{background:props.background,border:props.border}} >

      
        <div className={styles.title} >
            <h4>{props.title} </h4>

        </div>
        <div className={styles.img}>
 


     <img src={props.screen}    />
 
 
        </div>


       </div>
     
       </button>

    </div>
  )
}

export default Card