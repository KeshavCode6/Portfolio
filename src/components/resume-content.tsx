import React from 'react'


function ResumeContent() {
    return (
        <>
        <h1 className="text-3xl font-bold text-center">Keshav Shah</h1>
        <p className="text-center text-muted-foreground">
            +1-470-820-8274 • <a href="mailto:keshavrshah@gmail.com" className="text-primary hover:underline">keshavrshah@gmail.com</a>
        </p>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Objective</h2>
            <p className="mt-2">
                To apply my skills in software development and cybersecurity to design, build, and secure
                innovative applications and systems. Passionate about leveraging emerging technologies and
                best practices to develop robust, scalable, and secure solutions that utilize concepts such as
                Artificial Intelligence, Machine Learning, etc.
            </p>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-2">
                <p className="font-medium">Highschool Diploma</p>
                <p>GPA: 4.0 (unweighted)</p>
                <p>Course Rigor: AP CSP, AP Physics 1, AP Precalculus, AP US History, AP World History (5), AP Human Geography</p>
            </div>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="list-disc list-inside mt-2">
                <li>Proficient in Fundamentals of Cybersecurity (GIAC GFACT certified)</li>
                <li>Experienced in Software Development (web, mobile, etc.)</li>
                <li>Programming languages: Python, JavaScript, C#, C++, Java</li>
                <li>Certified in Microsoft PowerPoint, Word (Expert), and Excel</li>
                <li>Strong problem-solving and critical-thinking skills</li>
                <li>Effective collaborator and team player</li>
                <li>Strong and diligent work ethic</li>
            </ul>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Awards</h2>
            <ul className="list-disc list-inside mt-2">
                <li>Hack Gwinnett's Best Humanitarian, 2023</li>
                <li>1st Place in Lanier Tech Fair Internet Applications, 2024</li>
                <li>3rd Place in Georgia Student Technology Association Internet Applications, 2024</li>
                <li>3rd Place in Georgia Student Technology Association Programming Challenge, 2024</li>
                <li>Cyberstart Leapfrog Scholars in Georgia, 2024</li>
                <li>Robotics Vex Excellence Award, 2024</li>
                <li>Top 30 placements in National Cyber League (4 competitions, high school bracket), 2024</li>
            </ul>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-2 space-y-4">
                <div>
                    <p className="font-medium">VP Of Development in School Coding Club</p>
                    <ul className="list-disc list-inside">
                        <li>Aided in monthly club meeting planning and execution</li>
                        <li>Fully developed club coding platform</li>
                    </ul>
                </div>
                <div>
                    <p className="font-medium">Cybersecurity Committee Officer in School Cybersecurity Club</p>
                    <ul className="list-disc list-inside">
                        <li>Aided in monthly club meeting planning and execution</li>
                        <li>Helped create challenges for club-run cybersecurity capture the flag website</li>
                    </ul>
                </div>
                <div>
                    <p>Lead Robotics Programmer for Vex Team 17451B (former)</p>
                    <ul className="list-disc list-inside">
                        <li>Completely developed robot-related code</li>
                        <li>Aided in state competition qualification and winning of Vex Excellence Award</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-semibold">Extracurricular & Volunteering</h2>
            <div className="mt-2">
                <p>Volunteer at Next Generation Focus</p>
                <ul className="list-disc list-inside">
                    <li>Teaching students from grades 2-6 subjects such as Math & ELA for 6 hours a week</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default ResumeContent
