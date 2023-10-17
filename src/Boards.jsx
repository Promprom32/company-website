import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Fruit from "./assets/fruits.png";
import Verxid from "./assets/ver.png";
import { Link } from "react-router-dom";
import ReadMoreText from "./readmoretext";
const Boards = () => {
  return (
    <div>
      <Nav />
      <div className="flex gap-3  mt-5 justify-center">
        <div>
          <img src={Fruit} alt="fruit-logo" />
        </div>
        <div className="capitalize text-3xl text-[#2C2E2E] font-semibold">
          <h3>board of directors</h3>
        </div>
      </div>
      <div>
        <div>
          <div className="flex  p-10 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-3xl uppercase text-[#2C2E2E] font-semibold">
                  adedayo bankole - md/ceo
                </h3>
                <ReadMoreText
                  text="Mr. Adedayo Bankole is a prominent figure in Nigeria, serving as the Managing Director and Founder of Barnksforte Technologies Limited. His impressive educational background includes an M.Sc. in Leadership and Management and an HND in Insurance and Risk Management. Adedayo Bankole has established himself as a multifaceted professional with diverse interests and expertise.
                  One of his notable achievements is founding Barnksforte Group Ltd, which operates as a parent company overseeing five subsidiary companies, including Barnksforte Technologies Ltd. This entrepreneurial endeavor showcases his vision and leadership in business development and management.
                  Mr. Adedayo is an alumnus of Western Governors University and Polytechnic Ibadan, which underscores his commitment to continuous learning and skill development.
                  His professional journey spans over two decades, during which he has actively participated in various sectors. He possesses extensive knowledge in planning, information, and technology, making him a valuable resource in these areas. His entrepreneurial drive is remarkable, and he firmly believes in the possibilities that can be achieved through strategic vision and hard work.
                  Mr. Adedayo Bankole's contributions extend beyond the business realm. He has managed teams of professionals responsible for the development of innovative software solutions, including the SMART Revenue and Tax system, designed to automate revenue collection processes. His philanthropic endeavors reflect his commitment to giving back to the community, with investments in the health sector, renewable energy, real estate, and general construction projects.
                  Mr. Adedayo Bankole's multifaceted career, leadership, and contributions to various sectors in Nigeria make him a respected and influential figure in the country's business and social landscape.
                  
                  
                  "
                  maxLength={400}
                />
              </div>
            </div>
          </div>
        </div>
        {/* mr mohammed */}
        <div>
          <div className="flex  p-10 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  mr mohammed a. ibrahim
                </h3>
                <ReadMoreText
                  text="Mr. Mohammed A. Ibrahim, born on May 7, 1972, in Katsina State, is a highly accomplished and committed business leader with a remarkable track record spanning over 25 years. With an unwavering dedication to excellence, Mr. Mohammed has consistently demonstrated exceptional skills in nurturing and leading businesses from their inception to becoming thriving and successful ventures. Known for a profound ability to drive growth, foster strategic partnerships, and consistently deliver outstanding results, he possesses a diverse skill set that encompasses team leadership, financial management, and investor relationship management.
                  Committed to driving sustainable solutions and leveraging technology to create a positive impact on industries and communities, Mr. Mohammed is not only a seasoned business leader but also a public servant with a deep commitment to the betterment of society. As a Fellow of the Africa Leadership Initiative – West Africa (ALIWA) and a distinguished member of the Aspen Global Leadership Network, he brings extensive business acumen, strategic vision, and exceptional leadership skills to the table. These qualities enable Mr. Mohammed to provide expert guidance and drive policy development at a strategic level within.
                  
                  
                  
                  "
                  maxLength={400}
                />
              </div>
            </div>
          </div>
        </div>
        {/* mr edgard*/}
        <div>
          <div className="flex  p-10 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  mr edgard a.osuagwu
                </h3>
                <ReadMoreText
                  text="Mr. Edgard A. Osuagwu is a seasoned information systems and business executive with an impressive career spanning over 33 years. His extensive experience encompasses various industries, including Public Sector Government, Financial Services, Professional Services, and Telecommunications.
                  Mr. Ed has held prominent positions on both sides of the technology spectrum, having worked as a vendor/technology provider and as a user/consumer of technology services. His academic qualifications include an MBA, M.S. in Computer Systems, and a B.Eng in Electronic Engineering. Additionally, he is a certified PRINCE 2 Project Management Practitioner and has attended numerous leadership, management, and technical courses.
                  Throughout his career, Mr. Ed has demonstrated a remarkable ability to manage technology initiatives that strategically benefit organizations. He has a strong track record of achieving organizational goals and targets, particularly in the Public Sector, Telecommunications, and Financial Services sectors.
                  Notably, Mr.Ed is the founder of OnePAY Global, an international remittance and payments processing organization, and the co-founder of Saana Corp, a financial payments services firm licensed by the Central Bank of Nigeria. He also serves as the Chief Executive of Oneserve, a leading business technology consulting firm specializing in Technology Consulting and Advisory, Business Process Management, Enterprise Content/Document & Record Management Solutions, and Systems Integration.
                  Mr. Ed's expertise extends to international projects, as he serves as a Senior Expert Resource for the European Union SUFFEGOR Project, focusing primarily on ECDRMS (Enterprise Content/Document & Record Management Solutions) and BPM (Business Process Management).
                  During his tenure at Ecobank Transnational Inc. (ETI), Mr.Ed held various executive management roles within the Group's Operation & Technology subsidiary, including Project Director for the One Bank Initiative, Head of Transaction Bank Support, and Group Lead for Mobile Banking & Payment technology strategy and platform selection. He also led the Group's Business Process Improvement and re-engineering initiatives.
                  Before his time at Ecobank, Mr. Ed served as the Principal Consultant for Digital Bridge, a technology consulting and delivery organization. Prior to that, he was the General Manager responsible for Information Management at MTN Nigeria within the Information Systems Group. His earlier career included leadership roles at Microsoft Nigeria & Ghana, Xerox Global Services UK, Perot Systems Corporation, Bull Information Systems, Information Dimensions, and AT&T Bell Labs (now Lucent Technologies). Ed has a rich history of living and working in both Europe and Africa, contributing significantly to the technology landscape in various capacities.
                  
                  
                  
                  
                  "
                  maxLength={400}
                />
              </div>
            </div>
          </div>
        </div>
        {/* dr ky dele*/}
        <div>
          <div className="flex  p-10 space-x-14">
            <div>
              <img
                src={Verxid}
                alt="verxid-logo"
                className="w-50 h-48 mt-1  object-contain"
              />
            </div>
            <div>
              <div className="p-3 mb-2">
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                  dr. ky dele
                </h3>
                <ReadMoreText
                  text="Dr. Ky Dele is a distinguished recipient of the prestigious President Joseph R. Biden's Lifetime Achievement Award. With a career marked by excellence and achievement, she has established herself as an acclaimed expert, advisor, and consultant.
                  Dr. Ky Dele's impactful work has garnered extensive recognition, with her contributions featured in media outlets worldwide, amassing over one billion impressions. Her media presence includes prominent appearances on CNN, Huffington Post, USA Today, BBC, BET, and numerous other global, national, and local platforms. She has also graced morning television shows on CBS, Fox, NBC, and others. Her work has earned accolades and acknowledgments from esteemed institutions such as the U.S. White House, U.S. Senate Offices, U.S. House of Representatives, U.S. Mayor Offices, and international agencies.
                  Education-wise, Dr. Ky Dele holds a bachelor's degree in political science and international relations from Lincoln University, a master's degree in education from Cheyney University, and a master's degree in clinical psychology from New York University (NYU). Her outstanding contributions to philanthropy and community engagement in the United States earned her an honorary Doctorate of Humane Letters (h.c.).
                  Dr. Ky Dele has harnessed her expertise as a trusted advisor and project consultant in collaborations spanning over 20 countries and involving more than 300 companies, government agencies, and organizations. Her impressive list of associations includes renowned entities like BMW USA, the United Nations (UN), The Biden-Harris Black Engagement Task Force, African Export-Import Bank (Afreximbank), Wells Fargo, Comcast Network, Economic Community of West African States (ECOWAS), National Urban League, National Association for the Advancement of Colored People (NAACP), 100 Black Men of America Inc., African Union Mission To the United States of America (AU), Coca Cola, Jamaica Tourist Board, National Basketball Association (NBA) teams, Democratic National Committee (DNC), Embassy of Nigeria to the United States, National Black Chamber of Commerce (NBCC), Embassy of Ghana to the United States, and many more.
                  She is known for her active involvement in executing international engagement strategies to advance the United Nations Sustainability Development Goals (SDG). Dr. Ky Dele's extensive network spans federal, state, and local elected officials, the African diplomatic corps, corporations from both the private and public sectors, international companies, non-profit organizations, foreign diplomats, high-profile celebrities, and multilateral agencies. Her influential connections reach from the White House to corporate boardrooms and extend across The Americas, The Caribbean, and Africa.
                  
                  
                  
                  
                  
                  
                  
                  
                  "
                  maxLength={400}
                />
              </div>
             
            </div>
          </div>
        </div>
       
       
      </div>
      <Footer />
    </div>
  );
};

export default Boards;
