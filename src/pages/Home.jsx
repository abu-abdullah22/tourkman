import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import TouristSpots from "../components/TouristSpots";
import Faq from "../components/Faq";



const Home = () => {
    const spots = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h2 className="text-4xl text-center my-12">Tourist Spots </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-5 mx-3 lg:container lg:mx-auto bg-[url('/public/banner4.jpg')] bg-bottom p-3 rounded-lg">
                    {spots.slice(0, 6).map(spot => <TouristSpots key={spot._id} spot={spot}></TouristSpots>)}
                </div>
            </div>
            <div className="my-20">
           <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;