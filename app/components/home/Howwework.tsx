import React from "react";

type Props = {};

const Howwework = (props: Props) => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-2 md:px-10 md:py-2 lg:py-4">
          <div className="mx-auto w-full max-w-3xl">
            <div className="text-center">
              <p className="uppercase text-[#1353fe]">3 easy steps</p>
              <h2 className="text-3xl font-semibold capitalize md:text-5xl">
                How SpringBee
                <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
                  helps
                </span>
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                Empowering startups to thrive in the digital wilderness with expert technical guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid dark:bg-[#d4d4d4] dark:text-[#343333] border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">1</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Connect</p>
              <p className="text-sm text-[#636262]">
              Schedule a Personalized Consultation tailored to your Needs

              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
              />
            </div>

            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center  dark:bg-[#d4d4d4] dark:text-[#343333] rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">2</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Create</p>
              <p className="text-sm text-[#636262]">
              Design Customized Technical Solutions aligning with your Objectives
              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto"
              />
            </div>

            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5  dark:bg-[#d4d4d4] dark:text-[#343333] flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                <p className="text-xl font-bold">3</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Configure</p>
              <p className="text-sm text-[#636262]">
              Individualize an Ideal Innovative Solution for your Startup
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howwework;
