import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import Navbar from '../../component/Navbar';
export const Manufacture = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="bg-[#121113] p-8 px-16 flex flex-row justify-around">
        <img className="max-h-[500px]" />
        <div className="flex flex-col border-2 p-4 rounded-t-lg">
          <h1 className="text-3xl text-white font-bold mb-4">
            Add a Product
          </h1>
          <div>
            <input
              type="text"
              placeholder="Manufacturer Name"
              className="p-2 rounded mt-4"
              required
              name="manufacturerName"
              variant="outlined"
            //   value={manuForm.manufacturerName}
            //   onChange={handleChangeManufacturerForm}
            />
          </div>
          <input
            type="text"
            name="manufacturerDetails"
            className="p-2 rounded mt-4"
            variant="outlined"
            // value={manuForm.manufacturerDetails}
            // onChange={handleChangeManufacturerForm}
            placeholder="Manufacturer Details"
            style={{ width: "100%" }}
          />
          <input
            type="text"
            required
            className="p-2 rounded mt-4"
            name="manufacturerLongitude"
            variant="outlined"
            // value={manuForm.manufacturerLongitude}
            // onChange={handleChangeManufacturerForm}
            placeholder="Longitude"/>
          <input
           required
           type="text"
           className="p-2 rounded mt-4"
           name="manufacturerLatitude"
           variant="outlined"
        //    value={manuForm.manufacturerLatitude}
        //    onChange={handleChangeManufacturerForm}
           placeholder="Latitude"
          />
          <input
            type="text"
            required
            className="p-2 rounded mt-4"
            name="productName"
            variant="outlined"
            // value={manuForm.productName}
            // onChange={handleChangeManufacturerForm}
            placeholder="Product Name"
          />
          <input
             required
             name="productCode"
             className="p-2 rounded mt-4"
             variant="outlined"
            //  value={manuForm.productCode}
            //  onChange={handleChangeManufacturerForm}
             placeholder="Product Code"
          />
          <input
             required
             className="p-2 rounded mt-4"
            name="productPrice"
            variant="outlined"
            // value={manuForm.productPrice}
            // onChange={handleChangeManufacturerForm}
            label="Product Price"
          />
          <input
            required
            className="p-2 rounded mt-4"
            name="productCategory"
            variant="outlined"
            // value={manuForm.productCategory}
            // onChange={handleChangeManufacturerForm}
            placeholder="Product Category"
          />
          <button type="submit"
        //   onClick={handleSubmitManufacturerForm}
            className="text-white bg-[#244663] p-2 mt-8">
            Add Election
          </button>
        </div>
      </div>
    </div>
  )
}



export default Manufacture