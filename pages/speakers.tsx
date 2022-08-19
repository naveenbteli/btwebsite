import { Avatar, Button, Image } from "@mantine/core";
import type { NextPage } from "next";

const speakers: Array<{
  name: string;
  photo?: string;
  title: string;
}> = [
  {
    name: "xxxxxx",
    title: "Call for abstracts",
  },
  {
    name: "xxxxxxxxxx",
    title: "Last day for abstract submissions",
  },
  {
    name: "xxxxxxxxxx",
    title: "Screening Process",
  },
  {
    name: "xxxxxxxxx",
    title: "Acceptance Notification",
  },
];

const Speakers: NextPage = () => {
  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="grid place-items-center overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                IMPORTANT DATES
              </h2>
            </div>
            <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Name
                    </th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Photo
                    </th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {speakers.map((speaker) => (
                    <tr
                      key={speaker.name}
                      className="bg-gray-100 hover:bg-gray-200"
                    >
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        {speaker.name}
                      </td>
                      {speaker.photo ? (
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                          <Image src={speaker.photo} alt={speaker.name} />
                        </td>
                      ) : (
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                          <Avatar />
                        </td>
                      )}
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                        {speaker.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Speakers;
