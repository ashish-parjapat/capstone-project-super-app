import React from 'react'
import styles from './Header.module.css'
import { profilelogo } from '../Cards/images'

function Header() {
  return (
    <div>
      <div className='flow-root'>
      <div id={styles.superApp} className='float-left' >Super app</div>
      <div id={styles.profilelogo} className='float-right'>
<img src={profilelogo}/>
      </div>
      </div>
      <div className={styles.subHeading}>
        <h3>Entertainment according to your choice</h3>
      </div>



    </div>
  )
}

export default Header