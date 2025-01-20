import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoGeneration: React.FC = () => {
  return (
    <div className="container my-5">
      <a href="#" className="text-muted me-3">&lt; Back</a>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <div className="d-flex align-items-center">
          <img src="/Desktop-12/lucide_image (1).svg" alt="Image Icon" className="mx-1" style={{ width: '20px' }} />
          <span className="text-muted mx-2">Image</span>
          <img src="/Desktop-12/mingcute_voice-line.svg" alt="Voice Icon" className="mx-1" style={{ width: '20px' }} />
          <span className="text-muted mx-2">Voice</span>
          <img src="/Desktop-12/mingcute_ai-line.svg" alt="Generation Icon" className="mx-1" style={{ width: '20px' }} />
          <span className="text-primary mx-2">Generation</span>
        </div>
        
      </div>
      <div className="card shadow-lg border border-light p-5" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
        <div className="mb-4 d-flex justify-content-center">
          <img
            src="/Desktop-12/bd32cd6224dea3398f3615847c4dc6d6 (1).gif"
            alt="Loading Icon"
            style={{ width: '400', height: '200' }}
          />
        </div>
        <h5 className="mb-4 text-center">Hang on while we generate your video</h5>
        <div className="progress mx-auto" style={{ height: '15px', borderRadius: '5px', backgroundColor: '#e9ecef', width: '60%' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: '5%',
              background: 'linear-gradient(90deg, #4B39DA 2.22%, #CC2C6B 96.67%)',
            }}
            aria-valuenow={5}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VideoGeneration;