"use client";
import Image from "next/image";
import React from "react";
import HeaderComponent from "../headerFileIcons";

export default function Home() {
  return (
    <div className="main-container container mt-5 bg-white p-4 ">
      <HeaderComponent />
      <div className="main-content mt-4 p-4 card container shadow-lg   border border-light">
        <div className="  mt-4 ">
          <div className="container  col-md-6 d-flex justify-content-center flex-column ">
            <div className="d-flex flex-column justify-content-center bg-light-1 rounded-3 ">
              <div className=" justify-content-center bg-white rounded-lg p-2 w-100">
                <div className=" d-flex  justify-content-between ">
                  <div className="d-flex flex-column">
                    <h3 className="text-dark-1 px-4 pt-3">Congratulations</h3>
                    <p className="text-dark-1 px-4">Your Avatar is Generated</p>
                  </div>

                  <Image
                    className=" mb-4 "
                    src="/icons/x-close.svg"
                    alt="upload"
                    width={25}
                    height={20}

                  />
                </div>
              </div>

              <div className="bg-white mt-2 rounded-lg">
                <Image
                  src={"/Desktop-14/image 362.svg"}
                  alt="Generated Avatar"
                  width={500}
                  height={600}
                  className="col-12 px-4 py-2 rounded-3"
                />

              </div>

              <div className="d-flex col-12 justify-content-center gap-4 text-white">
                <div className="pt-4 w-100 col-12 col-md-8 d-flex justify-content-center">
                  <div
                    // onClick={() => handleShare("facebook")}
                    className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
                  >
                    <Image
                      src="/Desktop-14/whatsapp.svg"
                      width={30}
                      height={30}
                      alt="Facebook"
                      className="icon"
                    />
                  </div>
                  <div
                    // onClick={() => handleShare("twitter")}
                    className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
                  >
                    <Image
                      src="/Desktop-14/facebook.svg"
                      width={30}
                      height={30}
                      alt="Twitter"
                      className="icon"
                    />
                  </div>
                  <div
                    // onClick={() => handleShare("instagram")}
                    className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
                  >
                    <Image
                      src="/Desktop-14/meta.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                      className="icon"
                    />
                  </div>
                  <div
                    // onClick={() => handleShare("linkedin")}
                    className="icon-container rounded-circle shadow bg-white p-2 me-3 cursor-pointer"
                  >
                    <Image
                      src="/Desktop-14/linkdin.svg"
                      width={30}
                      height={30}
                      alt="LinkedIn"
                      className="icon"
                    />
                  </div>
                  <div
                    // onClick={() => handleShare("whatsapp")}
                    className="icon-container rounded-circle shadow bg-white p-2 cursor-pointer"
                  >
                    <Image
                      src="/Desktop-14/download.svg"
                      width={30}
                      height={30}
                      alt="YouTube"
                      className="icon"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5 col-12   justify-content-between">
                <button
                  type="button"
                  className="btn bg-white border text-dark-1 me-2 px-lg-5 px-md-4   col-sm-4 col-lg-5  rounded-3"
                //   onClick={() => {
                //     router.push("/avatar-creation");
                //   }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-transparent border text-dark-1 me-2 px-lg-5 px-md-4  px-sm-4 rounded-3  col-sm-4 col-lg-5 text-white graditent-btn"
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
      </div>
    </div>
  );
}

