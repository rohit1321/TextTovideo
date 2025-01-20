/* eslint-disable react/jsx-no-undef */
"use client";
import Image from "next/image";
import router from "next/router";
import React from "react";
import { Form } from "react-bootstrap";

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

        <div className="w-100 d-flex justify-content-center flex-column my-5">
          <div className=" justify-content-center bg-white rounded-4 p-3">
            <div className=" d-flex  justify-content-between">
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
          <div className="bg-light-1 rounded-4 d-flex justify-content-center p-4 bg-white mt-2">
            <div className="upload-box text-center position-relative">
              <div className="upload-img-container d-flex justify-content-center my-3">
                <Image
                  src="/icons/upload-cloud-02.svg"
                  alt="upload"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-dark-1">
                <span>Click to upload</span> or drag and drop
              </p>
              <p className="text-dark-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>

              <input
                type="file"
                accept="image/svg+xml,image/png,image/jpeg,image/gif"
                className="form-control position-absolute top-0 start-0 w-100 h-100 opacity-0"
                id="file-upload"
                aria-label="Upload File"
              //   onChange={handleFileUpload}
              />
            </div>
          </div>

          {/* {File && (
          <div className="mt-3">
            <p className="text-dark-1">
              Selected file: <strong>{File.name}</strong>
            </p>
          </div>
        )} */}
          <div className="d-flex mt-3 col-12   justify-content-between">
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

          {/* <Form
            // initialValues={{ prompt: "" }}
          // validationSchema={validationSchema}
          // onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <h5 className="my-3">Enter Prompt</h5>
                <div className="bg-light-1 rounded-2 d-flex justify-content-center p-4">
                  <div className="upload-box text-center position-relative w-100">
                    <div className="d-flex w-100 align-items-center py-3">
                      <p className="text-dark-1 mb-0 me-3">Imagine me as</p>
                      <div className="flex-grow-1 position-relative">
                        <Field
                          name="prompt"
                          type="text"
                          className=" w-100 input-with-line border-input-box"
                        />
                      </div>
                    </div>

                    <ErrorMessage
                    name="prompt"
                    component="div"
                    className="text-danger mt-1"
                  />
                  </div>
                </div>

                <div className="d-flex justify-content-center my-5">
                  <button
                    type="button"
                    className="btn bg-transparent border text-dark-1 me-2 px-5"
                  // onClick={() => {
                  //   router.back();
                  // }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn border-0 gradient-btn text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      "Confirm"
                    )}
                  </button>
                </div>
              </Form>
          
          </Form> */}
        </div>
      </div>
    </div>
    </div>
  );
}
