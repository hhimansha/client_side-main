import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import video from "./img/Bvinews.webm";
import Footer from "../../Footer/Footer";

export const News = () => {
  const [data, setData] = useState([]);
  const baseURL = "http://localhost:3001"; // Define your base URL

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getAllEvents") // Common endpoint for all events
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="Eh-video-container-news">
        <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>

        <div className="overlaybk-news"></div>
        <div className="Eh-content-news">
          <h1 className="Eh-topic-news">IEEE HOT NEWS</h1>
        </div>
      </div>

      {/* All Events Section */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 bg-white lg:px-8 my-10 py-10">
        {/* <h2 className="text-2xl md:text-4xl font-semibold text-center">All Events</h2> */}

        <div className="mt-8 overflow-x-auto flex space-x-8">
          {data.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group flex-none w-80">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={getFullImageUrl(event.image)} // Construct full image URL
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
      </section>
    </div>
  );
};

export default News;
