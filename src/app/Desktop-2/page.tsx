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
    
    <div className="container text-center my-5">
        <h6 className="text-primary">AI DIGITAL AVATAR CREATOR</h6>
      <h1 className="mb-4">Turn text to video in minutes</h1>
      <p className="mb-4">
        Create studio-quality videos with AI avatars and voiceovers in 130+ languages. 
        It’s as easy as making a slide deck.
      </p>
      <a
  href="#"
  className="btn mb-4"
  style={{
    background: '#7346F1',
    color: 'white',
    border: 'none', // Remove border if needed
  }}
>
  Create a free AI video
</a>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="position-relative">
              <video
                src={video.src}
                width="100%"
                height="auto"
                controls
                className="rounded"
              >
                <i className="bi bi-play-circle" style={{ fontSize: '3rem', color: '#fff' }}></i>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;