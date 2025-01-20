"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <div className="main-container container mt-5 bg-white p-4">
            <div className="main-content mt-4 p-4 card container shadow-lg   border border-light">
                <div className="d-flex rounded-5 ">
                    <div className="play-btn-color d-flex  justify-content-center  rounded-circle  px-2 cursor-pointer"><Image
                        src="/icons/play-btn.svg"
                        alt="upload"
                        width={25}
                        height={20}
                    /></div>
                    <h5 className=" mx-2 mt-1 text-start">Watch Tutorial</h5>

                </div>
                <div className="container col-md-8 d-flex justify-content-center flex-column">

                </div>
            </div>
        </div>
    );
}
