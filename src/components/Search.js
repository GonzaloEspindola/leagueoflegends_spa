import React from "react";

function Search({searchValue, setSearchValue}) {

    //detecto cambios y cambio el estado con el valor del input
    const searchChampion = (event) => {
        const search = event.target.value
        setSearchValue(search)
    }

    return (
        <input type="text" placeholder="Search a champion..." onChange={searchChampion}></input>
    )
}

export {Search};