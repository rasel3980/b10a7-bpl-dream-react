import SubscribeNewsletter from '../SubscribeNewsletter/SubscribeNewsletter';
const Footer = () => {
    return (
        <div>
            <div className=''>
            <SubscribeNewsletter></SubscribeNewsletter>
            </div>

            <footer className="relative footer bg-[#06091A] text-white p-10">
                <div>
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate <br />
                     team dedicated to providing the best services to our customers.</p>
                </div>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>

                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" 
                            />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
              
            </footer>
            <hr />
                <p className=" bg-[#06091A] text-white p-10 text-center">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
