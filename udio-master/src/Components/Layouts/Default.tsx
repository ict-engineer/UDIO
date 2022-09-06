import * as React from 'react';
import {Logo} from "../Logo";
import './layout.css'
interface Props {
    children: React.ReactNode
};

export function Default(props: Props) {
    return (
        <div className="flex h-screen font-roboto bg-udio-gray-100">


            <div className="flex-1 flex flex-col">
                <div className="flex justify-space h-16 bg-udio-blue-900 text-white-900">
                    <button className="w-1/5 p-4">
                        <Logo class=""/>
                    </button>
                    <div className="w-3/5 p-4">

                    </div>
                    <button className="w-1/5 flex justify-around md:justify-end items-center p-4 text-right">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#1AFFC8"/>
                        </svg>
                    </button>
                </div>

                <main className="flex-1 overflow-x-hidden">
                    {props.children}
                </main>
            </div>
        </div>
    );
};