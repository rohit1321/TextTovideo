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
    <div className=" main-content  bg-white p-4 ">
      <div className=" p-4 container ">
        <div className="container text-center my-2">
          <h6 className="text-primary">AI DIGITAL AVATAR CREATOR</h6>
          <h1 className="mb-2">Turn text to video in minutes</h1>
          <p className="mb-2">
            Create studio-quality videos with AI avatars and voiceovers in 130+ languages.
            It’s as easy as making a slide deck.
          </p>
          <a
            href="#"
            className="btn mb-3 border-light text-white"
            style={{
              background: '#7346F1',
            }}
          >
            Create a free AI video
          </a>
          <div className="d-flex justify-content-center">
          <div className="card p-3  border-light col-12 w-50">
            <div className=" row">
              {videos.map((video, index) => (
                <div className=" mb-2  col-4 " key={index}>
                  <div className="position-relative">
                    <video
                      src={video.src}
                      width={300}
                      height={80}
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
        </div>
      </div>

    </div>
  );
};

export default Home;