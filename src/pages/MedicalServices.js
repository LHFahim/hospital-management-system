import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const MedicalServices = () => {
  const [medicalService, setMedicalService] = useState({});

  const handleMedicalServiceSubmit = event => {
    event.preventDefault();

    const form = event.target;
    // console.log('Inside handleMedicalServiceSubmit()');
    // console.log(form.serviceName.value);
    // console.log(form.serviceId.value);
    // console.log(form.charge.value);
    // console.log(form.duration.value);
    // console.log(form.notes.value);

    const serviceId = form.serviceId.value;
    const serviceName = form.serviceName.value;
    const charge = form.charge.value;
    const duration = form.duration.value;
    const notes = form.notes.value;

    const service = { serviceId, serviceName, charge, duration, notes };

    setMedicalService(service);
  };

  console.log(medicalService);

  return (
    <div>
      <Nav />

      <form
        onSubmit={handleMedicalServiceSubmit}
        className="w-3/6 mx-auto my-10"
      >
        <h3 className="text-2xl text-center font-bold my-5">
          Add a Medical Service
        </h3>
        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* doctor ID */}
        <div className="relative z-0 mb-6 w-2/12 group">
          <input
            type="text"
            name="serviceId"
            id="floating_service_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_service_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Service ID
          </label>
        </div>

        <section>
          {/* name */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* first name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="serviceName"
                id="floating_service_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_service_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Service Name
              </label>
            </div>

            {/* last name */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="charge"
                id="floating_charge_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_charge_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Service Charge
              </label>
            </div>
          </div>

          {/* duration and additional notes */}
          <div className="grid md:grid-cols-2 md:gap-56">
            {/* duration */}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="duration"
                id="floating_durationr"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_durationr"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Service duration
              </label>
            </div>

            {/* additional notes*/}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="notes"
                id="floating_notes"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_notes"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Notes
              </label>
            </div>
          </div>
        </section>

        {/* submit btn */}
        <button
          type="submit"
          className="mt-5 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default MedicalServices;
