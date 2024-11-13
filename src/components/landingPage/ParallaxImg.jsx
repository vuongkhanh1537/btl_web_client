import { Parallax } from "react-parallax";

const ParallaxImg = () => {
  return (
    <section className="my-12">
      <Parallax bgImage={'src/assets/parallax.avif'} strength={500}>
        <div style={{ height: 500 }}>
          <div>HTML inside the parallax</div>
        </div>
      </Parallax>
    </section>
  );
};

export default ParallaxImg;
