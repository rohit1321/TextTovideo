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
                <div className="container col-md-8 d-flex justify-content-center flex-column mt--3">
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
                    <App />
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
    );
}
