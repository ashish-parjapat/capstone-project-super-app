import React,{useEffect, useState} from 'react'
import styles from "./right.module.css"
import Form from './form'
function RightBanner() {


    const[formValues,setFormValues]=useState({name:'',username:'',email:'',phone:''})

    const handleChange=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    // console.log(typeof formValues);
 setFormValues({...formValues,[e.target.name]:e.target.value})
 
//  console.log(formValues);


    // console.log(setFormValues(...formValues));

  //   if(formValues.email===null){
  //     setEmailError('Enter email ')
  //   }
  //  else if(!/\S+@\S+\.\S+/.test(formValues.email)){
  //   setEmailError('Enter valid email')
  //  }else{
  //   setEmailError(null)
  //  }
    

    }
    console.log(formValues.name);
    // console.log(form);



  

  

    const[checkBox,setCheckBox]=useState(false);

    const tick=()=>{
      setCheckBox(!checkBox)
    
    }
    // console.log(checkBox);
    const[error,setError]=useState('')
    const handleSubmit=()=>{
      if(formValues.name&&formValues.username&&formValues.email&&formValues.phone!=null&&checkBox){
alert("Register successfully")
      } if(formValues.name===''){
      setError("Name is a required field.")
      }
      if(formValues.username===''){
        setError("Username is a required field." )
        }
         if(formValues.email===''){
          setError("email is a required field." )
          }
           if(formValues.phone===''){
            setError("Phone is a required field." )
            }
            


    }










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
      <div className='grid grid-rows-4  items-center justify-center' >
    <div >
        <input type="text"  name='name'  required placeholder='Name' value={formValues.name} className='form-input px-4 py-3 '  onChange={handleChange} />
        {/* <span className={styles.error}>{}</span> */}
    </div>
    <div>
        <input type="text"  name='username' value={formValues.username}   required placeholder='Username' className='form-input px-4 py-3'  onChange={handleChange}/>
        {/* <span className={styles.error}>{error}</span> */}
    </div>
    <div>
        <input type="email" name='email' value={formValues.email}  required placeholder='Email' className='form-input px-4 py-3' onChange={handleChange}/>
        {/* <span className={styles.error}>{error}</span> */}
       
    </div>
    <div>
        <input type="tel"  required  name='phone' value={formValues.phone}   placeholder='Phone' minLength={10} maxLength={10}  className='form-input px-4 py-3' onChange={handleChange}/>
        {/* <span className={styles.error}>{error}</span> */}
    </div>


   </div>
    
     <div className="flex  items-center justify-center" style={{marginTop:'20px'}}>
  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" onClick={tick} />
  <span className="ml-2 text-gray-700">Share my registration data with Superapp</span>
</div>
<div>

</div>
<div className='flex  items-center justify-center ' style={{marginTop:'40px'}}>
  <button type='submit' className={styles.signup} onClick={handleSubmit}>Sign Up</button>
</div>

<div className={styles.termsprivacy}>
  <p>By clicking on Sign up. you agree to Superapp<a href='#'>Terms and Conditions of Use</a> </p>
  <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<a href='#'> Privacy Policy</a></p>
</div>

      
       




    </div>
  )
}

export default RightBanner