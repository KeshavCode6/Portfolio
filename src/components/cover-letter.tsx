import React from "react";

const CoverLetterContent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
      {/* Date and Address */}
      <div className="text-sm text-gray-600 mb-6">
        <p>Personal cover letter on web development</p>
        <p>Updated as of 12/17/2024</p>
      </div>

      {/* Body */}
      <div className="leading-7 text-gray-700">
        <p className="mb-4">
          Dear Hiring Manager,
        </p>

        <p className="mb-4">
          Hello! I am Keshav Shah, a highly motivated high school student in Georgia. I am interested in applying for a software development position! I have been working with web development for 3 years now, and it has developed into one of my biggest hobbies, which has led to my aspirations to become a web developer.
        </p>

        <p className="mb-4">
          Like I mentioned before, I have been partaking in web development for around 3 years now. I have experience using various web technologies, including frontend development with HTML/CSS, and more advanced technologies like React. I have worked extensively with frameworks such as Next.JS, as well! I am well-versed in backend development through technologies such as Express.js and Flask in addition to my frontend skills. As well as that, I am aware of the necessity of secure code and as a result, I have become certified in the fundamentals of cybersecurity by the SEC275 GFACT.
        </p>

        <p className="mb-4">
          In addition to my technical skills, I am proficient in various professional skills as well. I have lots of experience working in a team environment, as I have collaborated with others on various software development competitions, such as my involvement in GASTC Tech Fair (where I won 3rd in state) or programming involvement on my Vex Robotics Team (where we won the Vex Excellence Award Regionally). I have experience with leadership, and I hold officer positions at the Coding Club and Cybersecurity Club at my school. Lastly, I have effective communication skills, which can be illustrated through my volunteer position at NextGenerationFocus, where I teach kids from grades 3rd to 5th grade in subjects like ELA and Math.
        </p>

        <p className="mb-4">
          In conclusion, I am very interested in a software development position. I am deeply passionate about web development and hold prior web development experience with various front and backend technologies, including frameworks like Next.JS. I am also a strong collaborator, leader, and communicator! I greatly appreciate your time and would be ever grateful for the opportunity to have an interview to further discuss the possibility of obtaining the role.
        </p>

        <p className="mt-6">Yours sincerely,</p>
        <p className="font-bold text-xl mt-1 italic" style={{fontFamily:"cursive"}}>Keshav Shah</p>
      </div>
    </div>
  );
};

export default CoverLetterContent;
