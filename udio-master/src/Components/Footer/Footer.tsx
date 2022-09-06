import * as React from 'react';
import {Logo} from "../Logo";

interface Props {
    
};

export function Footer(props: Props) {
    return (
        <div>
            <section className="flex flex-wrap bg-udio-petrol-800 text-udio-petrol-200">
                <div className="flex flex-wrap justify-around w-full p-8">
                    <div className="w-full my-2">
                        <Logo/>
                    </div>
                    <div className="w-full my-2">
                        <div className="w-full">
                            <p>+020 1 62 45 00</p>
                        </div>
                        <div className="w-full">
                            <p>info@udio.com</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <p>124 Ermin Street</p>
                    </div>
                    <div className="w-full">
                        <p>WRITHLINGTON</p>
                    </div>
                    <div className="w-full">
                        <p>BA3 3AG</p>
                    </div>
                </div>
                <div className="w-full bg-udio-petrol-900 p-8">
                    <div className="flex flex-wrap justify-around">
                        <a href="#">Contact us</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="flex w-full justify-around text-center p-4">
                        <p>© 2021 UDIO</p>
                    </div>
                </div>
            </section>

</div>
);
};