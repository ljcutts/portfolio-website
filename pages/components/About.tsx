

const About: React.FC = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. Im Larry, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I started my journey as someone who was intrigued by blockchain technology and learned smart contract development. I am passionate about crypto and believe can change the way in which we think about digital cash. I have then dived deep into API integration and how authetication and traditional databases work in the web2 space.
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
 
}

export default About