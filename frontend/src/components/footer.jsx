import React from "react";
import {assets} from "../assets/assets_frontend/assets.js";

const footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*------------Left Section Footer-----------------*/}
        <div>
          <img classN src={assets.logo} alt='Logo' className='mb-5 w-40' />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/*----------Center Section Footer-----------------*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*------------Right Section Footer-----------------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 789456321</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*-------Copyright Section Footer-----------------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center"> © 2026 Jaya Krishna. Built with passion.</p>
      </div>
    </div>
  );
};

export default footer;
