'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Need to install... maybe do it by hand so we dont rely on a external library

// const images = [
//     "https://images.unsplash.com/photo-1573574635896-36753f4e38bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
//     "https://images.unsplash.com/photo-1595878809290-e1d8503caedf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdc9%2F277%2Fac6%2Fdc9277ac614782dac6b8b32eca7417d0.jpg",
//     "https://images.unsplash.com/photo-1591822532583-87b8bd6538ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80/wp-content/uploads/2022/05/campo_1.jpg"
// ];

const ImageCarousel = ({images}) => {
  return (
    <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img className="w-full h-96 object-cover"
           src={imageUrl} alt={`Image ${index}`}
            />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;