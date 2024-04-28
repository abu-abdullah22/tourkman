import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([]) ;

    useEffect(()=> {
        fetch('https://tourism-management-server-orpin.vercel.app/countries')
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            setCountries(data) ;
        })
    })
    return (
        <div>
            <div>
            <h2 className="text-4xl text-center my-12 italic">Countries</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto">
                {
                    countries.map(country => (
                        <div key={country._id}>
                     <Link to={`/countries/${country.country_name}`}>
                     <div className="card card-side shadow-xl md:w-[500px] md:h-[400px] h-[300px] italic hover:scale-105 hover:cursor-pointer">
            <figure><img src={country.flag_url} alt="spot" className="md:w-full md:h-full w-[300px] h-[300px] object-cover" /></figure>
            <div className="card-body bg-base-100">
                <h2 className="card-title">{country.country_name}</h2>
                <p>{country.description}</p>
            </div>
        </div>
                     </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;