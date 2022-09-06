import * as React from 'react';

interface Props {
    
};

export function About(props: Props) {
    return (
        <div>
            <section className="p-4 text-center my-32">
                <div className="container mx-auto">
                    <div className="p-2 m-2">
                        <h1>What we do</h1>
                    </div>
                    <div className="p-2 m-2 font-bold">
                        <p>Delivering next generation Digital Transaction Management</p>
                    </div>
                    <div className="p-2 m-2">
                        <p>for frictionless processes and digital first businesses.</p>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <button className="bg-udio-blue-900 py-2 px-8 m-4 font-bold shadow">EXPLORE HOW WE DO IT</button>
                </div>
            </section>
        </div>
    );
};