import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [vistedflags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    const  handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries)
    };
    const handleVisitedFlag  = (flag) => {
        const newVisitedFleags = [...vistedflags, flag];
        setVisitedFlags(newVisitedFleags)
    }
    
    return (
        <div>
            <div className="visiteFlag-container">
                <h2>Visited Flags:</h2>
                {
                    vistedflags.map(flag => <img src={flag} alt="" />)
                }
            </div>
            <div>
               <h4> Visited Countries:{visitedCountries.length}</h4>
               {
                visitedCountries.map((country, idx) => <li key={idx}>{country.name.common}</li>)
               }
            </div>
           <h2>Countries {countries.length}</h2> 
           <div className="country-container">
           {
            countries.map(country => <Country
                handleVisitedFlag = {handleVisitedFlag}
                handleVisitedCountry={handleVisitedCountry}
                 key={country.cca2}
                country={country}>
                </Country>)
           }
           </div>
        </div>
    );
};

export default Countries;