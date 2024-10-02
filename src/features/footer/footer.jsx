import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-black">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-black">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-black">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
             <img className='cursor-pointer' src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-2-7_250x.png?v=1696490455" alt="" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
              Do not forget to use <strong></strong>  promo cod to get extra 15% discount
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>© 2023 Vinova Furstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
