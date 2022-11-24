import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export const MyImg = ({ selProduct }) => (
    <LazyLoadImage 
    className='prodImg'
      alt={selProduct.name}
      effect="blur"
      src={selProduct.imgUrl} />
  );