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
    const url = "https://api.unsplash.com/search/photos?query=page=5&per_page=24" + picture + "&client_id=" + clientId;
    axios.get(url)
      .then(responseFromAPI => {
        setResult(responseFromAPI.data.results);
      });
  }
  return (
    <div>
      <div className='search'>
        <input className='input-field' onChange={changeHandler} type='text' name='picture' placeholder='🔎 Search for pictures...' />
        <button className='search-btn' onClick={searchHandler} type='submit'>Search</button>
      </div>
      <div className='img-gallery'>
        {
          result.map((item) => {
            return <img key={item.id} src={item.urls.small}/>
            
          })
          
        }

      </div>
    </div>
  )
}

export default Search;
