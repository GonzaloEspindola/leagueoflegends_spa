import React from "react";
import {useParams} from 'react-router-dom'

var api_url = 'http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/';

function Champ () {
    let id = useParams().id;

    let details = fetch(`${api_url}${id}.json`)
    .then(details => details.json())
    .then(details => console.log(details))

    return (
        <h2>{id}</h2>
    )
}

export {Champ};