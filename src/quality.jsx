import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const quality = () => {
  return (
    <div className="bg-[#636768]">
      <Nav />
      <div
        className="bg-[#3AC1EF]"
        style={{ padding: "1rem", paddingLeft: "7rem" }}
      >
        <h3 className="text-2xl capitalize text-[#fff] font-semibold">
          career
        </h3>
      </div>
      <div className=" pl-10 w-full h-full bg-[#888B8C] items-center flex justify-between  ">
        <div className="flex  gap-5 justify-center items-center">
          <Link className="text-[#6E6F70] text-2l" to="/career/career">
            <AiOutlineLeft className="bg-[#313131]  w-8 h-8 rounded-full" />
          </Link>
          <div className="flex flex-col px-2 py-2 items-center">
            <div>
              <h3 className="capitalize text-2l text-white font-bold">
                quality assurance specialist
              </h3>
            </div>
            <div className="flex-col" style={{ paddingRight: "3rem" }}>
              <p className="capitalize text-2l text-base  text-white">
                work time: full time
              </p>
            </div>
          </div>
        </div>
        <div className="p-8  mr-20">
          <button className="bg-[#37CF17] text-[#fff] shadow-2xl font-bold py-2 px-6 rounded">
            Apply Now
          </button>
        </div>
      </div>
      <div className="bg-[#636768]">
        <div className="mt-4 flex flex-col px-10 py-5">
          <h3 className="capitalize text-2l text-[#fff]">
            the quality assurance specialist complies with defined quality
            standards and ensures that every assigned products meets the
            established standards of quality including reliability, security,
            usability and performance. the successful candidate will develop and
            execute exploratory and automated tests to ensure all products meets
            the established standards of quality.
          </h3>
        </div>
        <div className="flex flex-col px-10 py-5">
          <div className="text-[#fff] capitalize text-3l font-bold">
            <h3>responsibilities</h3>
          </div>
          <div className="flex-col mt-2 text-[#fff]">
            <p>
              - Running manual and automated tests including, but not limited to
              stress testing, performance testing, functional testing,
              scalability testing
            </p>
            <p>
              - Effectively communicating/presenting findings to software
              development and business user teams including technical and
              non-technical stakeholders
            </p>
            <p>
              - Responsible for maintaining all the quality control and
              assurance artifacts.
            </p>
            <p>
              - Create detailed, comprehensive, and well-structured test plans
              and test cases
            </p>
            <p>
              - Estimate, prioritize, plan and coordinate testing activities
            </p>
            <p>
              - Design, develop and execute automation scripts using open-source
              tools
            </p>
            <p>- Identify, record, document thoroughly, and track bugs</p>
            <p>- Perform thorough regression testing when bugs are resolved</p>
            <p>
              - Develop and apply testing processes for new and existing
              products to meet client needs
            </p>
            <p>
              - Liaise with internal teams (e.g., developers and product
              managers) to identify system requirements
            </p>
            <p>- Monitor debugging process results</p>
            <p>
              - Investigate the causes of non-conforming software and train
              users to implement solutions
            </p>
            <p>
              - Track quality assurance metrics, like defect densities and open
              defect counts
            </p>
            <p>- Stay up-to-date with new testing tools and test strategies</p>
            <p>- Accountability</p>
          </div>
        </div>
        <div className="flex flex-col px-10 py-5">
          <div className="text-[#fff] capitalize text-3l font-bold">
            <h3>experience/skills/certifications</h3>
          </div>
          <div className="flex-col mt-2 text-[#fff]">
            <p>
              - A good academic background with a minimum of B.Sc. in Computer
              Science, Computer Engineering, Management Information Systems,
              Mathematics, Statistics or any related fields. Additional
              qualifications and related certifications would be an advantage.
            </p>
            <p>
              - ISTQB foundational level certificate or similar certification is
              required
            </p>
            <p>
              - 3 years of demonstrated/hands-on software testing and software
              development experience in a formal SDLC and/or Agile environment
            </p>
            <p>
              - Experience working with various testing tools for various
              environments
            </p>
            <p>
              - Demonstrated experience in designing, updating & executing test
              cases
            </p>
            <p>
              - Passion for technology, curiosity, problem-solving skills, and
              ability to work with varying Stakeholders
            </p>
            <p>- Identify, record, document thoroughly, and track bugs</p>
            <p>- Perform thorough regression testing when bugs are resolved</p>
            <p>- Excellent verbal and written communication skills</p>
            <p>
              - Attention to detail with the ability to deliver excellent work
              on tight schedules
            </p>
            <p>
              - The Successful candidate must be able to dive into the module to
              test it completely – like break the code!
            </p>
            <p>
              - The Successful candidate must think beyond what is expected of
              the software and think about how users can misuse the software
              i.e., finding loopholes.
            </p>
            <p>
              - The Successful candidate must not only be aware of different
              testing techniques but also must have worked on at least some
              testing techniques.
            </p>
            <p>
              - The Successful candidate must always be able to communicate most
              effectively and efficiently on any issues discovered in the course
              of testing to the development team.
            </p>
            <p>
              - The Successful candidate should have the capability to recognize
              and resolve unfamiliar problems and should formulate a strategy to
              validate them.
            </p>
            <p>
              - The Successful candidate must be able to prioritize features and
              test cases that are to be tested.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default quality;
