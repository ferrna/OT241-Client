import React from "react";
import { v4 as uuidv4 } from 'uuid'

const partnersImages = [
    '/images/partner-01.png',
    '/images/partner-02.png',
    '/images/partner-03.png',
    '/images/partner-04.png',
    '/images/partner-06.png',
    '/images/partner-07.png',
]

function Partners() {
  return (
      <div className="position-absolute z-20 container d-flex align-items-center flex-column fs-3 fw-semibold mt-2" style={{top: '0px', left:'0px', right: '0px', bottom: '0px'}}>
          <div className="w-100 d-flex flex-wrap justify-content-evenly">
              {partnersImages.map(partner => (
                  <div
                      style={{ height: '80px', padding: '2rem'}}
                      key={uuidv4()}
                  >
                      <img src={partner} alt="Partner" style={{ height: '40px', filter: 'drop-shadow(-1px 0px 1px #000)'}} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Partners;
