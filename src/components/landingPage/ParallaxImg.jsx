import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImg = ({img}) => {
  return (
    <section className="w-full relative my-12">
      <Parallax
        bgImage={img}
        strength={500}
        className="max-w-full max-h-full object-cover"
      >
        <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default ParallaxImg;