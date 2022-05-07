import React from "react";
import { Filter} from './Filter';
import { Link } from 'react-router-dom';

function Champions({champions, searchValue, setSearchValue}) {
    //Imagenes
    const loadingImg_url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'

    //initial state of 'champions'
    if(champions.length === 0) {
        <h2>Un error ha ocurrido!</h2>
    }else {
        //transform 'chmapions' to array 'championsArray'
        var championsArray = Object.entries(champions)
        var searchedChampion = [];

        //I detect if a search was entered
        if(searchValue.length >= 1) {
            searchedChampion = championsArray.filter(champion => {
                const championName = champion[0].toLowerCase();
                const searchName = searchValue.toLowerCase();
          
                return championName.includes(searchName);
            })
        //but we take as search, the array with all the champions
        } else {
            searchedChampion = championsArray;
        }

        let displayChampions;

        //rendering each champion
        displayChampions = searchedChampion.map(champion => {
        var id = champion[0];
        let {image, name, tags} = champion[1];
    
        return (
            <Link to={`/leagueoflegends_spa/${id}`} key={id}>
                <div className="champions__item" >
                    <img alt={name} src={`${loadingImg_url}${image.full.replace('.png', '_0.jpg')}`} />
                    <div className="champions__item__info__filter">

                    </div>
                    <div className="champions__item__info"> 
                        <h2>{name}</h2>
                        <h4>{`${tags}`.replace(',', ' - ')}</h4>
                    </div>
                </div>
            </Link>
        )
    })

    return <>
    <React.Fragment>
        <div>
            <Filter searchedChampion={searchedChampion}/>
        </div>
        <div className="champion__container">
            {displayChampions}
        </div>
    </React.Fragment>
    
    </>
    }
}

export {Champions};