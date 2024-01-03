import { useState } from 'react';
import './Country.css'

const Country = ({countrysss,handleVisitedCountry,handleVisitFlag}) => {
    const{name,flags}=countrysss;
    const [visited,setVisited]=useState(false)
    const handleVisit=()=>{
        setVisited(!visited)
    }
    
    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
        
            <h3 >{name.common} </h3>
            <img src={flags.png} alt="" />
            <button onClick={()=>handleVisitedCountry(countrysss)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisitFlag(countrysss.flags.png)}>Add Flag</button>
            <br />
            <br />
            <button onClick={handleVisit}>{visited?'Visit':'Going'}</button>
            {
                visited ?'Its OK' : 'Erorr'
            }
        </div>
    );
};

export default Country;