import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const RoomDetails = () => {
  const [roomDetails, setRoomDetails] = useState({});

  const handleMedicalServiceSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const roomId = form.roomId.value;
    const roomType = form.roomType.value;
    const roomRate = form.rate.value;

    const notes = form.notes.value;

    const roomDetailTemp = { roomId, roomType, roomRate, notes };

    setRoomDetails(roomDetailTemp);
  };

  console.log('Inside room details:');
  console.log(roomDetails);

  return (
    <div>
      <Nav />

      <form
        onSubmit={handleMedicalServiceSubmit}
        className="w-3/6 mx-auto my-10"
      >
        <h3 className="text-2xl text-center font-bold my-5">Add a Room</h3>
        {/* hr */}
        <div className="space-x-5 text-center my-10">
          <div className="inline-block border-b-2  border-blue-900 w-3/4"></div>
        </div>

        {/* room ID */}
        <div className="relative z-0 mb-6 w-2/12 group">
          <input
            type="text"
            name="roomId"
            id="floating_room_id"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_room_id"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Room ID
          </label>
        </div>

        <section>
          {/* room type */}
          <div className="grid md:grid-cols-2 md:gap-56">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="roomType"
                id="floating_roomType"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_roomType"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Room type
              </label>
            </div>

            {/* room rate*/}
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="rate"
                id="floating_rate"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_rate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Room rate
              </label>
            </div>
          </div>

          {/* duration and additional notes */}
          <div className="grid md:grid-cols-2 md:gap-56">
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

export default RoomDetails;
