import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import Verxid from "./assets/ver.png";
import Fruit from "./assets/fruits.png";
import "../src/index.css";
import { Link } from "react-router-dom";
import ReadMoreText from "./readmoretext";

const management = ({}) => {
  return (
    <div>
      <Nav />
      <div className="flex gap-3 justify-center mt-5">
        <div>
          <img src={Fruit} alt="fruit-logo" />
        </div>
        <div className="capitalize text-3xl text-[#2C2E2E] font-semibold">
          <h3>our management</h3>
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
                <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold">
                  coo
                </h3>

                <ReadMoreText
                  text=" coo is an accomplished technology leader currently serving as the Chief Technical Officer (CTO) at Barnksforte Technologies Limited, Abuja, Nigeria. With a career spanning over two decades, he has consistently demonstrated his expertise in software development, project management, and consulting. Prior to his role at Barnksforte, Demir held the position of CTO at a Company of 650+ developers spread all over the world. In this capacity, he skillfully led a team of highly talented software engineers, architects, and designers to deliver cutting-edge solutions to clients across diverse industries. 
                  Demir Selmanovic's educational journey began at Sarajevo University, Faculty of Mathematics and Science, where he pursued a degree in Computer Science from 1980 to 2002. This solid foundation in academia laid the groundwork for his subsequent success in the technology sector. In May 2018, Demir Selmanovic founded Arslan Consulting, where he serves as the CTO, further showcasing his entrepreneurial spirit and commitment to innovation.
                   His expertise extends beyond founding companies, as he also contributed significantly as the Chief Architect/VP of Engineering at Leverage in New York in 2021. Between 2014 and 2018, Demir held the position of Head of Content at Toptal, demonstrating his versatility in leadership roles. In 2016, he temporarily assumed the role of interim VP of Engineering at Labster, highlighting his adaptability and commitment to delivering results. From 2007 to 2014, he was the Developer Manager at DevLogic, where he spearheaded multiple development teams, managed processes, and ensured stringent quality control. During this time, Demir also offered invaluable consultancy services to clients, focusing on business process optimization and IT systems enhancement. Earlier in his career, he served as a Developer at 4th Dimension from 2004 to 2007 and held the position of IT Manager at BIHMAK from 2001 to 2004. Prior to that, he was a Developer at DSD from 1999 to 2001. These roles contributed to his extensive knowledge and experience in the software development field. 
                  Throughout his professional journey, Demir has remained steadfast in his dedication to creating scalable, secure, and user-friendly products that address real-world challenges and bring value to end-users. Additionally, he is passionate about mentoring and coaching fellow developers, sharing his vast knowledge and insights through various platforms such as blogs, podcasts, and webinars. Demir Selmanovic's impressive career trajectory and commitment to technological innovation make him an influential figure in the field of software development and digital transformation. 
                  His leadership at Barnksforte Technologies Limited is a testament to his continued dedication to excellence in the industry.
                  
                  "
                  maxLength={250}
                />
              </div>
            </div>
          </div>
        </div>
        {/* mr demir */}
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
                  demir selmanovic - chief technical officer
                </h3>
                <ReadMoreText
                  text=" Demir Selmanovic is an accomplished technology leader currently serving as the Chief Technical Officer (CTO) at Barnksforte Technologies Limited, Abuja, Nigeria. With a career spanning over two decades, he has consistently demonstrated his expertise in software development, project management, and consulting. Prior to his role at Barnksforte, Demir held the position of CTO at a Company of 650+ developers spread all over the world. In this capacity, he skillfully led a team of highly talented software engineers, architects, and designers to deliver cutting-edge solutions to clients across diverse industries. 
                  Demir Selmanovic's educational journey began at Sarajevo University, Faculty of Mathematics and Science, where he pursued a degree in Computer Science from 1980 to 2002. This solid foundation in academia laid the groundwork for his subsequent success in the technology sector. In May 2018, Demir Selmanovic founded Arslan Consulting, where he serves as the CTO, further showcasing his entrepreneurial spirit and commitment to innovation.
                   His expertise extends beyond founding companies, as he also contributed significantly as the Chief Architect/VP of Engineering at Leverage in New York in 2021. Between 2014 and 2018, Demir held the position of Head of Content at Toptal, demonstrating his versatility in leadership roles. In 2016, he temporarily assumed the role of interim VP of Engineering at Labster, highlighting his adaptability and commitment to delivering results. From 2007 to 2014, he was the Developer Manager at DevLogic, where he spearheaded multiple development teams, managed processes, and ensured stringent quality control. During this time, Demir also offered invaluable consultancy services to clients, focusing on business process optimization and IT systems enhancement. Earlier in his career, he served as a Developer at 4th Dimension from 2004 to 2007 and held the position of IT Manager at BIHMAK from 2001 to 2004. Prior to that, he was a Developer at DSD from 1999 to 2001. These roles contributed to his extensive knowledge and experience in the software development field. 
                  Throughout his professional journey, Demir has remained steadfast in his dedication to creating scalable, secure, and user-friendly products that address real-world challenges and bring value to end-users. Additionally, he is passionate about mentoring and coaching fellow developers, sharing his vast knowledge and insights through various platforms such as blogs, podcasts, and webinars. Demir Selmanovic's impressive career trajectory and commitment to technological innovation make him an influential figure in the field of software development and digital transformation. 
                  His leadership at Barnksforte Technologies Limited is a testament to his continued dedication to excellence in the industry.
                  
                  
                  "
                  maxLength={250}
                />
              </div>
            </div>
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
                  <h3 className="text-2xl uppercase text-[#2C2E2E] font-semibold custom-text">
                    benedicta kentebe - human resource director
                  </h3>
                  <ReadMoreText
                    text=" Benedicta Kentebe is a Certified Professional in Human Resources (PCHRM, SPHRi). Her extensive experience as a Lead, HR generalist with a demonstrated history of working in various industries and encompasses a wide array of critical areas in HR, including employee recruitment and retention, talent management, employee engagement, conflict resolution, benefits and compensation management, performance management, HR policy development, and legal compliance. Her expertise transcends mere textbook knowledge, as she has consistently translated theory into practice, generating positive impacts within every organization she has served.
                    Benedicta earned her Bachelor's degree in Social Sciences and a Master’s degree in Management Information Systems from the United States International University, San Diego, California, a prestigious institution known for its global perspective and academic rigor. This early academic journey was just the beginning of her quest for knowledge and professional growth as a young adult.
                    Continuing her pursuit of excellence, Benedicta pursued a second post-graduate Paralegal degree from the University of San Diego, California, a renowned institution recognized for its emphasis on cutting-edge research and practical application of knowledge. This advanced education equipped her with the skills and insights necessary to excel in the complex and ever-evolving field of Human Resources and the legal field.
                    One of her hallmarks is her adeptness at negotiating win-win compromises, which has not only fostered harmony among team members but has also contributed significantly to the overall organizational success. Benedicta's innovative thinking has given birth to teambuilding programs that have proven to be instrumental in enhancing collaboration and productivity. Her remarkable writing skills are evident in the creation of comprehensive personnel manuals, corporate policies, job descriptions, and management reports, all of which have played pivotal roles in shaping her organizations.
                    Currently, Benedicta Kentebe holds the prestigious position of Director of Human Resources & Admin at Barnksforte Technologies Limited. In this role, she orchestrates the human resources and administrative functions, driving the company towards an era of unparalleled success. Her strategic vision, coupled with her operational excellence, has positioned her as a trusted leader within the organization.
                    
                  
                  "
                    maxLength={250}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* kentebe */}
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
                  oluwatoyin o. ayo-ayotade - executive project manager / scrum
                  master
                </h3>
                <ReadMoreText
                  text=" Oluwatoyin O. Ayo-Ayotade is a highly skilled professional in the information technology industry, specializing in Project and Product Management, Agile and Scrum methodologies, and Business Development. Her extensive experience encompasses the successful management and delivery of various projects, products, and business development initiatives. She is also known for her expertise in information and data visualization, storytelling, and presentation.
                    Currently serving as the Executive Project Manager at Barnksforte Technologies Limited, Oluwatoyin is responsible for overseeing software project delivery, product management, and leading cross-functional technical teams. She assumed this role in 2023.
                    Prior to her current position, Oluwatoyin held the position of Head of Project Management at Alliance Consulting, where she effectively managed a portfolio of 18 live projects, oversaw the development of five new applications, and facilitated the integration of 11 third-party solutions.
                    Her career journey includes a significant tenure at AlphaBeta Consulting, where she joined in 2008 as Manager of Software Development. Over time, she took on various management roles within the organization and eventually became the Deputy Head of Business Development & Consultancy Services, responsible for managing the company's product line.
                    Before her time at AlphaBeta Consulting, Oluwatoyin gained valuable experience working at renowned companies such as Procter & Gamble and Hewlett Packard between 2004 and 2006.
                    Oluwatoyin's educational background is equally impressive, with a Bachelor of Science degree in Electronics & Computer Engineering from Lagos State University and an MBA with specialization in Digital Marketing & Business Transformation from Rome Business School, Italy. She has also obtained a range of professional certifications, including OCA, FitSM, COBIT 5, CSSGB, SMC, SPOC, AWS CCP, ITIL, DevOps Generalist, and is a member of the Project Management Institute (PMI) with Member ID 1075663.
                    Her diverse skill set and extensive experience make Oluwatoyin O. Ayo-Ayotade a valuable asset in the information technology industry, where she excels in project and product management, business development, and leveraging technology for business transformation.
                    
                    
                  
                  "
                  maxLength={250}
                />
              </div>
            </div>
          </div>
        </div>
        {/* mrs toyin */}
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
                  sandra golen - director legal/company secretary
                </h3>
                <ReadMoreText
                  text="Sandra Golen is a highly accomplished and seasoned legal professional in Nigeria, with over 7 years of extensive experience. She holds an LLB degree from the University of Jos and is a certified B.L holder from the Nigerian Law School. Furthermore, Sandra is currently pursuing her Master of Laws (LLM) degree, further enhancing her legal qualifications.
                  As a solicitor and advocate admitted to the Supreme Court of the Federal Republic of Nigeria, Sandra possesses a robust foundation in various legal domains. Her areas of expertise encompass Corporate Law, Technology Law, Real Estate, and Board Advisory.
                  Sandra is widely recognized for her unwavering commitment to upholding the highest ethical standards within her legal practice. She is renowned for her diligent advocacy on behalf of clients and her track record of successfully representing them in a diverse array of intricate and demanding legal cases.
                  In her current role, Sandra serves as the principal corporate representative for Barnksforte, where she plays an instrumental role in providing invaluable legal counsel and guidance. Additionally, she holds the esteemed position of Company Secretary for the Board of Directors, underscoring her pivotal responsibilities in ensuring compliance and effective governance throughout the company.
                  Sandra Golen's profound legal expertise and unwavering dedication to upholding the highest legal and ethical standards render her an invaluable asset in the realms of Corporate Law, Technology Law, Real Estate, and Board Advisory within Nigeria.
                  
                    
                  
                  "
                  maxLength={250}
                />
              </div>
            </div>
          </div>
        </div>
        {/* sandra golen */}
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
                  olubukola kolade - chief financial officer
                </h3>
                <ReadMoreText
                  text="Olubukola Kolade is a professional with a diverse and impressive set of qualifications and experience in the field of accounting. She holds a B.Sc in Accounting and has earned several professional designations and memberships, including ACA (Associate Chartered Accountant), AAT (Association of Accounting Technicians), ACTI (Associate Chartered Taxation Institute), CIFIAN (Chartered Institute of Finance & Investment Analyst Nigeria), and CILT (Chartered Institute of Logistics & Transport).
                  With 9 years of progressive experience in accounting, Olubukola Kolade was appointed as the Group's accountant in 2019, showcasing her expertise and dedication to the field. She is a member of the Corporate Finance Institute in Vancouver, Canada, further underscoring her commitment to staying updated with global financial practices.
                  Olubukola is also an associate member of several prestigious professional organizations, including the Accountant of West Africa (ATSWA), the Chartered Institute of Taxation of Nigeria (CITN), and the Institute of Chartered Accountants of Nigeria (ICAN). These affiliations highlight her commitment to maintaining high standards in the accounting and finance sector.
                  Additionally, Olubukola possesses practical skills in accounting software implementation and training, particularly with software such as Microsoft Office, SAGE, XERO and ZOHO. Her dedication to continuous learning and her extensive qualifications make her a valuable asset in the field of accounting and financial management.
                  
                  
                  "
                  maxLength={250}
                />
              </div>
            </div>
          </div>
        </div>
        {/* bukola */}

        {/* demir */}
      </div>
      <Footer />
    </div>
  );
};

export default management;
