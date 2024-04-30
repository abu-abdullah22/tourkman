
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const spots = useLoaderData();
    // console.log(spots);
    const spot = spots.find(spot => spot._id === id);
    // console.log(spot);
    const {spotName, country, location, cost, season, time, visitors, description, photo, name, email} = spot ;


    return (
        <div className="hero min-h-[60vh] mt-40 md:mt-20 bg-base-200">
            <Helmet><title>Spot Details</title></Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg  shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold italic">{spotName}</h1>
                    <h2 className="text-2xl italic" >{location} , {country} </h2>
                    <p className="py-6">{description}</p>

                    <div className="flex gap-10">
                        <p><span className="font-bold">Average Cost :</span> $ {cost} </p>
                        <p><span className="font-bold">Time:</span> {time}</p>
                    </div>

                    <div className="flex gap-10 mt-5 my-8">
                        <p><span className="font-bold">Best time for visit :</span> {season}</p>
                        <p><span className="font-bold">Visitors per year: </span>{visitors}</p>
                    </div>
                    <div>
                        <p> <span className="font-bold"> Added by </span>: <span >{name}</span></p>
                        <p ><span className="font-bold">Email</span>: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;