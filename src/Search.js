import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';


const Search = () => {

  const [picture, setPicture] = useState('');
  const [clientId, setClientId] = useState(process.env.REACT_APP_API_KEY)
  const [result, setResult] = useState([]);

  const changeHandler = (event) => {
    setPicture(event.target.value);
  }

  const searchHandler = () => {
    const url = "https://api.unsplash.com/search/photos?page=5&per_page=24&query=" + picture + "&client_id=" + clientId;
    axios.get(url)
      .then(responseFromAPI => {
        setResult(responseFromAPI.data.results);
      });
  }
  return (
    <div className='container'>
      <div className="input-group mt-5 mb-5 w-100">
        <input className='form-control' onChange={changeHandler} type='text' name='picture' placeholder='🔎 Search for pictures...' />
        <div className="input-group-append">
          <button className='btn btn-info' onClick={searchHandler} type='submit'>Search</button>
        </div>
      </div>
      <div className=''>
        {
          result.map((item) => {
            return <img key={item.id} className='img-fluid img-thumbnail' alt='' style={{ height: 200, width: 200, margin: 7 }} src={item.urls.small} />
          })
        }
      </div>
    </div>
  )
}

export default Search;
