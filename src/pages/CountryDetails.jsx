import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { country } = useParams();
    console.log(country);
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/country/${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch spots');
                }
                return response.json();
            })
            .then(data => {
                setCountries(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching spots:', error);
            });
    }, [country])


    return (
        <div className="h-[70vh]">
            {countries.length > 0 ? <div>
                <h2 className="text-4xl text-center my-12 italic">Spots By Country</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto">
                    {
                        countries.map(country => (
                            <div key={country._id}>
                                <div className="card card-side shadow-xl md:w-[500px] md:h-[400px] h-[300px]  hover:scale-105 hover:cursor-pointer">
                                    <figure><img src={country.photo} alt="spot" className="md:w-[500px] md:h-[400px] w-[300px] h-[300px]" /></figure>
                                    <div className="card-body bg-base-100 ">
                                        <h2 className="card-title">{country.country}</h2>
                                        <p>{country.location}</p>
                                        <p>{country.description}</p>
                                        <p>Cost in USD : {country.cost}</p>
                                        <p>Best time for visit : {country.season}</p>
                                        <div className="card-actions">
                                            <Link to={`/details/${country._id}`}>  <button className="btn bg-[#79A79A] hover:bg-[#80665F] text-white">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div> : <h2 className="text-4xl text-center my-12 italic">No spot added yet</h2>}
        </div>
    );
};

export default CountryDetails;