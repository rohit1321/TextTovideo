"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <div className="main-content mt-5">
      <div className="container pt-5 col-md-6 d-flex justify-content-center flex-column">
        <div className="d-flex flex-column justify-content-center bg-light-1 rounded-3 my-5">
          <h3 className="text-dark-1 px-4 pt-3">Congratulations</h3>
          <p className="text-dark-1 px-4">Your Avatar is Generated</p>
          
          <Image
            src={"/Desktop-10/image 362.svg"}
            alt="Generated Avatar"
            width={200}
            height={600}
            className="col-12 px-4 py-2 rounded-3"
          />

          <div className="d-flex col-12 justify-content-center gap-4 text-white">
            <div className="pt-4 w-100 col-12 col-md-8 d-flex justify-content-center">
              <div
                // onClick={() => handleShare("facebook")}
                className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
              >
                <Image
                  src="/assets/img/icons/facebook.png"
                  width={20}
                  height={20}
                  alt="Facebook"
                  className="icon"
                />
              </div>
              <div
                // onClick={() => handleShare("twitter")}
                className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
              >
                <Image
                  src="/assets/img/icons/twitter-icon.svg"
                  width={20}
                  height={20}
                  alt="Twitter"
                  className="icon"
                />
              </div>
              <div
                // onClick={() => handleShare("instagram")}
                className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
              >
                <Image
                  src="/assets/img/icons/insta-icon.svg"
                  width={20}
                  height={20}
                  alt="Instagram"
                  className="icon"
                />
              </div>
              <div
                // onClick={() => handleShare("linkedin")}
                className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
              >
                <Image
                  src="/assets/img/icons/linkedln.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                  className="icon"
                />
              </div>
              <div
                // onClick={() => handleShare("whatsapp")}
                className="icon-container rounded-circle shadow bg-white p-2 cursor-pointer"
              >
                <Image
                  src="/assets/icons/whatsapp-icon.svg"
                  width={20}
                  height={20}
                  alt="YouTube"
                  className="icon"
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end m-4">
            <button
              type="button"
              className="btn bg-transparent border text-dark-1 me-2 px-5"
            //   onClick={() => {
            //     router.push("/avatar-creation");
            //   }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn border-0 gradient-btn text-white"
            //   onClick={() => {
            //     router.push("/dashboard");
            //   }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  