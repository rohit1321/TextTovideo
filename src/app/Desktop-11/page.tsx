"use client";
import Image from "next/image";
import React from "react";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import App from "./form";


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
                <div className="container col-md-8 d-flex justify-content-center flex-column mt-3">
                    <div className=" justify-content-center bg-white rounded-lg p-3 ">
                        <div className=" d-flex  justify-content-between ">
                            <h5 className="my-3">Upload Image</h5>
                            <Image
                                className="  "
                                src="/icons/x-close.svg"
                                alt="upload"
                                width={25}
                                height={20}

                            /></div>
                        <p>Upload and attach Image to generate avatar</p>
                    </div>
                    <App/>
                </div>
            </div>
        </div>
    );
}
