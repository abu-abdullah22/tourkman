import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristSpots from "../components/TouristSpots";

const Home = () => {
    const spots = useLoaderData();
    // console.log(spots);
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl text-center my-12">Tourist Spots </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto">
                    {spots.map(spot => <TouristSpots key={spot._id} spot={spot}></TouristSpots>)}
                </div>
            </div>
        </div>
    );
};

export default Home;