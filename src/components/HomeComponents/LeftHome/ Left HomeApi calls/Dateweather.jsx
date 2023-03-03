import React,{useState} from 'react'
import styles from './Dateweather.module.css'
import axios from "axios";
import { rain ,wind,hum} from '../../../Cards/images';
function Dateweather() {
    const d=new Date()
  //   let month=d.getMonth()
  //   let day=d.getDay()
  //  let year=d.getFullYear()
  //  console.log(month,day,year);
   const dateArray=[]
   dateArray.push(d.getDate(),d.getMonth(),d.getFullYear(), d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
  //  console.log(dateArray);

  const[temperature,setTemperature]=useState('')
  const[windSpeed,setWindSpeed]=useState('')
  const[humidity,sethumidity]=useState('')
 
 
  axios.get('https://api.weatherapi.com/v1/current.json?key=e1c0e1948126483dab9105314230303&q= New Delhi&aqi=no')
  .then((res)=>{
    // console.log(typeof res.data);
  console.log(res.data.current)
  // return res.data.current.temp_c;
  setTemperature(res.data.current.temp_c)
  setWindSpeed(res.data.current.wind_kph )
  sethumidity(res.data.current.humidity)

 
  })
 






  return (

    <div>
  
 
    <div className={styles.dateWeather} >
<div className={styles.date}>
{dateArray[0]}-{dateArray[1]}-{dateArray[2]}
</div>
<div className={styles.time}>
{dateArray[3]}
</div>


    </div>

    {/* //weather calls */}

    <div id={styles.weather} className='flex space-x-40'>

    <div className={styles.rain}>
      <img src={rain} />
      Heavy Rain


</div>
      <div className={styles.temp}>
         {temperature}<sup>o</sup>C 
         <div style={{display:'flex'}}>
          <img src={hum}/>
          <div>  {humidity}%   Humidity </div>
        
          
         </div>
        
       </div>
     
      <div className={styles.speed}>
        <img src={wind}/>
        
        
        {windSpeed}km/h
        wind
        
        </div>

      




      



    </div>



    </div>
  )
}

export default Dateweather