
import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const spots = useLoaderData();
    // console.log(spots);
    const spot = spots.find(spot => spot._id === id);
    // console.log(spot);
    const {spotName, country, location, cost, season, time, visitors, description, photo} = spot ;


    return (
        <div className="hero min-h-[60vh] mb-32 mt-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold italic">{spotName}</h1>
                    <h2 className="text-2xl italic" >{location} , {country} </h2>
                    <p className="py-6">{description}</p>

                    <div className="flex gap-10">
                        <p>Average Cost : {cost} </p>
                        <p>Time: {time}</p>
                    </div>

                    <div className="flex gap-10 mt-5">
                        <p>Best time for visit : {season}</p>
                        <p>Visitors per year: {visitors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;