import React from "react";

function Filter ({searchedChampion}) {

    var tags = [
        "Fighter",
        "Tank",
        "Mage",
        "Assassin",
        "Marksman",
        "Support",
    ]

    let display;

    if(searchedChampion.length != 0 ) {
        display = tags.map(tag => {
            return (
                <div className="filter__item" key={tag}>
                    <input id={tag} type="checkbox" disabled></input>
                    <label htmlFor={tag}>{tag}</label>
                </div>
            )
        })
        
    }

    return <>
        <div className="filter__container">
            <h3>Total champs: {searchedChampion.length}</h3>
            <div className="filter__buttons">
                <h4>Filter by: (disabled for now)</h4>
                {display}
            </div>
        </div>
    </>
}

export {Filter};