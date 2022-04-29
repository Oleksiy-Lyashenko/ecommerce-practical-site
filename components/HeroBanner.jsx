import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { urlFor } from '../lib/client';

const HeroBanner = ({ herrobanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{herrobanner.smallText}</p>
        <h3>{herrobanner.middleText}</h3>
        {console.log(herrobanner)}
        {/* <Image src="/" alt="headphones" className="hero-banner-image" /> */}
        <img src={urlFor(herrobanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="/product/ID" passHref>
            <button className="button">button text</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;