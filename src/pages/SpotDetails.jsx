
import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const { id } = useParams();
    console.log(id);
    
    const spots = useLoaderData() ;
    console.log(spots);
    const spot = spots.find(spot => spot._id === id) ;
    console.log(spot);


    return (
        <div>
            {spot.name}
        </div>
    );
};

export default SpotDetails;