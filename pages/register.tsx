import { Button, Image } from "@mantine/core";
import type { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="flex items-center justify-around overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Registrations</h2>
              <p className="mt-1 text-sm text-gray-300 text-center">
                More Details follow xxx
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:items-center justify-around">
                <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                  <h3 className="mt-4 text-xl font-bold text-white text-center">
                    Registrations Open
                  </h3>
                  <p className="mt-1 text-sm text-gray-300 text-center">
                    17th of August, 2022
                  </p>
                </div>
                <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                  <h3 className="mt-4 text-xl font-bold text-white text-center">
                    Registrations Open
                  </h3>
                  <p className="mt-1 text-sm text-gray-300 text-center">
                    31st of August, 2022
                  </p>
                </div>
              </div>
              <div className="grid place-items-center p-8">
                <Button>
                <h3 className="p-4 text-xl font-bold text-white text-center">
                  REGISTER NOW
                </h3>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Register;
