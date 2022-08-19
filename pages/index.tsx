import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <aside className="overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <div className="flex flex-row p-8 md:p-12 lg:px-16 lg:py-24 bg-gray-900/25">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-gray-900/25">
            <div className="max-w-lg text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                International Conference on Artificial Intelligence and Machine
                Learning IN BIOSCIENCES
              </h2>
              <p className="text-xl max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block">
                8 - 10 December, 2022
              </p>

              <div className="mt-4 sm:mt-8">
                <a
                  className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                  href="#"
                >
                  <span className="text-sm font-medium">
                    {" "}
                    Submit Abstracts{" "}
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Home;
