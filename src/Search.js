import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';


const Search = () => {

  const [picture, setPicture] = useState('');
  const [clientId, setClientId] = useState('Fp2GmkMH2Daq-lFe2geeUYQlpWYsx2WaaTydRLM_cLc')
  const [result, setResult] = useState([]);
  const changeHandler = (event) => {
    setPicture(event.target.value);
  }
  const searchHandler = () => {
    const url = "https://api.unsplash.com/search/photos?query=" + picture + "&client_id=" + clientId;
    console.log(url);
    axios.get(url)
      .then(responseFromAPI => {
        //console.log(responseFromAPI);
        setResult(responseFromAPI.data.results);
      });
  }
  return (
    <div>
      <input onChange={changeHandler} type='text' name='picture' placeholder='Search for pictures' />
      <button onClick={searchHandler} type='submit'>Search</button>
      {
        result.map((item)=>{
          return <img key={item.id} src={item.urls.small}/>
        })
      }
    </div>
  )
}

export default Search;
