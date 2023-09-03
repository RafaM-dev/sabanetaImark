import { useState } from "react";
import { Banner } from "../Components/Banner/Banner";
import { TeamStats } from "../Components/TeamPage/TeamStats"
import bannerTuVision from "../assets/Banners/TuVision3.png";



export const TeamPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showPanel = (index) => {
    setActiveTab(index);
  };

  return (
    <section>
      <Banner img={bannerTuVision} />
      <div className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center ">
        <span className="titleTeam"> ABOUT US </span>
        <h2 className="mx-auto mb-5 max-w-[570px] text-3xl font-semibold">
          Know Details About Our Company
        </h2>
        <p className="mx-auto max-w-[570px] text-base mh">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
          ante in maximus.
        </p>
      </div>


      <div className="tabContainer">
        <div className="tabButtons">
          <button className={activeTab === 0 ? "active" : ""} onClick={() => showPanel(0)}>
            About Us
          </button>
          <button className={activeTab === 1 ? "active" : ""} onClick={() => showPanel(1)}>
            Our Mission
          </button>
          <button className={activeTab === 2 ? "active" : ""} onClick={() => showPanel(2)}>
            Our Vision
          </button>
        </div>

        <div className="tabContent">
          {/* About Us Panel */}
          <div className={`tabPanel ${activeTab === 0 ? "active" : "hidden"}`}>
            <p>asdasdasdasdasdasdasdasdasdasdasdas</p>
          </div>

          {/* Our Mission Panel */}
          <div className={`tabPanel ${activeTab === 1 ? "active" : "hidden"}`}>
            <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>

          </div>

          {/* Our Vision Panel */}
          <div className={`tabPanel ${activeTab === 2 ? "active" : "hidden"}`}>
            <p>cccccccccccccccccccccccccccccccccccccccc</p>

          </div>
        </div>
      </div>

      <TeamStats />
    </section>

  )
}

