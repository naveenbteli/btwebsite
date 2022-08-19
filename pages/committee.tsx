import { Accordion } from "@mantine/core";
import { Avatar } from "@mantine/core";
import React from "react";

type Mem = {
  label: string;
  members: {
    name: string;
    post?: string;
    imgLink?: string;
  }[];
};

const committeeMembers: Mem[] = [
  {
    label: "Chief Patron",
    members: [
      {
        name: "Dr. M. P. Shyam",
        post: "President, RSST.",
        imgLink:
          "https://www.ssmrv.edu.in/wp-content/uploads/2020/11/Dr.-M.P-Shyam-300x223.png",
      },
    ],
  },
  {
    label: "Patron",
    members: [
      {
        name: "Sri. K. G. Subbarama Setty	",
        post: "Hon. Treasurer, RSST.",
      },
      {
        name: "Sri. A.V.S. Murthy",
        post: "Hon. Secretary, RSST.",
        imgLink: "https://www.rvcn.edu.in/wp-content/uploads/2021/08/n2.jpg",
      },
      {
        name: "Sri. D.P.Nagaraj",
        post: "Hon. Joint Secretary, RSST.",
      },
      {
        name: "Sri Dr. K N Subramanya",
        post: "Principal, RVCE.",
        imgLink: "https://rvce.edu.in/sites/default/files/Principal-knrv2.png",
      },
    ],
  },
];

function committee() {
  return (
    <div> 
      <h2 className="text-4xl sm:text-5xl text-center font-medium">
        Committee
      </h2>
      <div className="space-y-4">
        {committeeMembers.map((committeeMember, index) => {
          return (
            <div key={index}>
              <h2 className="text-2xl font-bold text-center">
                {committeeMember.label}
              </h2>
              <Accordion>
                <Accordion.Item value={committeeMember.label}>
                  {committeeMember.members.map((member, index) => {
                    return (
                      <>
                        <div className="grid grid-col-3">
                          {index + 1}.
                          <a className="block mt-2 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200">
                            <div className="flex flex-col items-center justify-between sm:flex-row">
                              <div>
                                <Avatar
                                  src={member.imgLink}
                                  alt="no image here"
                                  color="indigo"
                                  size={200}
                                />
                              </div>
                              <div>
                                <h6 className="mt-2 font-bold">
                                  {member.name}
                                </h6>
                                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                  {member.post}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default committee;
