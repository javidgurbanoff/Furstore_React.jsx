import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative transform transition-all duration-300 ease-out scale-100 opacity-100"
            style={{ animation: 'fadeInScale 0.4s ease-out forwards' }} 
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <AiOutlineClose className="text-xl" /> 
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Our Store!</h2>
            <p className="text-center text-gray-600 mb-6">
              Sign up for our newsletter and get 10% off your first purchase.
            </p>

            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 mb-4 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeModal;
