import React from 'react'
import{Formik, useFormik} from 'formik'
import styles from "./right.module.css"
import {BrowserRouter,Routes,Route, NavLink, Link} from "react-router-dom"

function RightBanner() {



const  initialValues={
  name:'',
  username:'',
  email:'',
  phone:'',
  checkBox:false

}

   const  onSubmit= values =>{
  console.log(values);
  // console.log(typeof values);
  <Link to="category"/>
}



const validate= values=>{
  const errors={}
  if(!values.name){
    errors.name='Required'
  }


  if(!values.username){
    errors.username='Required'
  }
  if(!values.email){
    errors.email='Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = 'Invalid email format'
     }
  
  if(!values.phone){
    errors.phone='Required'
  }
  if(!values.checkBox){
    errors.checkBox='Required'
  }


  
  

  return errors
}


            const formik =useFormik({
              initialValues,
              onSubmit,
              validate
             
             
           



            })
            // console.log(formik.to);

















  return (
    <div className="flex-row-8" style={{backgroundColor:'black'}} >
      <div id={styles.superApp} className=" flex justify-center" >Super app</div>
      <div className=" flex justify-center message" id={styles.message}>Create your new account</div>
      <div className='flex col-span-3 gap-4 justify-center ' id= {styles.emailgoogle}>
        <div  >
<button>Email</button>
        </div>
        <div style={{color:'green'}}>
         |
        </div>
        <div>
        <button> Google</button> 
        </div>
      </div>


      <form onSubmit={formik.handleSubmit}>





      <div className='grid grid-rows-4  items-center justify-center' >

   
    <div >
        <input type="text" 
         name='name'  required 
         placeholder='Name' 
         value={formik.values.name} 
         className='form-input px-4 py-3 '  
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
         />
     
        { formik.touched.name &&  formik.errors.name ? <span className={styles.error}>{formik.errors.name}</span>: null}
    </div>
    <div>
        <input type="text"  name='username' 
        value={formik.values.username}  
         required placeholder='Username' 
         className='form-input px-4 py-3'  
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
        {formik.touched.username  &&   formik.errors.username ? <span className={styles.error}>{formik.errors.username}</span>: null}
    </div>
    <div>
        <input type="email" name='email' 
        value={formik.values.email}   required 
        placeholder='Email' 
        className='form-input px-4 py-3'  
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.touched.email &&   formik.errors.email ? <span className={styles.error}>{formik.errors.email}</span>: null}
       
    </div>
    <div>
        <input type="tel"  required  
        name='phone' 
        value={formik.values.phone}   
        placeholder='Phone' minLength={10} maxLength={10}  
        className='form-input px-4 py-3' 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />
        {formik.touched.phone && formik.errors.phone ? <span className={styles.error}>{formik.errors.phone}</span>: null}
    </div>


   </div>
 
    
     <div className="flex  items-center justify-center" style={{marginTop:'20px'}}>
  <input type="checkbox" name='checkBox' 
  className="form-checkbox h-4 w-4 text-blue-600" 
  value={formik.values.checkBox}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  
  />
     {formik.touched.checkBox && formik.errors.checkBox ? <span className={styles.error}>{formik.errors.checkBox}</span>: null}
  <span className="ml-2 text-gray-700">Share my registration data with Superapp</span>
</div>
<div>

</div>
<div className='flex  items-center justify-center ' style={{marginTop:'40px'}}>

  <button type='submit' className={styles.signup} >Sign Up</button>


</div>
</form>

<div className={styles.termsprivacy}>
  <p>By clicking on Sign up. you agree to Superapp<a href='#'>Terms and Conditions of Use</a> </p>
  <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<a href='#'> Privacy Policy</a></p>
</div>

      
       




    </div>
  )
}

export default RightBanner