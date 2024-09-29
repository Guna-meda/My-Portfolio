import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-transparent">
        <Spline
          scene="https://prod.spline.design/f5hq0dQ75r45UO5h/scene.splinecode"
          className="w-full h-full"
          style={{ minHeight: "400px" }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-5 md:p-10 md:bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold">
          In need of a WEBSITE for your brand? I've got you
        </h1>
        <p className="text-sm md:text-base mt-2">
          "Hey! 👋 I'm Guna, I turn your ideas into slick, functional web
          solutions. Let’s make something your users will love!"
        </p>
      </div>
    </div>
  );
};

export default SplineComponent;
