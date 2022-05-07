import React from "react";
import Fighter from '../images/roles/Fighter.svg';
import Marksman from '../images/roles/Marksman.svg';
import Support from '../images/roles/Support.svg';
import Tank from '../images/roles/Tank.svg';
import Mage from '../images/roles/Mage.svg';
import Assassin from '../images/roles/Assassin.svg';

function img(role){
    if (role === "Fighter") {
        return Fighter
    }else if (role === "Marksman") {
        return Marksman
    }else if (role === "Tank") {
        return Tank
    }else if (role === "Support") {
        return Support
    }else if (role === "Mage") {
        return Mage
    }else if (role === "Assassin") {
        return Assassin
    }
}

function getRolImg (tags) {
    var principalRole;
    var secondaryRole;

    if(tags !== undefined) {

        if(tags.length >= 2) {
            principalRole = tags[0];
            secondaryRole = tags[1];
    
            return (
                <div className="rol__container">
                    <div>
                        <img alt={principalRole} src={img(principalRole)}/>
                        <p>Rol principal</p>
                        <p>{principalRole}</p>
                    </div>
                    <div>
                        <img alt={secondaryRole} src={img(secondaryRole)}/>
                        <p>Rol Secundario</p>
                        <p>{secondaryRole}</p>
                    </div>
                </div>
            )
        }else if(tags.length === 1){
            principalRole = tags[0];
            
            return (
                <div className="rol__container"> 
                    <div>
                        <img alt={principalRole} src={img(principalRole)}/>
                        <p>Rol principal</p>
                        <p>{principalRole}</p>
                    </div>
                </div>
            )
        }
    }
}

export {getRolImg};