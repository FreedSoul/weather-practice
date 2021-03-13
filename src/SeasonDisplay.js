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
        return (lat < 0) ? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props) =>{
    const Gseason = getSeason(props.lat, new Date().getMonth());
    const resultSeason = Gseason==='summer'? configSeason.summer.season : configSeason.winter.season
    const SeasonComment =  Gseason==='summer'? configSeason.summer.text : configSeason.winter.text
    return(
        <div className={`season ${Gseason}`}>
            <i className={'sun outline icon'}></i>
            {resultSeason}
            <i className={'sun outline icon'}></i>
            <div>
            {SeasonComment}    
            </div>
        </div>
    ) 
};

export default SeasonDisplay;