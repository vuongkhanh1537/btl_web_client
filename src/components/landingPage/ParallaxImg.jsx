import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImg = () => {
  return (
    <section className="w-full relative my-12">
      <Parallax
        bgImage={'src/assets/parallax.avif'}
        strength={500}
        className="w-full"
        // renderLayer={percentage => (
        //   <div
        //     className="absolute inset-0 flex items-center justify-center"
        //     style={{
        //       transform: `scale(${1 + percentage * 0.3})`,
        //       opacity: percentage
        //     }}
        //   >
        //     <div className="text-white text-center p-4">
        //       <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
        //         Your Title Here
        //       </h2>
        //       <p className="text-base md:text-lg lg:text-xl">
        //         Your subtitle or description here
        //       </p>
        //     </div>
        //   </div>
        // )}
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