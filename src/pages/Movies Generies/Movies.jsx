import React from 'react'
import Header from '../../components/Movies page comp/Header'
import styles from './Movies.module.css'
import axios from 'axios'

function Movies() {
 

    const options = {
        method: 'GET',
        url: 'https://netflix-unofficial.p.rapidapi.com/api/genres',
        headers: {
          'X-RapidAPI-Key': 'a83a90da1bmshe6dfa649df65c66p132660jsn0d63469fb8c8',
          'X-RapidAPI-Host': 'netflix-unofficial.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

  return (
    <div>
        <Header/>



    </div>
  )
}

export default Movies