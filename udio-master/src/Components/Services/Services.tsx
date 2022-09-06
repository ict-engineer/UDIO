import * as React from 'react';
import './services.css'
interface Props {
    
};

export function Services(props: Props) {
    return (
        <div>
            <section className="container mx-auto flex flex-wrap justify-around text-gray-900 my-32">

                <button className="cardbutton md:w-1/3 p-2 m-2">
                    <h2>Consulting</h2>
                    <p>UDIO provides professional consulting services for every step of digital transformation process
                        and helps organizations of any size that focus on successful digital transformation and business
                        optimization.</p>
                    <div className="flex items-center text-blue-500 py-2 m-4 font-bold">
                        <div className="pr-2">
                            More
                        </div>
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="#008DCC"/>
                        </svg>
                    </div>
                </button>

                <button className="cardbutton md:w-1/3 p-2 m-2">
                    <h2>Research</h2>
                    <p>We are also exploring new frontiers of digitalization, trust, information security and cyber
                        security in the future internet services and connected devices, pilot new technologies and build
                        new products.</p>
                    <div className="flex items-center text-blue-500 py-2 m-4 font-bold">
                        <div className="pr-2">
                            More
                        </div>
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z" fill="#008DCC"/>
                        </svg>
                    </div>
                </button>

            </section>
        </div>
    );
};