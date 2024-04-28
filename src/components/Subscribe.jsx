import Lottie from "lottie-react";
import Animation from '../assets/Animation.json'

const Subscribe = () => {
    return (
        <section className="py-6 dark:bg-gray-300 dark:text-gray-900 my-20 border-y-2 border-[#99857F]">
             <h2 className="text-4xl text-center my-12 italic">Hit the Subscribe and Stay Connected</h2>
             <p className="text-center text-xl">To get notifications of our events and updates</p>
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-around lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
                <Lottie className="w-[300px]" animationData={Animation} />
            </div>
            <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                <div className="flex flex-row">
                    <input type="text" placeholder="@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50 btn">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Subscribe;