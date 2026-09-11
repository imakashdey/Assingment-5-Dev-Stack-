import herologo from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-20 md:pt-24">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

       
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold leading-[1.1]">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="text-[#475569] text-sm md:text-base pt-4 pb-8 md:pb-12">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden md:block" />
            next project.
          </p>

          <div className="flex justify-center lg:justify-start gap-3">
            <button className="btn rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-semibold text-xs md:text-sm">
              Explore Technologies
            </button>

            <button className="btn rounded-lg px-8 md:px-10 text-[#374151] font-normal text-xs md:text-sm">
              Learn More
            </button>
          </div>

        </div>

        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={herologo}
            alt="Development Stack"
            className="w-[250px] md:w-[400px] lg:w-[500px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;