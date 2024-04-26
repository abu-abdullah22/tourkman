import { Link } from "react-router-dom";

const TouristSpots = ({ spot }) => {
    const { spotName, country, location, cost, season, time, visitors, description, name, email, photo, _id } = spot;
   


    return (
        <div className="card card-side shadow-xl md:w-[500px] md:h-[400px] h-[300px] italic">
            <figure><img src={photo} alt="spot" className="md:w-[300px] md:h-[400px] w-[300px] h-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{spotName}</h2>
                <p>{location}</p>
                <p>Average Cost: {cost}</p>
                <p>{time}</p>
                <div className="card-actions">
                   <Link to={`/details/${_id}`}>  <button  className="btn">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;