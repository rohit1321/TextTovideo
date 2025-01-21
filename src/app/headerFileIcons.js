import React from "react";
import Image from "next/image";


function HeaderComponent() {
    return (
        <>
            <div className="col-12 row">
                <div className="d-flex col-lg-4 col-3">
                    <Image
                        src="/icons/chevron-right.svg"
                        alt="Image Icon" className="mx-2 mx-sm-1"
                        height={15}
                        width={15}
                    />
                    <div className="mt-3 ">Back</div>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4 mt-3 col-lg-8 col-9">
                    <div className="d-flex align-items-center">
                        <Image
                            src="/Desktop-12/lucide_image (1).svg"
                            alt="Image Icon" className="mx-1"
                            height={20}
                            width={20}
                        />

                        <span className="text-muted mx-2">Image</span>

                        <Image
                            src="/Desktop-12/mingcute_voice-line.svg"
                            alt="Voice Icon"
                            className="mx-1"
                            height={20}
                            width={20}
                        />

                        <span className="text-muted mx-2">Voice</span>

                        <Image src="/Desktop-12/mingcute_ai-line.svg"
                            alt="Generation Icon"
                            className="mx-1"
                            height={20}
                            width={20}
                        />
                        <span className="text-primary mx-2 mx-lg-1">Generation</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HeaderComponent;
