import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Country from './Country'
import './App.css';


const StyledTitle = styled.h1`
   text-align: center;
`
const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px 5px;

`

function App() {
  const [countries, setCounties] = useState([]);
  const [search, setSearch] = useState('');
  const [filtredCountries, setFiltredCountries] = useState([]);


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      setCounties(data)
    })

  }, [])

  useEffect(() => {
    setFiltredCountries(countries.filter(e => e.name.toLowerCase().includes(search.toLowerCase())))
  }, [search, countries])



  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <StyledTitle>React-search</StyledTitle>
      <StyledInput onChange={handleChange} placeholder='search' type="text" />
      {
        filtredCountries.map((country, index) => <Country key={index} country={country} />)
      }
    </div>
  );
}

export default App;
