import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { getRolImg} from '../utils/getRolImg';

var api_url = 'http://ddragon.leagueoflegends.com/cdn/12.8.1/data/es_ES/champion/';
var splash_url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
var passive_url = 'http://ddragon.leagueoflegends.com/cdn/12.8.1/img/passive/';
var spell_url = 'http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/';
var video_url = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/'

function activeButton(select) {
    const passiveContainer = document.querySelector('#passiveContainer');
    const qContainer = document.querySelector('#qContainer');
    const wContainer = document.querySelector('#wContainer');
    const eContainer = document.querySelector('#eContainer');
    const rContainer = document.querySelector('#rContainer');
    const buttonPassive = document.querySelector('#passive')
    const buttonQ = document.querySelector('#q')
    const buttonW = document.querySelector('#w')
    const buttonE = document.querySelector('#e')
    const buttonR = document.querySelector('#r')

    if(select === "passive") {
        buttonPassive.className = "button__abiityes btnActive"
        buttonQ.className = "button__abiityes"
        buttonW.className = "button__abiityes"
        buttonE.className = "button__abiityes"
        buttonR.className = "button__abiityes"
        
        passiveContainer.className = "spell__container active"
        qContainer.className = "spell__container"
        wContainer.className = "spell__container"
        eContainer.className = "spell__container"
        rContainer.className = "spell__container"
    }else if(select === "q") {
        buttonPassive.className = "button__abiityes"
        buttonQ.className = "button__abiityes btnActive"
        buttonW.className = "button__abiityes"
        buttonE.className = "button__abiityes"
        buttonR.className = "button__abiityes"

        passiveContainer.className = "spell__container"
        qContainer.className = "spell__container active"
        wContainer.className = "spell__container"
        eContainer.className = "spell__container"
        rContainer.className = "spell__container"
    }else if(select === "w") {
        buttonPassive.className = "button__abiityes"
        buttonQ.className = "button__abiityes"
        buttonW.className = "button__abiityes btnActive"
        buttonE.className = "button__abiityes"
        buttonR.className = "button__abiityes"
        
        passiveContainer.className = "spell__container"
        qContainer.className = "spell__container"
        wContainer.className = "spell__container active"
        eContainer.className = "spell__container"
        rContainer.className = "spell__container"
    }else if(select === "e") {
        buttonPassive.className = "button__abiityes"
        buttonQ.className = "button__abiityes"
        buttonW.className = "button__abiityes"
        buttonE.className = "button__abiityes btnActive"
        buttonR.className = "button__abiityes"
        
        passiveContainer.className = "spell__container"
        qContainer.className = "spell__container"
        wContainer.className = "spell__container"
        eContainer.className = "spell__container active"
        rContainer.className = "spell__container"
    }else if(select === "r") {
        buttonPassive.className = "button__abiityes"
        buttonQ.className = "button__abiityes"
        buttonW.className = "button__abiityes"
        buttonE.className = "button__abiityes"
        buttonR.className = "button__abiityes btnActive"
        
        passiveContainer.className = "spell__container"
        qContainer.className = "spell__container"
        wContainer.className = "spell__container"
        eContainer.className = "spell__container"
        rContainer.className = "spell__container active"
    }
    
}

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
        var {allytips, enemytips, key, lore, name, passive, skins, spells, stats, tags, title} = data[0][1]
        var splashImg = data[0][0];
        console.log(data[0])
        return (
            <React.Fragment>
            <div className="champ__detail__background" style={
                {
                backgroundImage:`url(${splash_url}${splashImg}_0.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                }}>
            </div>
            
            <div className="champ__detail__container">
                <div className="champ__detail" style={
                        {
                            backgroundImage: `url(${splash_url}${splashImg}_0.jpg)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                        }}>
                    <div className="champ__detail__overview">
                        <div className="detail__name">
                            <h1>{name}</h1>
                            <h2>{title}</h2>
                        </div>
                    
                        <div className="detail__tags">
                            {getRolImg(tags)}
                        </div>
    
                        <div className="detail__lore">
                            <h3>{lore}</h3>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="champ__abilitys">
                <div className="abilityes__container">
                        <div>
                            <h1>HABILIDADES</h1>
                        </div>
    
                        <div className="abilityes__img">
                            <button className="button__abiityes btnActive" id="passive" onClick={() => activeButton("passive")}>
                                <img alt={passive.name} src={`${passive_url}${passive.image.full}`}/>
                            </button>
                            
                            <button className="button__abiityes" id="q" onClick={() => activeButton("q")}>
                                <img alt={`${spells[0].id}: ${spells[0].name}`} src={`${spell_url}${spells[0].image.full}`}/>
                            </button>

                            <button className="button__abiityes" id="w" onClick={() => activeButton("w")}>
                                <img alt={`${spells[1].id}: ${spells[1].name}`} src={`${spell_url}${spells[1].image.full}`}/>
                            </button>

                            <button className="button__abiityes" id="e" onClick={() => activeButton("e")}>
                                <img alt={`${spells[2].id}: ${spells[2].name}`} src={`${spell_url}${spells[2].image.full}`}/>
                            </button>

                            <button className="button__abiityes" id="r" onClick={() => activeButton("r")}>
                                <img alt={`${spells[3].id}: ${spells[3].name}`} src={`${spell_url}${spells[3].image.full}`}/>
                            </button>
                        </div>
    
                        <div className="abilityes__spells" >
                            <div className="spell__container active" id="passiveContainer">
                                <div className="spell__container__info">
                                    <p>PASIVA</p>
                                    <h2>{passive.name}</h2>
                                    <div className="spell__container__info__desc">
                                        <p>{passive.description}</p>
                                    </div>
                                </div>
                                    
                                <div className="spell__container__video">
                                    <video src={`${video_url}0${key}/ability_0${key}_P1.webm`} loop controls autoPlay muted></video>
                                </div>
                            </div>

                            <div className="spell__container" id="qContainer">
                                <div className="spell__container__info">
                                    <p>ACTIVA : Q</p>
                                    <h2>{spells[0].name}</h2>
                                    <div className="spell__container__info__desc">
                                        <p>{spells[0].description}</p>
                                        <p>{`Rango por nivel: ${spells[0].range}`}</p>
                                        <p>{`Costo por nivel: ${spells[0].cost}`}</p>
                                        <p>{`Enfriamiento por nivel: ${spells[0].cooldown}`}</p>
                                    </div>
                                </div>
                                    
                                <div className="spell__container__video">
                                    <video src={`${video_url}0${key}/ability_0${key}_Q1.webm`} loop controls autoPlay muted></video>
                                </div>
                            </div>

                            <div className="spell__container" id="wContainer">
                                <div className="spell__container__info">
                                    <p>ACTIVA : W</p>
                                    <h2>{spells[1].name}</h2>
                                    <div className="spell__container__info__desc">
                                        <p>{spells[1].description}</p>
                                        <p>{`Rango por nivel: ${spells[1].range}`}</p>
                                        <p>{`Costo por nivel: ${spells[1].cost}`}</p>
                                        <p>{`Enfriamiento por nivel: ${spells[1].cooldown}`}</p>
                                    </div>
                                </div>
                                    
                                <div className="spell__container__video">
                                    <video src={`${video_url}0${key}/ability_0${key}_W1.webm`} loop controls autoPlay muted></video>
                                </div>
                            </div>

                            <div className="spell__container" id="eContainer">
                                <div className="spell__container__info">
                                    <p>ACTIVA : E</p>
                                    <h2>{spells[2].name}</h2>
                                    <div className="spell__container__info__desc">
                                        <p>{spells[2].description}</p>
                                        <p>{`Rango por nivel: ${spells[2].range}`}</p>
                                        <p>{`Costo por nivel: ${spells[2].cost}`}</p>
                                        <p>{`Enfriamiento por nivel: ${spells[2].cooldown}`}</p>
                                    </div>
                                </div>
                                    
                                <div className="spell__container__video">
                                    <video src={`${video_url}0${key}/ability_0${key}_E1.webm`} loop controls autoPlay muted></video>
                                </div>
                            </div>

                            <div className="spell__container" id="rContainer">
                                <div className="spell__container__info">
                                    <p>ACTIVA : R</p>
                                    <h2>{spells[3].name}</h2>
                                    <div className="spell__container__info__desc">
                                        <p>{spells[3].description}</p>
                                        <p>{`Rango por nivel: ${spells[3].range}`}</p>
                                        <p>{`Costo por nivel: ${spells[3].cost}`}</p>
                                        <p>{`Enfriamiento por nivel: ${spells[3].cooldown}`}</p>
                                    </div>
                                </div>
                                    
                                <div className="spell__container__video">
                                    <video src={`${video_url}0${key}/ability_0${key}_R1.webm`} loop controls autoPlay muted></video>
                                </div>
                            </div>
                        </div>

                        {/* <div className="skin__container">
                            <div className="skin__select__container__filter">

                            </div>
                            <div className="skin__select__container">
                                <h1>ASPECTOS</h1>
                                <div className="carousel">
                                    {console.log(skins)}
                                    {skins.map(skin => {
                                        let skinID = skin.id;
                                        skinID = skinID.replace(`${key}00`, '_')
                                        skinID = skinID.replace(`${key}0`, '_')
                                        console.log(skinID)
                                        return(
                                            <div key={skin.id}>   
                                                <button><img src={`${splash_url}${name}${skinID}.jpg`} /></button>
                                                <p>{skin.name}</p>
                                        </div>
                                        )
                                    })}  
                                </div>
                            </div>
                            
                        </div> */}
                </div>
            </div>
            </React.Fragment>
        )
    }

    
}

export {Champ};