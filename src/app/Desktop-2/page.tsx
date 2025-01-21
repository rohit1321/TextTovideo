import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  // Array of video data
  const videos = [
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 1' },
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 2' },
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 3' },
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 4' },
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 5' },
    { src: '/Desktop-2/generated_video_2bfc1f92-d60a-4c49-af38-82155b429692.mp4', alt: 'Video 6' },
  ];

  return (
    <div className="main-content container  bg-white  ">
      <div className=" text-center ">
        <h6 className="text-primary ">AI DIGITAL AVATAR CREATOR</h6>
        <h1 className="mb-2">Turn text to video in minutes</h1>
        <p className="mb-2">
          Create studio-quality videos with AI avatars and voiceovers in 130+ languages.
          It’s as easy as making a slide deck.
        </p>
        <a
          href="#"
          className="btn mb-1 text-white border-light play-btn-color"
          style={{
            background: '#7346F1',
          }}>Create a free AI video
        </a>
      </div>
      <div className=" p-4 container-fluid ">
        <div className=" row">
          {videos.map((video, index) => (
            <div className="col-md-4 col-lg-4 col-6 mb-2" key={index}>
              <div className="position-relative d-flex  justify-content-center">
                <video
                  src={video.src}
                  width={230}
                  height={150}
                  controls
                  className="rounded"
                >Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;