import React,{useState} from 'react'
import styles from './News.module.css'
import axios from 'axios'




function News() {
  const[Title,setTitle]=useState([])
  const[Description,setDescription]=useState([])
  const[image,setimage]=useState([])
  const[publishedDate,setPublishedDate]=useState([])

 

 const link='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ec6bc8a2fbf42e698978d298efe4825'
 axios.get(link).then((res)=>{
  console.log(res.data.articles);
  setTitle(res.data.articles[0].title)
  setDescription(res.data.articles[0].description)
  setimage(res.data.articles[0].urlToImage)
  setPublishedDate(res.data.articles[0].publishedAt)
 }).catch((e)=>{
  console.log(e);
 })


  return (
    <>
   <div class="p-10">  

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image} alt="Mountain"/>
      <div class="px-6 py-4" style={{background: 'rgba(0, 0, 0, 0.74)'}}>
        <div className="font-bold text-xl mb-2"  id={styles.Title}>{Title}</div>
        <div className={styles.date}>
        {publishedDate}
        </div>
      
        </div>
        <div className={styles.disc}>
        <p class="text-gray-700 text-base">
          {Description}
             </p>
             </div>
     
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#News</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sports</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Genuine</span>
      </div>
    </div>
  </div>
    </>
  )
}

export default News