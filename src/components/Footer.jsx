import React from 'react';

function Footer() {
  return (
    <div className="bg-cover bg-center p-10 mt-5" style={{ backgroundImage: "url('src/assets/footer.jpeg')" }}>
      <div className="max-w-screen-xl mx-auto text-white">
        <div className="flex flex-col md:flex-row justify-between">
        
          <div className="mb-8 md:mb-0 w-56">
            <h3 className="font-bold text-lg">ABOUT 'GEECOM INDIA'</h3>
            <p className="mt-4">
              We are a Win-Win E-commerce platform that will uplift, empower, and transform millions of lives of Indian Farmers and people in Rural India.
            </p>
          </div>

          
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cancellation & Return Policy</li>
              <li>Refund Policy</li>
              <li>Payment Terms</li>
              <li>FAQ</li>
            </ul>
          </div>

         
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg">PAGES</h3>
            <ul className="mt-4 space-y-2">
              <li>Shop Now</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
            <div className="mt-4">
              <img src="src/assets/googlePlay.png" alt="Google Play" className="w-32" />
            </div>
          </div>

     
          <div>
            <h3 className="font-bold text-lg">SUBSCRIBE</h3>
            <p className="mt-4">Subscribe here for the latest news about GeeCom India</p>
            <div className="flex mt-4">
              <input type="email" placeholder="Enter your email" className="bg-transparent p-2 rounded-l-md focus:outline-none" />
              <button className="bg-[#8ec53e] p-2 rounded-r-md">
                <svg xmlns="" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          Copyright © 2024. All Rights Reserved. Recreated by Ayush Rawal 
        </div>
      </div>
    </div>
  );
}

export default Footer;
