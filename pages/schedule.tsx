import { Button, Image, Timeline } from "@mantine/core";
import type { NextPage } from "next";
import CustomTimeLine from "../components/TimeLine";

const Schedule: NextPage = () => {
  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="grid place-items-center overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl my-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent underline">
                SCHEDULE
              </h2>
            </div>
            <CustomTimeLine />
          </div>
        </section>
      </aside>
    </>
  );
};

export default Schedule;
