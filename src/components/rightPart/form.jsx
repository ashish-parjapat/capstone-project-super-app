import React,{useState} from 'react'
import styles from './form.module.css'
// import Register from '../../pages/Register/Register'

function Form() {
    const[formValues,setFormValues]=useState({name:'',username:'',email:'',phone:''})

    const handleChange=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    console.log(typeof formValues);
 setFormValues({...formValues,[e.target.name]:e.target.value})
 console.log(setFormValues);
    // console.log(setFormValues(...formValues));
    

    }













  return (
   <>
   <div className='grid grid-rows-4  items-center justify-center' >
    <div >
        <input type="text"  name='ashish'  required placeholder='Name' className='form-input px-4 py-3 '  onChange={handleChange} />
    </div>
    <div>
        <input type="text" required placeholder='Username' className='form-input px-4 py-3'/>
    </div>
    <div>
        <input type="email"  required placeholder='Email' className='form-input px-4 py-3'/>
    </div>
    <div>
        <input type="tel"  required placeholder='Phone' minLength={10} maxLength={10}  className='form-input px-4 py-3'/>
    </div>


   </div>
   
   </>
    
  )
}

export default Form