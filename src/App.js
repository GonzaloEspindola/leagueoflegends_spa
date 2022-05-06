import React, { useEffect, useState } from 'react';
import './App.css';
import { Champions } from './components/Champions';
import { Champ } from './components/Champ';
import { Search } from './components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//API
const api_url = "http://ddragon.leagueoflegends.com/cdn/12.8.1/data";

//endpoints
const english = '/en_US';
const spanish = '/es_ES';
const allChampions = '/champion.json';


function App() {
  const [champions, setChampions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async function () {
      try {
        let data = await fetch(`${api_url}${english}${allChampions}`)
        .then(data => data.json())
        .then(data => setChampions(data.data))
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  if(champions.length != 0 ) {
    var idsArray = Object.entries(champions);
  }


  return (
    <Router>
        <Routes>

          <Route path='/' element={
            <React.Fragment>
              <div className='champion__container__header'>
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
              </div>
              <div className='main__container'>
                <Champions champions={champions} searchValue={searchValue} setSearchValue={setSearchValue}/>
              </div>
            </React.Fragment>
          }>

          </Route>

          
          
          <Route path="/:id" element={
            <React.Fragment>
              <Champ />
            </React.Fragment>
          }>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
