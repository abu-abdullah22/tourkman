import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { country } = useParams();
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
            })
            .catch(error => {
                console.error('Error fetching spots:', error);
            });
    }, [country]);

    return (
        <div className="my-8 mx-4 lg:h-[70vh]">
            {countries.length > 0 ? (
                <div>
                    <h2 className="text-4xl text-center my-12 italic">Spots By Country</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 mx-auto">
                        {countries.map(country => (
                            <div key={country._id}>
                                <div className="card card-side shadow-xl h-full hover:scale-105 hover:cursor-pointer">
                                    <figure>
                                        <img src={country.photo} alt="spot" className="w-full h-[500px] object-cover" />
                                    </figure>
                                    <div className="card-body bg-base-100 p-4">
                                        <h2 className="card-title text-lg font-semibold mb-2"> {country.spotName}</h2>
                                        <p className="mb-2 font-bold">{country.location}, {country.country}</p>
                                        <p className="mb-2">{country.description}</p>
                                        <p className="mb-2"><span className="font-bold">Cost : </span> $ {country.cost}</p>
                                        <p className="mb-2"><span className="font-bold">Best time for visit :</span> {country.season}</p>
                                        <div className="card-actions">
                                            <Link to={`/details/${country._id}`}>
                                                <button className="btn bg-[#79A79A] hover:bg-[#80665F] text-white">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
               <div className="h-[80vh]">
                 <h2 className="text-4xl text-center my-12 italic">No spot added yet</h2>
               </div>
            )}
        </div>
    );
};

export default CountryDetails;
