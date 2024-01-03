import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        
    },[])
    const [visitedCountry,setVisitedCountry]=useState([])
    const [visitedFlag,setVisitedFlag]=useState([])
    const handleVisitedCountry=country=>{
        console.log('set visited country');
        // console.log(country);
        const newVisitedCountry=[...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
    }
    const handleVisitFlag=flag=>{
       const newFlag=[...visitedFlag,flag];
       setVisitedFlag(newFlag)
    }
    return (
        <div>
            <h2>I also love me {countries.length}</h2>
            <div>
                <h3>Visited Countries {visitedCountry.length}</h3>
                <ul>
                    {
                        visitedCountry.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="">
                {
                    visitedFlag.map((flag,idx)=><img key={idx} src={flag}></img>)
                }

            </div>
            <div className="fuck">
            {
                countries.map(country=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitFlag={handleVisitFlag} countrysss={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;