import "./ExecutiveCommittee.css";
import ShashikaLokuliyana from './images/Shashika-Lokuliyana.JPG'
import AdithyaLiyanaarachchi from './images/Adithya-Liyanaarachchi.jpg'
import IndudiniThennakone from './images/Indudini-Thennakone.jpg'
import KanzurrizkRihan from './images/Kanzurrizk-Rihan.jpg'

const MEMBERSHIP = () => {
  return (
    <section className="m-e-m-b-e-r-s-h-i-p" id="exec">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
          <div className="lorem-ipsum-dolor-container">
            <b>Lorem ipsum dolor sit amet</b>
            
              , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat.
            
          </div>
        </div>
        <div className="f-r-a-m-e2">
          <h2 className="executive-committee">Executive Committee</h2>
          <div className="groupframe-parent">
            <div className="groupframe">
              <div className="f-r-a-m-e3">
                <div className="f-r-a-m-e-item" />
                <img
                  className="f-r-a-m-e-inner"
                  loading="eager"
                  alt=""
                  src={ShashikaLokuliyana}
                />
              </div>
              <div className="t-e-x-t">
                  <h3 className="yohan-joseph-chairperson-container">
                    <p className="yohan-joseph">Mrs. Shashika Lokuliyana</p>
                    <p className="chairperson">Chapter Advisor</p>
                  </h3>
                </div>
              <div className="vicechairpersonframe">
                <div className="vicechairpersonframe-child" />
                <h3 className="prabhasa-dharmarathne-vice-container">
                  <p className="prabhasa-dharmarathne">Adithya Liyanaarachchi</p>
                  <p className="vice-chairperson">Chairperson</p>
                </h3>
                <img
                  className="vicechairpersonframe-item"
                  loading="eager"
                  alt=""
                  src={AdithyaLiyanaarachchi}
                />
              </div>
            </div>
            <div className="frame-container">
              <div className="rectangle-group">
                <div className="frame-item" />
                <img
                  className="frame-inner"
                  loading="eager"
                  alt=""
                  src={KanzurrizkRihan}
                />
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <img
                  className="group-icon"
                  loading="eager"
                  alt=""
                  src={IndudiniThennakone}
                />
                <h3 className="devni-dharmasooriya-secretary-container">
                  <p className="devni-dharmasooriya">Indudini Thennakoon</p>
                  <p className="secretary">Vice Chairperson</p>
                </h3>
              </div>
              <div className="pasan-senarath-treasurer-wrapper">
                <h3 className="pasan-senarath-treasurer-container">
                  <p className="pasan-senarath">Kanzurrizk Rihan</p>
                  <p className="treasurer">Secretary</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MEMBERSHIP;
