import assets from '../../../assets/bg-shadow.png'
const SubscribeNewsletter = () => {
    return (
        <section style={{ backgroundImage: `url(${assets})` }} className="py-12 px-10 md:px-0 text-center mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">
                Get the latest updates and exclusive offers directly in your inbox.
            </p>

            <form className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="input w-full md:w-auto flex-1 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="btn bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default SubscribeNewsletter;
