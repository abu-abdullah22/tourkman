import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Update = () => {
    const {user} = useContext(AuthContext) ;
    const [Name, setName] = useState('') ;
    const [Email, setEmail] = useState('');

   useEffect(()=> {
    if(user) {
        setName(user.displayName);
        setEmail(user.email) ;
    }
   },[user])

    const spot = useLoaderData() ;
    const {spotName, country, location, cost, season, time, visitors, description, name, email, photo, _id} = spot ;

    const handleUpdate = e => {
        e.preventDefault() ;


        const form = e.target ;
        const spotName = form.spotName.value ;
        const country = form.country.value ;
        const location = form.location.value ;
        const cost = form.cost.value ;
        const season = form.season.value ;
        const time = form.time.value ;
        const visitors = form.visitors.value ;
        const description = form.description.value ;
        const photo = form.photo.value ;
        // const name = form.name.value ;
        // const email = form.email.value ;

        const updatedSpot = {spotName, country, location, cost, season, time, visitors, description, name, email, photo} ;

        fetch(`http://localhost:5000/spots/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success', 
                    text : 'Spot Updated',
                    icon: 'success',
                    confirmButtonText: 'Close' ,
                }
                )
            }
        }) 
    }


    return (
        <div className="my-12">
            <h2 className="text-4xl text-center my-12 italic">Update Spot Informations</h2>
            <form className=" p-5" onSubmit={handleUpdate}>
                {/* spot and country */}
                <div className="md:flex gap-4">
                    <div className="form-contro w-1/2">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={spotName} name="spotName" placeholder="Spot Name" className="input input-bordered md:w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={country} name="country" placeholder="Country" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                {/* Location and Cost */}
                <div className="md:flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" defaultValue={location} className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="Cost" defaultValue={cost} className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                {/* Season and time */}
                <div className="md:flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Season</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="season" placeholder="Summer/Winter" defaultValue={season} className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={time} name="time" placeholder="7 days" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                {/* Total visitors and description */}
                <div className="md:flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="visitors" placeholder="10,000" defaultValue={visitors} className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" defaultValue={description} className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                {/* Name and Email */}
                <div className="md:flex gap-4">

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="Name" defaultValue={Name} className="input input-bordered w-full" data-tooltip-id="my-tooltip" data-tooltip-content="You can't change it" readOnly />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={Email} name="email" placeholder="Email" className="input input-bordered w-full" data-tooltip-id="my-tooltip" data-tooltip-content="You can't change it" readOnly />
                        </label>

                    </div>

                </div>
                {/* photo url */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-block mt-8" />
            </form>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Update;