import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import HeaderComponent from "../headerFileIcons";

const VideoGeneration: React.FC = () => {
  return (
    <div className="container mt-4 col-12">
      <HeaderComponent/>
      <div className="card shadow-lg border-light p-4  ">
        <div className="mb-2 d-flex justify-content-center">
          <Image
            src="/Desktop-12/bd32cd6224dea3398f3615847c4dc6d6 (1).gif"
            alt="Loading Icon"
            height={600}
            width={300}
          />
        </div>
        <h5 className="mb-4 text-center">Hang on while we generate your video</h5>
        <div className="progress mx-auto " style={{ height: '15px', borderRadius: '5px', backgroundColor: '#e9ecef', width: '60%' }}>
          <div
            className="progress-bar "
            role="progressbar"
            style={{
              width: '10%',
              background: 'linear-gradient(90deg, #4B39DA 2.22%, #CC2C6B 96.67%)',
            }}
            aria-valuenow={5}
            aria-valuemin={0}
            aria-valuemax={100}
          >

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VideoGeneration;