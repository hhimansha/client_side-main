import React from "react";
import "./upevent.css";
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
import video from "./img/Bvinews.webm";
import Footer from "../../Footer/Footer";

function News() {
  return (
    <div>
      <div className="Eh-video-container-news">
        <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video>

        <div className="overlaybk-news"></div>
        <div className="Eh-content-news">
          <h1 className="Eh-topic-news">Upcoming Event</h1>
        </div>
      </div>
      <section className="body-box">
        <div className="boxs-container">
          {/*News Box Start */}
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
              <h1 className="clmtopic">Event Heading</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          {/*News Box END */}
          {/*News Box Start */}
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
              <h1 className="clmtopic">Event Heading</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          {/*News Box Start */}
        </div>
        <br></br> <br></br> <br></br>
        <div className="boxs-container">
          {/*News Box Start */}
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
              <h1 className="clmtopic">Event Heading</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          {/*News Box END */}
          {/*News Box Start */}
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
              <h1 className="clmtopic">Event Heading</h1>
              <br></br>
              <p className="clmpara">
                CyberShield 2.0 is an event centred around the concepts of cyber
                security held successfully for all faculty members are
                encouraged to attend, it is anticipated that the faculty of
                computing students participated to this even
              </p>
              <br></br>
              <br></br>
            </div>
          </div>
          {/*News Box END */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default News;
