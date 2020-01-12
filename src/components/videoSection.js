import React from "react"

// import marsPoster from "../images/mars.png"

const VideoSection = () => {
  return (
    <section id="video">
      <div className="video-section">
        <div className="container">
          <div className="video-player">
            <video
              // poster={marsPoster}
              controls
              autoPlay
              type="video/mp4"
              src="https://aemabitfolder.sfo2.digitaloceanspaces.com/mars.ogv"
            >
              <track default kind="captions"/>
            </video>
          </div>
          <div className="video-content">
            <div className="title">
              <h3>Let’s Talk About It Now</h3>
            </div>
            <div className="content">
              <p>
                I’m so happy to present the 1st web page before Wyncode.
                <a href="https://mars.aemabit.com/">‘‘Mars’’</a> It is a website
                where you can get a small introduction about ‘‘Rover Curiosity’’
                and some of the photos that have been taken on the planet of
                Mars, using technologies such as Express, ReactJs, NodeJS and
                more tools ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
