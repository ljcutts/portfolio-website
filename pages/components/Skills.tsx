

const Skills:React.FC = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 ">
            Skills
          </p>
          <p className="py-4">These Are The Technologies Ive Worked With</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="/typescript.png" alt="" />
            <p className="my-4">Typescript</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="/next3.png" alt="" />
            <p className="my-4">NextJS</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="/nodejs.svg" alt="" />
            <p className="my-4">ExpressJS</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[85px] mx-auto" src="/postgresql.png" alt="" />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src="/ethers.png" alt="" />
            <p className="my-4">EthersJS</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="/chainlink.png" alt="" />
            <p className="my-4">Chainlink</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="/solidity2.svg" alt="" />
            <p className="my-4">Solidity</p>
          </div>
          <div className="shawdow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[7.5rem] mt-1 mx-auto" src="/hardhat.png" alt="" />
            <p className="my-4">Hardhat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills