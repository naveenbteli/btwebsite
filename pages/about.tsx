import { Button, Image } from "@mantine/core";
import type { NextPage } from "next";
import React from "react";

const About: NextPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* //https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png */}
      <aside className="grid place-items-center overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  R. V. COLLEGE OF ENGINEERING
                </h3>

                <p
                  className={`mt-1 text-sm text-gray-300 text-center ${
                    !open ? "hidden" : ""
                  }`}
                >
                  <div className="grid place-items-center">
                    <Image
                      src="https://rvce.edu.in/sites/default/files/logo_0.png"
                      alt="RVCE Logo"
                      height={65}
                      width={65}
                    />
                  </div>
                  R.V. College of Engineering (RVCE), established in 1963, is
                  one of the oldest self-financing premier institutions in the
                  country. It is an Autonomous Institution, Affiliated to
                  Visvesvaraya Technological University (VTU), Belagavi. The
                  institution is managed by Rashtreeya Sikshana Samithi Trust
                  (RSST), a nonprofit Trust. Currently, the institution offers
                  12 bachelor, 16 master programs and all the departments have
                  been recognized as research centres, affiliated to VTU,
                  Belagavi. The institution is accredited by NAAC. All the UG
                  programs and eligible PG programs have been accredited
                  multiple times by NBA. The College currently has student
                  strength more than 5500, faculty strength of above 375,
                  technical & administrative staff of about 225 and around 200
                  research scholars are pursuing Ph.D. The institution has filed
                  43 patents since last three years, of which 27 patents have
                  been published in the gazette of Indian Patent journal.
                </p>
                <div className="flex flex-row justify-center mt-5">
                  <Button onClick={() => setOpen((open) => !open)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />{" "}
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  THE CONFERENCE
                </h3>

                <p className="mt-1 text-sm text-gray-300 text-center hidden">
                  The International conference on “Healthcare using Artificial
                  Intelligence and Machine Learning” primarily focuses on
                  identifying multiple ways to integrate the two distinct
                  domains, thereby changing the global outlook on healthcare.
                  This conference emphasises on bringing experts to discuss the
                  emerging trends and recent challenges in the field. It also
                  focuses on contributing to the healthcare sector and equips
                  the research community for the future.
                </p>
                <div className="flex flex-row justify-center mt-5">
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />{" "}
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="block p-8 bg-blue-900/50 shadow-xl rounded-xl hover:shadow-indigo-500/10 hover:border-indigo-500/10">
                <h3 className="mt-4 text-xl font-bold text-white text-center">
                  BANGALORE BIOINNOVATION CENTRE
                </h3>

                <p className="mt-1 text-sm text-gray-300 text-center hidden">
                  <div className="grid place-items-center">
                    <Image
                      src="https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png"
                      alt="BIC Logo"
                      height={65}
                      width={175}
                    />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  eleifend tincidunt euismod. Nunc neque lacus, auctor quis
                  egestas sollicitudin, vestibulum eget sem. Nulla congue
                  tincidunt pellentesque. Vivamus eget nunc massa. Nam sit amet
                  orci quis mauris bibendum aliquam. Nullam ut placerat lacus.
                  Duis feugiat lacinia risus, vitae rhoncus dolor aliquam sit
                  amet. Ut mollis placerat leo.
                </p>
                <div className="flex flex-row justify-center mt-5">
                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />{" "}
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default About;
