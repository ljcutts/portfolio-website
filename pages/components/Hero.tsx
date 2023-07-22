import { HiArrowNarrowRight } from "react-icons/hi";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    name?: string;
  }
}

const Hero: React.FC = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Larry Cutts
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Im a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A fullstack developer who has experience in both the web3 and web2 stack. From integrating smart contracts and creating dapps to adding web2 authentication, api routing, and querying/updating to databases. Very comfortable adding functionality to user interfaces. 
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:text-[#0a192f] hover:border-yellow-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
