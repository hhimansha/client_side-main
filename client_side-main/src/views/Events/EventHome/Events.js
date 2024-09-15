import React from "react";
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
import Footer from '../../Footer/Footer'

function Events() {
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

      {/*1st BOX*/}
      <section className="body-box">
        <div className="responsive-box">
          <div className="bxcolumn">
            <div class="containerslide">
              <div class="wrapperslide">
                <img src={news1} alt="img1" className="imgslider" />
                <img src={news2} alt="img2" className="imgslider" />
                <img src={news3} alt="img3" className="imgslider" />
                <img src={news4} alt="img4" className="imgslider" />
              </div>
            </div>
          </div>
          <div className="bxcolumn">
            <div className="bxcolumnfulnews">
              <h1 className="clmtopic">NEWS</h1>
              <br></br>
              <p className="clmparanws">
                SLIIT team emerged victorious in the INFOTEL Exhibition’s
                Capture the Flag (CTF) hackathon, clinching the coveted 1st
                place. Their impressive performance earned them a generous cash
                prize and a substantial 3 million rupees worth of Cloud Credits.
                SLIIT team emerged victorious in the INFOTEL Exhibition’s
                Capture the Flag (CTF) hackathon, clinching the coveted 1st
                place. Their impressive performance earned them a generous cash
                prize and a substantial 3 million rupees worth of Cloud Credits.
                The competition was organized byOrel IT3 million rupees worth of
                Cloud Credits. The competition was organized byOrel IT
              </p>
              <br></br>
              <div className="clmbtnful">
                <Link to="/user/news">
                  <button className="clmbtn" onClick={() => {window.scrollTo(0, 0)}}>View More</button>
                </Link>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        {/*2nd box set */}
        <div className="boxs-container">
          <div className="box1nw">
            <br></br>
            <div className="bxcolumnful">
              <div class="containerslide2">
                <div class="wrapperslide2">
                  <img src={event1} alt="img1" className="imgslider2" />
                  <img src={event2} alt="img2" className="imgslider2" />
                  <img src={event3} alt="img3" className="imgslider2" />
                  <img src={event4} alt="img4" className="imgslider2" />
                </div>
              </div>
              <h1 className="clmtopic">Past Events</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <div className="clmbtnful">
                <Link to="/user/pastevents">
                  <button className="clmbtn" onClick={() => {window.scrollTo(0, 0)}}>View More</button>
                </Link>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="box2nw">
            <br></br>
            <div className="bxcolumnful">
              <div class="containerslide2">
                <div class="wrapperslide2">
                  <img src={event5} alt="img1" className="imgslider2" />
                  <img src={event6} alt="img2" className="imgslider2" />
                  <img src={event7} alt="img3" className="imgslider2" />
                  <img src={event8} alt="img4" className="imgslider2" />
                </div>
              </div>
              <h1 className="clmtopic">Upcoming Events</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <div className="clmbtnful">
                <Link to="/user/upevents">
                  <button className="clmbtn" onClick={() => {window.scrollTo(0, 0)}}>View More</button>
                </Link>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Events;
