import React from "react";
import "./upevent.css";
import wbk from "./img/bkw.png";
import video from "./img/Bvinews.webm";
import Footer from "../../Footer/Footer";
import codecon from "./img/codecon.jpg";
import cybershield from "../../NewHome/images/homeImage.jpg"
import extreme from "./img/extreme.jpg";
import webwrap from "./img/webwrap.jpg"

function News() {
  // Step 1: Create the event data object
  const events = [
    {
      name: "CodeCon 3.0",
      image : codecon,
      description:
        "CodeCon 3.0 is a Hackathon with two sessions. Undergraduates of SLIIT are eligible to participate in this event, and they have the option of attending either individually or in teams. The participants must develop a software solution under the selected topics. The completed projects will be examined by a qualified panel of judges. The participants will be awarded cash prizes based on their performances, and the other individual software solutions will also receive a certificate of completion.",
    },
    {
      name: "CyberShield 3.0",
      image : cybershield,
      description:
        "CyberShield 3.0 is an event revolving around the principles of cyber security. Although all faculty members are encouraged to attend, it is anticipated that the faculty of computing students will participate the most in this event.",
    },
    {
      name: "SLIITXtreme 2.0",
      image : extreme,
      description:
        "The only participants in this hackathon will be SLIIT students. This event is mainly conducted as an awareness session focusing on the IEEEXtreme 2023 Competition.",
    },
    {
      name: "WebWrap 1.0",
      image : webwrap,
      description:
        "WebWrap 1.0 opens the opportunity for school students across the island to enrich their basic programming knowledge, which helps them to boost their self-esteem when choosing a career path in the IT industry.",
    },
  ];

  return (
    <div>
      <div className="Eh-video-container-news">
        <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>

        <div className="overlaybk-news"></div>
        <div className="Eh-content-news">
          <h1 className="Eh-topic-news">Past Event</h1>
        </div>
      </div>

      <section className="flex flex-wrap gap-6 mx-10 justify-center my-20">
  {/* Step 2: Map through the event data */}
  {events.map((event, index) => (
    <article
      key={index}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[45%] h-96 hover:scale-105 transition-transform duration-500"
    >
      <img
        src={event.image}
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
    </article>
  ))}
</section>



      <Footer />
    </div>
  );
}

export default News;
