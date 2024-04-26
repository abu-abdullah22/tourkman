const AddSpot = () => {
    return (
        <div className="my-12">
            <form className="bg-[#F4F3F0] p-5">
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

                {/* Total visitors and description */}
                <div className="md:flex gap-4">

                <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="Name" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
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