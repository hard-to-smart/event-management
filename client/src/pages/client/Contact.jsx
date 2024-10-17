import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="py-24 mx-auto">
      <div className=" max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="Contact Us section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold absolute top-10 left-10">
                  Contact Us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <a href="tel:470-601-1911" className="flex items-center mb-6">
                      <FiPhoneCall size={30} className="text-[#874E4C]" />
                      <h5 className="text-black text-base font-normal ml-5">470-601-1911</h5>
                    </a>
                    <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-6">
                      <FiMail size={30} className="text-[#874E4C]" />
                      <h5 className="text-black text-base font-normal ml-5">Pagedone1234@gmail.com</h5>
                    </a>
                    <a href="https://goo.gl/maps/location" className="flex items-center">
                      <FiMapPin size={30} className="text-[#874E4C]" />
                      <h5 className="text-black text-base font-normal ml-5">
                        654 Sycamore Ave, Meadowville, WA
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl shadow-lg">
            <h2 className="text-[#EABCAC] font-manrope text-4xl font-semibold mb-11">Send Us A Message</h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <textarea
              className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 pt-2 mb-10"
              placeholder="Write your message"
            />
            <button className="w-full h-12 text-lg text-white bg-[#874E4C] font-normal leading-7 rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
