import { Link } from "react-router-dom";
import "./events.css";
import wbk from "./img/bkw.png";
import event1 from "./img/event1.jpg";
import event2 from "./img/event2.jpg";
import event3 from "./img/event3.jpg";
import event4 from "./img/event4.jpg";
import event5 from "./img/event5.jpg";
import event6 from "./img/event6.jpg";
import event7 from "./img/event7.jpg";
import event8 from "./img/event8.jpg";
import news1 from "./img/news1.jpg";
import news2 from "./img/news2.jpg";
import news3 from "./img/news3.jpg";
import news4 from "./img/news4.jpg";
import video from "./img/Bvi.webm";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Footer from '../../Footer/Footer'

function Events() {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());
  const upcomingRef = useRef(null); // Ref for upcoming events slider
  const pastRef = useRef(null); // Ref for past events slider

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get/events/IEEECS") // Common endpoint for all events
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const upcomingEvents = data.filter(
    (event) => new Date(event.date) > new Date(currentDate)
  );
  const pastEvents = data.filter(
    (event) => new Date(event.date) <= new Date(currentDate)
  );

  const baseURL = "http://localhost:3001"; // Define your base URL
  const getFullImageUrl = (imagePath) => {
    return `${baseURL}/${imagePath.replace(/^\/+/, "")}`; // Remove leading slashes from the image path
  };

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="Eh-video-container">
      <video autoPlay loop muted className="Eh-video">
        <source src={video} type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>

      <img src={wbk} alt="bk" className="Eh-image" />
      <div className="overlaybk"></div>
      <div className="Eh-content">
        <h1 className="Eh-topic">
          EVENT<br></br>NEWS
        </h1>
      </div>

      {/* Upcoming Events Section */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 relative  py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Upcoming Events</h2>

        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block"
          onClick={() => scrollLeft(upcomingRef)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-blue-600" />
        </button>

        {/* Slider */}
        <div className="mt-8 overflow-x-auto flex  space-x-8" ref={upcomingRef}>
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-yellow-500 shadow-lg rounded-lg overflow-hidden group flex-none w-80 ">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={getFullImageUrl(event.image)} // Construct full image URL
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <h3 className="text-lg md:text-xl text-center font-bold">{event.name}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="mt-4 text-blue-600">
                  {new Date(event.date).toLocaleDateString()}
                </p>

                {/* Conditionally render Apply Now button based on linkStatus */}
                {event.linkStatus && (
                  <div className="mt-6 flex justify-center">
                    <a
                      href={event.googleFormLink}
                      className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-10 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      style={{ minWidth: "200px", textAlign: "center" }}
                    >
                      Apply Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block"
          onClick={() => scrollRight(upcomingRef)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-600" />
        </button>
      </section>

      {/* Past Events Section */}
      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative py-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Past Events</h2>

        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block"
          onClick={() => scrollLeft(pastRef)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-blue-600" />
        </button>

        {/* Slider */}
        <div className="mt-8 overflow-x-auto flex space-x-8" ref={pastRef}>
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group flex-none w-80">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={getFullImageUrl(event.image)}
                  alt={event.name}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl text-center font-bold">{event.name}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="mt-4 text-blue-600">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full z-10 hidden md:block"
          onClick={() => scrollRight(pastRef)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-600" />
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
