import React from "react";

function contact() {
  return (
    <>
      <aside className="text-white overflow-hidden bg-[url(https://www.educationworld.in/wp-content/uploads/2013/06/Untitled-design-4-1.jpg)] bg-center bg-no-repeat bg-cover min-h-screen">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin"
                  width="1200"
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="lg:py-24">
                <h2 className="text-5xl font-bold sm:text-4xl">Contact Us</h2>
                <p className="mt-4 font-bold bg-gray-900/50 w-fit p-2">
                  Email Address
                </p>
                <p className="mt-4 font-bold bg-gray-900/50 w-fit p-2">
                  bioaiml2022@rvce.edu.in
                </p>
                <p className="mt-4 font-bold bg-gray-900/50 w-fit p-2">
                  Phone Number
                </p>
                <p className="mt-4 font-bold bg-gray-900/50 w-fit p-2">
                  (123) 456-7890
                </p>
                <p className="text-2xl font-bold">
                  R. V. College of Engineering
                </p>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}

export default contact;
