import React from 'react';
import Link from 'next/link';

import { urlFor  } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, product, largeText1, largeText2, desc, saleTime, smallText, middleText, buttonText, image } }) => {
  // console.log(footerBanner);

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{middleText}</h3>
          <p>{desc}</p>

          <Link href={`/product/${product}`} passHref>
            <button className='product'>{buttonText}</button>
          </Link>

          <img src={urlFor(image)} className='footer-banner-image' />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;