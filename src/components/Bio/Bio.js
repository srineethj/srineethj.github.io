import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import { BIO } from "../../constants/bio";
import React, { useState } from 'react';
import "./Bio.css";
import Tooltip from '@mui/material/Tooltip';

export const Bio = () => {
  const [randomID, setRandomID] = useState(String(Math.random()))

  return (
    <section className="container container-lines">
      <p className="purple-text">
        <span className="purple-smoke-text">Experience</span>{" "}
      </p>
      <div className="line"></div>

      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="purple-text">{e.year}: </span>

          <span className="white-text" data-tip={"soo cuteeeee"} data-for={randomID}>

            {e.title.cargo}
            {/* {e.title.cargo} at {e.title.name} */}

            {/* {e.title.cargo} */}
            <BioDetails name={e.title.name} description={e.description} items={e.details}/>
            
            {/* <ReactTooltip id={randomID} getContent={(dataTip) => `This little buddy is ${dataTip}`}
                place="top"
                effects="float"
                className="custom-theme"
            >

            <BioDetails name={e.title.name} description={e.description} items={e.details}/>   

            </ReactTooltip> */}
          </span>

          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
