import React from 'react'
// import background from "./images/background.jpg"
import styles from './left.module.css'
function LeftBanner() {
  return (
    <div className={styles.img}  >
    <div className='flex'>

        <div><p> Already have an account?</p></div>
<div >   <button className={styles.login}>Login</button></div>

   
    </div>
    <div className={styles.footer}>
        <h3>Discover new things on Superapp</h3>
    </div>



   


</div>
  )
}

export default LeftBanner