import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const { email } = useParams();
    const [spots, setSpots] = useState([]);
    // console.log(email);


    useEffect(() => {

        fetch(`http://localhost:5000/email/${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch spots');
                }
                return response.json();
            })
            .then(data => {
                setSpots(data) ;
                // console.log(data);
            })
            .catch(error => {
                console.error('Error fetching spots:', error);
            });
    }, [email])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/email/${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })


                            const remaining = spots.filter(spot => spot._id !== _id);
                            setSpots(remaining);
                        }
                    })
            }
        });
    }

    return (
      <div className="h-[70vh] my-20">
        <h2 className="text-4xl text-center my-12 italic">My List </h2>
          <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Time</th>
                        <th>Average Cost</th>
                        <th>Update</th>
                        <th> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        spots?.map(spot =>
                            <tr key={spot._id}>
                                <th>{spot.spotName}</th>
                                <td>{spot.location}, {spot.country}</td>
                                <td>{spot.time}</td>
                                <td>{spot.cost}</td>
                                <td>
                                    <Link to={`/update/${spot._id}`}> <button className="btn">Update</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(spot._id)} className="btn">X</button>
                                </td>
                                

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
      </div>
    );
};

export default MyList;