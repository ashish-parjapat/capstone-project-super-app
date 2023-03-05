import React from 'react'
import Header from '../../components/Movies page comp/Header'
import styles from './Movies.module.css'
import Genere1 from '../../components/Movies page comp/Genere1'


function Movies() {
 
  const userChoice=localStorage.getItem('userChoices')
  const choiceArray=userChoice.split(',')

    
  return (
    <>
  
    <div style={{backgroundColor:'black'}}>
        <Header/>
        </div>
     <div style={{backgroundColor:'black'}}>
      <span>{choiceArray[0]}</span>
     <Genere1/>
     </div>
     
     <div style={{backgroundColor:'black'}}>
      <span>{choiceArray[1]}</span>
     <Genere1/>
     </div>
     
     <div style={{backgroundColor:'black'}}>
      <span>{choiceArray[2]}</span>
     <Genere1/>
     </div>
     
      
   



        </>
  )
}

export default Movies