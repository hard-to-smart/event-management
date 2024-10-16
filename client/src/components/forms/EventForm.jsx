import React from "react";

const EventForm = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handleEventSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Create New Event
            </h1>
            <div className="py-2 text-left">
              <input
                type="text"
                name="title"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Event Title"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="description"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="E description"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="text"
                name="imageUrl"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Image Url"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Create New Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EventForm;
