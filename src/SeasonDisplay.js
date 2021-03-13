import React from 'react';
import './estiloclima.css';

const configSeason = {
    summer:{
        text:'Vamos a la playa!!',
        season:'summer'
    },
    winter:{
        text:'uff que frio',
        season:'winter' 
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'winter': 'summer';
    }else{
        return (lat < 0) ?'summer':'winter';
    }
}

const SeasonDisplay = (props) =>{
    const Gseason = getSeason(props.lat, new Date().getMonth());
    console.log(Gseason);
    return(
        <div className={'season'}><i className={'sun outline icon'}></i>{Gseason==='summer'?configSeason.summer.season:configSeason.winter.season}<i className={'sun outline icon'}></i></div>
    ) 
};

export default SeasonDisplay;