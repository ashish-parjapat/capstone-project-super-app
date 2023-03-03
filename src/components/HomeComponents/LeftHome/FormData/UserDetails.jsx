import React,{useState} from 'react'
import styles from './UserDetails.module.css'
import SelectCategory from '../../../../pages/Select category/SelectCategory'
import { cartoon } from '../../../Cards/images'

function UserDetails() {
    // const getFormDataFromLs=()=>{
    //     const data=localStorage.getItem('formData')
    //     if(data){
    //       return JSON.parse(data);
    //     }else{
    //       return []
    //     }
    //   }


      const name=localStorage.getItem('name')
      const username=localStorage.getItem('username')
      const email=localStorage.getItem('email')
      const phone=localStorage.getItem('phone')

      const userChoice=localStorage.getItem('userChoices')
      const choiceArray=userChoice.split(',')
      console.log(choiceArray);
      console.log(typeof choiceArray);
     
      const[deleteChoice,setDeleteChoice]=useState([])
     
    //   const handleDelete=(i)=>{
    //     // const deleteVal=[...choiceArray]
    //     // console.log(deleteVal);
    //     choiceArray.splice(i,1)
    //     console.log(choiceArray);
      
    //   }
    



  return (
    <div className={styles.UserDetailscontainer}>
        <div className='grid grid-cols-10'>
            <div className='col-span-3'>
             
                <img  className='cartoon' src={cartoon}/>
                </div>
        


      
        <div className='col-span-7'>
            <div>
                <div className={styles.userinfo}>
               <div style={{marginBottom:'15px'}}>{name}</div>
               <div style={{marginBottom:'15px'}}>{email}</div>
               <div style={{marginBottom:'15px'}}>{username}</div>
                </div>
        
            </div>
            <div className='grid grid-cols-3'>
  {
    choiceArray.map((data,i)=>{
        return(
            <div className=''> 
            <button className={styles.addedItem}>{data}</button> 
            {/* <button  className={styles.remove} onClick={()=>{handleDelete(i)}}>x</button> */}
            </div>


        )
     
    })
  }
            </div>
            

        </div>


        </div>
    </div>
  )
}

export default UserDetails