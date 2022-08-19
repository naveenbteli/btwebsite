import { Button, Image } from "@mantine/core";
import type { NextPage } from "next";

const Themes: NextPage = () => {
  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="grid place-items-center overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Conference Themes
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  1. Diagnostics and Diseases in HPCC
                </h3>
              </div>
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  2. Artificial Intelligence and Machine Learning in Genomics
                </h3>
              </div>
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  3. Drug Discovery
                </h3>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Themes;
