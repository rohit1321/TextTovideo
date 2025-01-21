import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import { useState } from 'react';
import Select from 'react-select';


const MaleVoiceOption = [
    {
        value: "Amara",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1">Amara</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
    {
        value: "Emily",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1" >Emily</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
    {
        value: "Ashley",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1">Ashley</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
];

const FemaleVoiceOption = [
    {
        value: "Brat",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1">Brat</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
    {
        value: "Ryan",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1">Ryan</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
    {
        value: "Pratham",
        label: (

            <div className="d-flex justify-content-between">
                <h6 className="mt-1">Pratham</h6>
                <Image
                    src="/icons/bi_play-fill.svg"
                    alt="bi-play-btn"
                    height={10}
                    width={10}
                />
                
            </div>
        ),
    },
];

function App() {
    const [selectedMaleVoice, setSelectedMaleVoice] = useState(null);
    const [selectedFemaleVoice, setSelectedFemaleVoice] = useState(null);

    const handleMaleVoiceChange = (selectedOption) => {
        if (selectedOption === selectedMaleVoice) {
            // Unselect the current option if clicked again
            setSelectedMaleVoice(null);
        } else {
            setSelectedMaleVoice(selectedOption);
            setSelectedFemaleVoice(null); 
        }
    };

    const handleFemaleVoiceChange = (selectedOption) => {
        if (selectedOption === selectedFemaleVoice) {
            // Unselect the current option if clicked again
            setSelectedFemaleVoice(null);
        } else {
            setSelectedFemaleVoice(selectedOption);
            setSelectedMaleVoice(null); 
        }
    };

    return (
        <div className="App mt-4">
            <center>
                <Formik>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="d-flex flex-column">
                                <label htmlFor="AvatarText" className="d-flex justify-content-start">Enter Text to generate dialogues for Avatar</label>
                                <Field
                                    type="text"
                                    name="AvatarText"
                                    id="AvatarText"
                                    placeholder="Enter Text Here"
                                    className="px-5 py-3 text-center rounded-lg"
                                />
                            </div>
                            <div className="d-flex flex-column h-100">
                                <label htmlFor="AvatarText" className="d-flex justify-content-start">Voice</label>
                                <Field
                                    type="text"
                                    name="AvatarText"
                                    id="AvatarText"
                                    placeholder="Select Voice"
                                    className="px-5 py-3 text-start rounded-lg"
                                />
                                {/* male  audio */}

                                <div className="d-flex col-12  mt-2  justify-content-between w-100">
                                    <div className="col-5 ">
                                        <Select
                                            value={selectedMaleVoice}
                                            onChange={handleMaleVoiceChange}
                                            options={MaleVoiceOption}
                                            placeholder="Male Voice"
                                            isDisabled={!!selectedFemaleVoice} // Disable female voice 
                                        />
                                    </div>
                                    <div className="col-5">
                                        <Select
                                            value={selectedFemaleVoice}
                                            onChange={handleFemaleVoiceChange}
                                            options={FemaleVoiceOption}
                                            placeholder="Female Voice"
                                            isDisabled={!!selectedMaleVoice} // Disable male voice
                                        />

                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </center>
        </div>
    );
}
export default App;