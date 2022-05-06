import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import {Filter} from './Filter';

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
        let {image, name, tags} = champion[1];
    
        return (
            <div className="champions__item" key={name}>
                <img alt={name} src={`${loadingImg_url}${image.full.replace('.png', '_0.jpg')}`} />
                <div className="champions__item__info"> 
                    <h2>{name}</h2>
                    <h4>{`${tags}`.replace(',', ' - ')}</h4>
                </div>
            </div>
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