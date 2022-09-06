import * as React from 'react';

interface Props {
    
};

export function Header(props: Props) {
    return (
        <div>
            <section className="bg-udio-blue-700 text-udio-white-100 pt-8">
                <div className="container mx-auto flex flex-wrap">

                    <div className="flex flex-wrap items-center w-full md:w-2/3">
                        <div className="w-full font-bold p-4">
                            <p>Faster & Cheaper Transactions</p>
                            <h1 className="font-3xl my-8">
                                Trusted digital transactions
                            </h1>
                            <p>e-Signature | e-Archives | e-Invoices</p>
                        </div>

                        <div className="flex flex-wrap justify-around md:justify-start w-full">
                            <div className="w-full p-4 h-auto overflow-ellipsis text-center md:text-left">
                                Supporting our clients implementing digital future
                            </div>
                            <div className="flex justify-start items-center">
                                <button className="bg-udio-blue-900 py-2 px-8 m-4 font-bold shadow">EXPLORE UDIO
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-around md:justify-start w-full md:w-1/3 px-4 pt-12">
                        <img src="/images/udiomobilescreen.png"/>
                    </div>
                </div>
            </section>
        </div>
    );
};