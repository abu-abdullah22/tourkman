const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5"> How can I explore the Silk Road in Central Asia?</h3>
                        <p className="md:pl-0 md:col-span-7">The Silk Road is an ancient trade route that connected East and West, passing through Central Asia and showcasing its rich history and cultural heritage. To explore the Silk Road in Central Asia, consider visiting iconic cities such as Samarkand, Bukhara, and Khiva in Uzbekistan, which are renowned for their well-preserved Islamic architecture and historical monuments. </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What are the top outdoor activities to enjoy in Central Asia?</h3>
                        <p className="md:pl-0 md:col-span-7">Central Asia offers a wealth of outdoor activities for nature enthusiasts and adventure seekers alike. Some of the top outdoor activities to enjoy in the region include trekking in the Tien Shan and Pamir Mountains, where you can hike to alpine lakes, glaciers, and remote valleys. Cycling enthusiasts can explore the scenic landscapes and ancient ruins along the Pamir Highway or embark on multi-day bike tours through the Kyrgyz countryside. </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How can I experience the traditional culture of Central Asia?</h3>
                        <p className="md:pl-0 md:col-span-7">Central Asia is home to diverse cultures and vibrant traditions that date back centuries. To experience the traditional culture of the region, consider visiting local bazaars and markets in cities like Tashkent and Bishkek, where you can sample delicious cuisine, purchase handmade crafts, and interact with friendly locals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;