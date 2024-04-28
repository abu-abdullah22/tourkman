import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TouristSpots = ({ spot }) => {
    const { spotName, location, cost, time, photo, _id } = spot;
   


    return (
        <div className="card card-side shadow-xl md:w-[500px] md:h-[400px] h-[300px] italic hover:scale-105 hover:cursor-pointer">
            <figure><img src={photo} alt="spot" className="md:w-[300px] md:h-[400px] w-[300px] h-[300px]" /></figure>
            <div className="card-body bg-base-100">
                <h2 className="card-title">{spotName}</h2>
                <p><span className="font-bold">{location}</span></p>
                <p><span className="font-bold"> Average Cost :</span> $ {cost}</p>
                <p><span className="font-bold">For :</span> {time}</p>
                <div className="card-actions">
                   <Link to={`/details/${_id}`}>  <button  className="btn bg-[#79A79A] hover:bg-[#80665F] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;
TouristSpots.propTypes = {
    spot: PropTypes.object
}