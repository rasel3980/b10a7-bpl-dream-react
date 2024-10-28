import SubscribeNewsletter from '../SubscribeNewsletter/SubscribeNewsletter';
import logo from '../../../assets/logo.png';
const Footer = () => {
    return (
        <div className="relative bg-[#06091A] text-white">
            
            <div className="absolute  z-50 w-full">
                <SubscribeNewsletter/>
            </div>

            <div  className='flex items-center justify-center'>
                    <img className='pt-40 w-36' src={logo} alt="" />
                </div>
            <footer className=" flex justify-around relative z-10">
                
                <div>
                    <h6 className="footer-title text-lg font-semibold mb-2">About Us</h6>
                    <div className='w-5/12'>
                    <p className="text-sm w-48 text-gray-300">
                        We are a passionate team sp dedicated to providing the best services to our customers.
                    </p>
                    </div>
                </div>

                
                <nav>
                    <h6 className="footer-title text-lg font-semibold mb-2">Quick Links</h6>
                    <ul className="space-y-1 text-gray-300">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                
                <form>
                    <h6 className="footer-title text-lg font-semibold mb-2">Subscribe</h6>
                    <fieldset className="form-control w-full max-w-xs">
                        <p className="text-sm py-4 text-gray-300">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered flex-1 px-3 py-2 rounded-md"
                            />
                            <button className="btn btn-primary px-4 py-2 rounded-md">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
          
            <hr className="border-t border-gray-700 my-6" />
            <p className="text-center p-4 text-gray-400">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
