import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import winter from '../style/download.jpg';

const Lazy = () => {
  return (
    <div>
      <h3>image loading</h3>
      <p><b>this is image loading</b></p>
      <br />
      <LazyLoadImage
        src={winter}
        width={"34%"}
        height={"40%"}
        alt='sorry unable to load...!'
      />
    </div>
  );
}

export default Lazy;
