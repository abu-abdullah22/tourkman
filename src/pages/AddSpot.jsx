import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'

const AddSpot = () => {
    const {user} = useContext(AuthContext) ;
    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('');

   useEffect(()=> {
    if(user) {
        setName(user.displayName);
        setEmail(user.email) ;
    }
   },[user])

    const handleAddSpot = e => {
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

        const spotAdded = {spotName, country, location, cost, season, time, visitors, description, name, email, photo} ;
        // console.log(spotAdded);


        //sending to the server
        fetch('http://localhost:5000/spots', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(spotAdded)
        })
        .then(res=> res.json()) 
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })

    }
    return (
        <div className="my-12">
            <form className="bg-[#F4F3F0] p-5" onSubmit={handleAddSpot}>
                {/* spot and country */}
                <div className="md:flex gap-4">
                    <div className="form-contro w-1/2">
                        <label className="label">
                            <span className="label-text">Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spotName" placeholder="Spot Name" className="input input-bordered md:w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" placeholder="Country" className="input input-bordered w-full" />
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
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder="Cost" className="input input-bordered w-full" />
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
                            <input type="text" name="season" placeholder="Summer/Winter" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="7 days" className="input input-bordered w-full" />
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
                            <input type="text" name="visitors" placeholder="10,000" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
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
                            <input type="text" name="userName" placeholder="Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={email} name="email" placeholder="Email" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                <input type="submit" value="Add Spot" className="btn btn-block mt-8" />
            </form>
        </div>
    );
};

export default AddSpot;