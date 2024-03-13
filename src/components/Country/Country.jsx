import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    console.log(handleVisitedCountry);
   const {name, flags, region, population, area}  = country;
   const [visited, setVisited] = useState(false);
   const handleVisited = () => {
     setVisited(!visited)
   }
    return (
        <div className={`country ${visited && 'visited' }`}>
            <h3 style={{color: visited? 'black' : 'grey'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Visit Flag</button>
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visit Countries</button>
            <br/>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited? 'i have visited this country' : 'i want to visit this country'}
        </div>
    );
};

export default Country;