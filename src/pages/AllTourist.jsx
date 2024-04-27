import { useLoaderData } from "react-router-dom";
import TouristSpots from "../components/TouristSpots";


const AllTourist = () => {
    const spots = useLoaderData() ;
    return (
            <div>
                <h2 className="text-4xl text-center my-12 italic">All Tourist Spots </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto">
                    {spots.map(spot => <TouristSpots key={spot._id} spot={spot}></TouristSpots>)}
                </div>
            </div>
        
    );
};

export default AllTourist;