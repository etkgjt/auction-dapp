import React from 'react';

const MainVideo = () => {
  return (
    <section className="features-area main-video-area saas-features ptb-100">
      <div className="main-video container">
        {/* <div className="main-video__bg">
          <img
            src={
              require('@Modules/Introduce/assets/images/main-video-frame.png')
                .default
            }
            alt="main-video-frame"
          />
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </div> */}

        <iframe
          frameborder="0"
          autoplay="1"
          allow="autoplay"
          allowfullscreen
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&loop=1&playlist=GRonxog5mbw"
        />
      </div>
    </section>
  );
};

export default MainVideo;
