import React from "react";
import { Parallax } from "react-parallax";

const ParallaxImg = ({ img }) => {
  return (
    <section className="w-full relative my-12">
      <Parallax bgImage={img} strength={500} bgClassName="max-w-full h-auto object-contain">
        <div className="h-[250px] md:h-[300px] lg:h-[400px] w-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            {/* Nội dung bên trong nếu cần */}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default ParallaxImg;
