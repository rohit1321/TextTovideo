import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="container text-center my-2">
      <h6 className="text-primary">AI DIGITAL AVATAR CREATOR</h6>
      <h1 className="mb-3">How would you like to create Avatar</h1>
      <p className="mb-5">You can try with image or video</p>
      <div className="row justify-content-center">
        <div className="col-md-5 mb-5">
          <div className="card shadow-sm border-light" style={{ width: '470px', margin: '0 auto' }}>
            <Image
              src="/Desktop-9/right side (4).svg" // Replace with your image path
              alt="Use a Photo"
              width={350}
              height={200}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Use a Photo</h5>
              <p className="card-text">Use photos to create a new avatar</p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #4B39DA 2.22%, #CC2C6B 96.67%)',
                  color: 'white',
                  width: '100%',
                }}
              >
                Create
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 mb-5">
          <div className="card shadow-sm border-light" style={{ width: '470px', margin: '0 auto',  }}>
            <Image
              src="/Desktop-9/right side (4).svg" // Replace with your image path
              alt="Use a Video"
              width={350}
              height={200}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Use a Video</h5>
              <p className="card-text">Use video to create a new avatar</p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #4B39DA 2.22%, #CC2C6B 96.67%)',
                  color: 'white',
                  width: '100%',
                }}
              >
                Create
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;