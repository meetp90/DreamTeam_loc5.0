import React from "react";
import { Link } from "react-router-dom";

const Roles = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="bg-blue-200 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-bold">Assign Roles</h1>
            <Link to="/roleAdmin">
              <button class="ml-4 inline-flex  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Assign
              </button>
            </Link>
            <h1 className="font-bold">Visit As</h1>
            <div className="">
              <Link to="/manufacturer/manufacture">
                <button class="ml-4 inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Manufacturer
                </button>
              </Link>
              <Link to="/ThirdParty/allProducts">
                <button class="ml-4 inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Third Party
                </button>
              </Link>
              <Link to="/DeliveryHub/receive">
                <button class="ml-4 inline-flex  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Delivery Hub
                </button>
              </Link>
              <Link to="/Customer/buy">
                <button class="ml-4 inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Customer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roles;
