import React from 'react'
import styles from './Home.module.css'
import UserDetails from '../../components/HomeComponents/LeftHome/FormData/UserDetails'
import Dateweather from '../../components/HomeComponents/LeftHome/ Left HomeApi calls/Dateweather'

function Home() {
  return (
   <div className='grid grid-cols-10 '>
    <div className='col-span-7 '>
        <div className='grid grid-rows-2'>
            <div>
                <UserDetails/>
            </div>
            <div>
                <Dateweather/>
            </div>

        </div>

    </div>
    <div className='col-span-3'>
        right
        hfjjghgjhjj

    </div>


   </div>
  
  )
}

export default Home