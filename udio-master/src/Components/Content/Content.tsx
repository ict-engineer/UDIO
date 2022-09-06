import * as React from 'react';

interface Props {
    
};

export function Content(props: Props) {
    return (
        <div>
            <section className="p-4 text-center my-32">
                <div className="container mx-auto shadow-2xl rounded my-12">
                    <div className="w-full p-2 m-2">
                        <div className="flex w-full justify-around">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.983 0.333374C7.78301 0.333374 0.333008 7.80004 0.333008 17C0.333008 26.2 7.78301 33.6667 16.983 33.6667C26.1997 33.6667 33.6663 26.2 33.6663 17C33.6663 7.80004 26.1997 0.333374 16.983 0.333374ZM28.533 10.3334H23.6163C23.083 8.25004 22.3163 6.25004 21.3163 4.40004C24.383 5.45004 26.933 7.58337 28.533 10.3334ZM16.9997 3.73337C18.383 5.73337 19.4663 7.95004 20.183 10.3334H13.8163C14.533 7.95004 15.6163 5.73337 16.9997 3.73337ZM4.09967 20.3334C3.83301 19.2667 3.66634 18.15 3.66634 17C3.66634 15.85 3.83301 14.7334 4.09967 13.6667H9.73301C9.59967 14.7667 9.49967 15.8667 9.49967 17C9.49967 18.1334 9.59967 19.2334 9.73301 20.3334H4.09967ZM5.46634 23.6667H10.383C10.9163 25.75 11.683 27.75 12.683 29.6C9.61634 28.55 7.06634 26.4334 5.46634 23.6667ZM10.383 10.3334H5.46634C7.06634 7.56671 9.61634 5.45004 12.683 4.40004C11.683 6.25004 10.9163 8.25004 10.383 10.3334ZM16.9997 30.2667C15.6163 28.2667 14.533 26.05 13.8163 23.6667H20.183C19.4663 26.05 18.383 28.2667 16.9997 30.2667ZM20.8997 20.3334H13.0997C12.9497 19.2334 12.833 18.1334 12.833 17C12.833 15.8667 12.9497 14.75 13.0997 13.6667H20.8997C21.0497 14.75 21.1663 15.8667 21.1663 17C21.1663 18.1334 21.0497 19.2334 20.8997 20.3334ZM21.3163 29.6C22.3163 27.75 23.083 25.75 23.6163 23.6667H28.533C26.933 26.4167 24.383 28.55 21.3163 29.6ZM24.2663 20.3334C24.3997 19.2334 24.4997 18.1334 24.4997 17C24.4997 15.8667 24.3997 14.7667 24.2663 13.6667H29.8997C30.1663 14.7334 30.333 15.85 30.333 17C30.333 18.15 30.1663 19.2667 29.8997 20.3334H24.2663Z"
                                    fill="#202221"/>
                            </svg>
                        </div>

                        <div className="p-2 m-2 font-bold">
                            <p>Extending your sales channels online</p>
                        </div>
                        <div className="p-2 m-2">
                            <p>Move your Point of Sales to digital channels and reach customers anywhere and anytime.
                                Enable customers to approve transactions on the go with remote sign on mobile
                                devices.</p>
                        </div>
                    </div>
                    <div className="flex justify-around items-center">
                        <button className="flex items-center bg-udio-blue-900 py-2 px-8 m-4 font-bold shadow">
                            <div className="pr-2">
                                More
                            </div>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="#F3FCFA"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};