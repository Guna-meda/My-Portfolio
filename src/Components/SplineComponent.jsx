import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-three">
        <Spline
          scene="https://prod.spline.design/f5hq0dQ75r45UO5h/scene.splinecode"
          className="w-full h-full"
          style={{ minHeight: "400px" }}
        />
      </div>

      <div className="  w-full md:w-1/2 flex flex-col justify-center items-start p-5 pb-2 md:p-10 md:bg-one gap-20">
        <h1 className="text-4xl md:text-4xl font-bold text-two font-poppins">
          In need of a WEBSITE for your brand?
        </h1>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-4xl md:text-3xl font-bold text-slate-900 font-poppins ">
            I've got you covered
          </h1>
          <p className="text-3xl  mt-2 md:text-2xl font-sofia text-">
            "Hey! 👋 I'm Guna, I turn your ideas into slick, functional web
            solutions. Let’s make something your users will love!"
          </p>
        </div>
      </div>
      <button className="bg-two w-1/3 m-5 hover:bg-four text-one font-bold py-2 px-4 rounded-md text-xl">
        Contact
      </button>
    </div>
  );
};

export default SplineComponent;
