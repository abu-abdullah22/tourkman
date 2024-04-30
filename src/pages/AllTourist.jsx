import { useLoaderData } from "react-router-dom";
import TouristSpots from "../components/TouristSpots";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const AllTourist = () => {
    const defaultSpots = useLoaderData();
    const [sortedSpots, SetSortedSpots] = useState([]);
    const [sortOption, setSortOption] = useState('default');

    useEffect(() => {
        SetSortedSpots(defaultSpots);
    }, [defaultSpots]);

    const handleSortSpot = (option) => {
        let sortedData = [];
        switch (option) {
            case 'cost':
                sortedData = defaultSpots.slice().sort((a, b) => a.cost - b.cost);
                break;
            case 'cost-desc':
                sortedData = defaultSpots.slice().sort((a, b) => b.cost - a.cost);
                break;
            default:
                sortedData = defaultSpots;
                break;
        }
        SetSortedSpots(sortedData);
        setSortOption(option);
    }
    return (
        <div>
            <Helmet><title>All Tourist Spot</title></Helmet>
            <h2 className="text-4xl text-center my-12 italic">All Tourist Spots </h2>
            <details className="dropdown mt-12">
                <summary className="m-1 btn bg-[#5489C8] text-white hover:bg-[#E46D30]"> {sortOption === 'cost' ? 'Cost' : 'Default'}</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                        <button onClick={() => handleSortSpot('default')}>Default</button>
                    </li>
                    <li>
                        <button onClick={() => handleSortSpot('cost')}>Cost (Low to High)</button>
                    </li>
                    <li>
                        <button onClick={() => handleSortSpot('cost-desc')}>Cost (High to Low)</button>
                    </li>
                </ul>
            </details>
            <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto my-12">
                {sortedSpots.map(spot => <TouristSpots key={spot._id} spot={spot}></TouristSpots>)}
            </div>
        </div>

    );
};

export default AllTourist;