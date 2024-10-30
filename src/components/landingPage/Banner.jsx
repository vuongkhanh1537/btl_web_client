import { useNavigate } from "react-router-dom";
import Image from "../../assets/homepage.svg";
const Banner = () => {
  const navigate = useNavigate();
  const ShoeForMen = () => {
    navigate("/products");
  };
  const ShoeForWomen = () => {
    navigate("/products");
  };
  const ShoeForKids = () => {
    navigate("/products");
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="text-center p-4 sm:p-10 flex flex-col gap-10 md:flex-row md:flex-wrap items-center justify-center">
        <div className="basis-1/3 flex-1">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-300 mb-4 capitalize">
            <p className="text-indigo-600 text-4xl lg:text-[66px] font-medium leading-none">
              Strike Zone
            </p>{" "}
            dream footwear store
          </h1>
          <p className="mb-8 px-[0.5rem] lg:mx-10 text-justify font-normal text-base md:text-xl dark:text-gray-300">
            Strike Zone is the ultimate footwear destination for shoe
            enthusiasts. Our collection covers every occasion, from cozy
            sneakers and comfy slippers to styles for a night out or a day in.
            Whether it's a quick errand, a journey across continents, or just a
            need for something durable, comfortable, and eco-friendly, Strike
            Zone has exactly what you need to keep you relaxed and stylish,
            wherever you are.
          </p>
          <div className="flex gap-1 items-center justify-around py-2">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-3 lg:max-w-[162px] rounded-lg text-white text-lg"
              onClick={ShoeForMen}
            >
              Men Shoes
            </button>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-3 lg:max-w-[162px] rounded-lg text-white text-lg"
              onClick={ShoeForWomen}
            >
              Women Shoes
            </button>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-3 lg:max-w-[162px] rounded-lg text-white text-lg hidden sm:inline-block"
              onClick={ShoeForKids}
            >
              Kids Shoes
            </button>
          </div>
        </div>
        <div className="basis-1/3 flex-1">
          <div
            style={{
              backgroundImage:
                "linear-gradient(360deg, #db506e 0%, #fe3e69 75%)",
            }}
            className="m-auto bg-white rounded-full w-[21rem] h-[21rem] relative overflow-hidden md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem]"
          >
            <img
              className="cursor-pointer scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
              width={620}
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
