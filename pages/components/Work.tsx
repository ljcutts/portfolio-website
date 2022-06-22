import Link from "next/link";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-300">
            Work
          </p>
          <p className="py-6">
            Check Out Some Of My Recent Work(First 3 are Web3, Other 3 are Web2
            Projects)
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-ljcrypto group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-sm whitespace-nowrap font-bold text-white tracking-wider">
                LJCrypto-Exchange(Portfolio Project)
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ljcrypto-exchange.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/LJCrypto-Exchange">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-defiExchange group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                LearnWeb3Dao Defi-Exchange
              </span>
              <div className="pt-8 text-center">
                <Link href="https://my-defi-exchange.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/My-Defi-Exchange">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-randomWinner group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                LearnWeb3Dao RandomWinnerGame
              </span>
              <div className="pt-8 text-center">
                <Link href="https://random-winner-with-subgraphs.vercel.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/RandomWinner-With-Subgraphs">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-jobFiltering group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Job Filtering
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ljcutts-job-listings-with-filtering.netlify.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/job-listings-with-filtering">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] bg-ipAddress group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                IP-Address-Tracker
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ljcutts-ip-address-tracker.netlify.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/ip-address-tracker">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] bg-commentsSection group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base whitespace-nowrap font-bold text-white tracking-wider">
                Interactive-Comments-Section
              </span>
              <div className="pt-8 text-center">
                <Link href="https://ljcutts-interactive-comments-section.netlify.app/">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </Link>
                <Link href="https://github.com/ljcutts/interactive-comments-section">
                  <a target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
