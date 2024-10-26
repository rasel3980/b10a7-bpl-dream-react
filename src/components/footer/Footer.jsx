
const Footer = () => {
    return (
        <footer className="relative footer bg-[#06091A] text-white p-10">
  
    
    <div>
    <h6 className="footer-title">About Us</h6>
    We are a passionate team <br />
    dedicated to providing the best <br />
    services to our customers.
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
      <p>
      Subscribe to our newsletter for the latest <br />
       updates.
      </p>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <div className="absolute bottom-0 left-0 w-full border-t border-red-600"></div>
  <h1 className="flex justify-start">@2024 Your Company All Rights Reserved.</h1>
</footer>



 
    );
};

export default Footer;