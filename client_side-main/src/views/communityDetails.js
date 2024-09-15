import React from "react";
import "./../styles/communityDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer/Footer";
import communityHero from './images/communityDetails1.png'
import MEMBERSHIP from "./committee/ExecutiveCommittee";
import EditorialTeam from './committee/EditorialTeam'

import "./committee/SBCommittee.css";


export default function CommunityDetails() {

  return (
    <>
      < div className=' bg-[#00629B]'>

        <header>
          {/* Hero Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 md:pt-48">
            {/* Component */}
            <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
              {/* Hero Content */}
              <div className="flex flex-col">
                {/* Hero Title */}
                <div className='md:grid flex justify-center'>
                  <h1 className="mb-4 text-4xl font-bold text-white md:text-[100pt] md:mb-20">
                    Our
                  </h1>
                  <h1 className="mb-4 text-4xl text-[#FFA300] font-bold md:text-[70pt] md:mb-20">
                    Community
                  </h1>
                </div>
                <p className="mb-6 max-w-lg text-sm text-gray-200 sm:text-lg md:mb-10 lg:mb-12 text-center md:text-left" >
                IEEE is the world’s largest professional association
            advancing innovation and technological excellence for the
            benefit of humanity. IEEE and its members inspire a global
            community to innovate for a better tomorrow through its highly
            cited publications, conferences, technology standards, and
            professional and educational activities. IEEE is the trusted
            “voice” for engineering, computing and technology information
            around the globe..
                </p>
                {/* Hero Button */}

              </div>
              {/* Hero Image */}
              <img
                src={communityHero}
                alt=""
                className="inline-block h-full w-full max-w-2xl"
              />
            </div>
          </div>
        </header>
      </div>
      {/* <div class="community-section">
        <div class="community-introduction">
          <h1 className="our-community">Our <span>Community</span></h1><br></br>
          {/* <h4 className="best-community">We are the best community..</h4> */}

          {/* <p className="paraa">
            IEEE is the world’s largest professional association
            advancing innovation and technological excellence for the
            benefit of humanity. IEEE and its members inspire a global
            community to innovate for a better tomorrow through its highly
            cited publications, conferences, technology standards, and
            professional and educational activities. IEEE is the trusted
            “voice” for engineering, computing and technology information
            around the globe..
          </p> */}

        {/* <div class="community-image">
          <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_485914101_122742.jpg" />
        </div> */}


      <div className="sb-committee">
        <MEMBERSHIP />
        <section className="frame-section">
          <div className="frame-group">
            <EditorialTeam />
            {/* <PublicityTeam />
          <MembershipDevTeam />
          <FinanceTeam />
          <LogisticsTeam/>
          <VolunteerManagementTeam/> */}
          </div>
        </section>
      </div>



      <Footer />
    </>
  );
}

