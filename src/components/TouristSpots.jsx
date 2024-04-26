const TouristSpots = ({ spot }) => {
    const { spotName, country, location, cost, season, time, visitors, description, name, email, photo } = spot;


    return (
        <div className="card card-side shadow-xl w-[500px] h-[400px] italic">
            <figure><img src={photo} alt="spot" className="w-[300px] h-[400px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{spotName}</h2>
                <p>{location}</p>
                <p>Average Cost: {cost}</p>
                <p>{time}</p>
                <div className="card-actions">
                    <button className="btn">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;