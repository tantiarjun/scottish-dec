
import React from 'react';

const PopupEvent = ({ event, onClose, onCheckAvailability }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="relative bg-white flex flex-col lg:flex-row justify-center items-center gap-4 px-4 py-6 mx-4 md:mx-10 lg:mx-20 my-10 lg:my-16 max-h-screen">
        {/* Close Button */}
        <button className="absolute top-2 right-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full lg:w-1/2 h-96 flex justify-center items-center mt-4 lg:mt-0">
          <img
            src={event.eventImageUrl}
            alt={event.eventTitle}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-container space-y-4 p-4 w-full lg:w-1/2 max-h-96 overflow-y-auto font-inter">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl lg:text-3xl font-playfair">Event Description</h1>
            <span className="px-2 py-1 text-xs font-medium rounded bg-white text-gray-700 border border-black">
              {event.isPaid ? 'Paid' : 'Free'}
            </span>
          </div>
          <p className="text-gray-700 text-base">
            {event.eventDescription}
          </p>
          <hr className="w-full border-t-1 border-gray-700 opacity-30" />
          <div className="schedule flex flex-row space-x-4">
            <div className="flex flex-col font-semibold">
              <pre>Date      :</pre>
              <pre>Time      :</pre>
              <pre>Location  :</pre>
            </div>
            <div className="text-gray-800">
              <pre>{event.eventDate}</pre>
              <pre>{event.eventTime}</pre>
              <pre>{event.eventLocation}</pre>
            </div>
          </div>
          <button
            className="mt-8 px-6 py-2 rounded-full bg-shfOrange text-white text-sm md:hover:bg-shfPurple"
            onClick={onCheckAvailability}
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupEvent;

