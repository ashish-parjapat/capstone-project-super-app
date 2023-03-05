import React,{useState,useEffect} from 'react'
import styles from './Genere1.module.css'
import axios from 'axios'

function Genere1() {
const[action,setAction]=useState([])


const link='https://api.themoviedb.org/3/movie/popular?api_key=ef4b3bbf09ea92b929c5bb7cbff247a2'
  axios.request(link).then(function (res) {
    //   console.log(res.data.results);
      setAction(res.data.results)

  }).catch(function (error) {
      console.error(error);
  });

//   console.log(action);


  

   
     

// console.log(action);

  return (
    <div>
    <div className={styles.row_posters}>
  {
    action.map((item)=>{
        // const image=item.poster_path
        // const image=item.backdrop_path
        // console.log(image);
        return(
           
              
  <img className={styles.row_poster} src={`https://image.tmdb.org/t/p/original${item.title &&item.poster_path}`}  /> 

 

              
                  


        )
    })
}   



    </div>
    
    
    </div>
    
 
  )
}

export default Genere1