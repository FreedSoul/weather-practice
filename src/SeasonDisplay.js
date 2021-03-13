import React from 'react';
import './estiloclima.css';

const configSeason = {
    summer:{
        text:'Vamos a la playa!!',
        season:'summer',
        icon: 'sun'
    },
    winter:{
        text:'uff que frio',
        season:'winter',
        icon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return (lat > 0) ? 'winter ': 'summer ';
    }else{
        return (lat < 0) ? 'summer ' : 'winter ';
    }
}

const SeasonDisplay = (props) =>{
    const Gseason = getSeason(props.lat, new Date().getMonth());
    const resultSeason = Gseason==='summer'? configSeason.summer.season : configSeason.winter.season
    const SeasonComment =  Gseason==='summer'? configSeason.summer.text : configSeason.winter.text
    const SeasonIcon =  Gseason==='summer'? configSeason.summer.icon : configSeason.winter.icon
    return(
        <div className={`season-display ${Gseason}`}>
            <i className={`${SeasonIcon} massive outline icon icon-left`}></i>
            {resultSeason}
            <i className={`${SeasonIcon} massive outline icon icon-right`}></i>
            <div>
            {SeasonComment}    
            </div>
        </div>
    ) 
};

export default SeasonDisplay;