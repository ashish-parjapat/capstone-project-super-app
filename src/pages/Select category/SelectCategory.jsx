import React,{useState,useEffect} from 'react'
import { json } from 'react-router-dom'
import Card from '../../components/Cards/Card'
import content from '../../components/Cards/contents'
import styles from './selectCategory.module.css'





function SelectCategory() {
  
  const[output,setOutput]=useState([])



  const handleDelete=(i)=>{
    const deleteVal=[...output]
    deleteVal.splice(i,1)
    setOutput(deleteVal)
  }



 
  // const getDataFromLs=()=>{
  //   const data=localStorage.getItem('Value')
  //   if(data){
  //     return JSON.parse(data);
  //   }else{
  //     return []
  //   }
  // }




  

  useEffect(() => {
    localStorage.setItem("userChoices", output);
    console.log( typeof output);
  }, [output]);
  






  return (
    <div className={styles.finalContainer}>


    
    <div className='grid grid-cols-2 '>
   <div className={styles.container}>

       <div id={styles.superApp} className=" flex justify-center" >Super app</div>

 <div className='flex justify-center'>
     <h3 id={styles.choose} >
    Choose your entertainment category
    </h3>
 </div>

 <div className='grid grid-cols-3'>
{console.log(output)}
  {Object.keys(output).length!==0 ?

  output.map((data,i)=>{
    return(
      <div>
        <button className={styles.addedItem}>{data}</button> 
        <button  className={styles.remove} onClick={()=>{handleDelete(i)}}>x</button>
        </div>
    )
  })

:null

  }
 </div>

       </div>






       <div className='flex flex-col-3 '>
        <div>
        <Card title={content[0].Header}
       screen={content[0].image}
      //  onclick={setTitle(content[0].Header)}
       background= '#FF5209'
       border= '3px solid #11B800'
       onClicked={()=>{
        let clickedOutput=content[0].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        console.log( typeof output);
      

       }}
    

       
       />
       
      


       <Card title={content[1].Header}
       screen={content[1].image}
       background= '#D7A4FF'
      //  border= '6px solid #11B800'
      onClicked={()=>{
        let clickedOutput=content[1].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);

       }}
     
  
     
       />
       <Card title={content[2].Header}
       screen={content[2].image}
       background= '#148A08'
       border= '3px solid #11B800'
       onClicked={()=>{
        let clickedOutput=content[2].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
      // console.log( typeof output);
      

       }}
       />
        </div>
        <div>
        <Card title={content[3].Header}
       screen={content[3].image}
       background= '#84C2FF'
      //  border= '6px solid #11B800'
      onClicked={()=>{
        let clickedOutput=content[3].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}
       />
        <Card title={content[4].Header}
       screen={content[4].image}
       background= '#912500'
      //  border= '6px solid #11B800'
      onClicked={()=>{
        let clickedOutput=content[4].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}
       />
        <Card title={content[5].Header}
       screen={content[5].image}
       background='#7358FF'
       border= '6px solid #11B800'
       onClicked={()=>{
        let clickedOutput=content[5].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}
       />

        </div>
        <div>
        <Card title={content[6].Header}
       screen={content[6].image}
       background= '#FF4ADE'
      //  border= '6px solid #11B800'
      onClicked={()=>{
        let clickedOutput=content[6].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}
       />
        <Card title={content[7].Header}
       screen={content[7].image}
       background= '#E61E32'
       border= '3px solid #11B800'
       onClicked={()=>{
        let clickedOutput=content[7].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}
       />
        <Card title={content[8].Header}
       screen={content[8].image}
       background= '#6CD061'
      //  border= '3px solid #11B800'
      onClicked={()=>{
        let clickedOutput=content[8].Header
      
        // console.log(clickedOutput);
        setOutput([...output,clickedOutput]);
        // console.log( typeof output);
      

       }}

       />
        </div>
      
        
       </div>
    
    </div>
    </div>
  )
}

export default SelectCategory