import * as React from 'react';
import Carousel from 'react-elastic-carousel'
import './industries.css';
import { Automotive } from "./Automotive";
import { Manufactoring } from "./Manufactoring";
import { PublicAdministration } from "./PublicAdministration";
import { Telecommunication } from "./Telecommunication";

// import { Automotive } from './Automotive';

interface Props {

};

export function Industries(props: Props) {
    return (
      <div className="bg-udio-blue-700 text-udio-white-100 p-4 text-center my-32">
        <div className="container mx-auto my-12">
          <div className="p-2 m-2">
            <h1>Industries</h1>
          </div>
          <div className="p-2 m-2">
            <p>Explore your industry and see how DTM optimizes our customer's businesses.</p>
          </div>

          <div className="md:hidden">
            <Carousel itemsToShow={1} isRTL={false} showArrows={false}>
            <Automotive/>
            <Manufactoring/>
            <PublicAdministration/>
            <Telecommunication/>
            </Carousel>
          </div>


          <div className="hidden w-full md:flex flex-wrap justify-around mx-2 my-8">
            <Automotive/>
            <Manufactoring/>
            <PublicAdministration/>
            <Telecommunication/>
          </div>
        </div>
      </div>
    );
};
