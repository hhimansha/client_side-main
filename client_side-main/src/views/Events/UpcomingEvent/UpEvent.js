import React, { useEffect, useState } from "react";
import "./upevent.css";
import video from "./img/Bvinews.webm";
import Footer from "../../Footer/Footer";
import axios from "axios"; // Optional: If you're using axios

function News() {
  // State to hold the fetched events data
  const [events, setEvents] = useState([]);

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch data from your backend API
        const response = await axios.get("http://localhost:3001/api/getAllEvents"); // Replace with fetch if needed
        const eventData = response.data;

        // Update state with fetched event data
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array to run this once on component mount

  return (
    <div>
      <div className="Eh-video-container-news">
        <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>
        <div className="overlaybk-news"></div>
        <div className="Eh-content-news">
          <h1 className="Eh-topic-news">Upcoming Events</h1>
        </div>
      </div>

      <section className="flex flex-wrap gap-6 mx-10 justify-center my-20">
        {/* Step 2: Map through the fetched event data */}
        {events.map((event) => (
          <article
            key={event._id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[45%] h-96 hover:scale-105 transition-transform duration-500"
          >
            <img
              src={`http://localhost:3001${event.image}`} // Assuming the images are served from the backend
              alt={event.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              {event.name}
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {event.description}
            </div>
            {/* Button added here */}
            <div className="z-10 mt-4">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default News;
