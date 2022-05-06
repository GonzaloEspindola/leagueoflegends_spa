import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

var api_url = 'http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/';
var splash_url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'


function Champ () {
    const [data, setData] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        (async function () {
            let details = await fetch(`${api_url}${id}.json`)
            .then(details => details.json())
            .then(details => {
                var array = Object.entries(details.data)
                setData(array)
            })

        })();
      }, [])

    if(data.length !== 0) {
        var {allytips, enemytips, lore, passive, skins, spells, stats, tags, title} = data[0][1]
        var splashImg = data[0][0];
    }

    return (
        <div className="champ__detail" style={
            {color:"red", 
            backgroundImage:`url(${splash_url}${splashImg}_0.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            }}>
            <h2>{title}</h2>
        </div>
    )
}

export {Champ};