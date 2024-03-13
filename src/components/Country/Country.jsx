import './Country.css'
const Country = ({country}) => {
    console.log(country);
   const {name, flags, region, population, area}  = country;
    return (
        <div className="country">
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;