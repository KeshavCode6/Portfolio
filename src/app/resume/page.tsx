import Navbar from '@/components/ui/navbar';
import React from 'react';
import Image from 'next/image';
import waves from "@/public/waves.svg"
function Resume() {
    return (
        <Navbar>
            <div className="px-6 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center">Keshav Shah</h1>
                <p className="text-center text-gray-600">
                    6030 Parkway Downs Dr, Suwanee, GA • +1-470-820-8274 • <a href="mailto:keshavrshah@gmail.com" className="text-blue-600 hover:underline">keshavrshah@gmail.com</a> • <a href="https://keshav.pro" className="text-blue-600 hover:underline">keshav.pro</a>
                </p>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Objective</h2>
                    <p>
                        To apply my skills in software development and cybersecurity to design, build, and secure
                        innovative applications and systems. Passionate about leveraging emerging technologies and
                        best practices to develop robust, scalable, and secure solutions that utilize concepts such as
                        Artificial Intelligence, Machine Learning, etc.
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Education</h2>
                    <p className="font-medium">Highschool Diploma</p>
                    <p>Alliance Academy for Innovation in Cumming, GA</p>
                    <p>GPA: 4.0 (unweighted)</p>
                    <p>Course Rigor: AP CSP, AP Physics 1, AP Precalculus, AP US History, AP World History (5), AP Human Geography</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    <ul className="list-disc list-inside">
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
                    <h2 className="text-xl font-semibold">Awards</h2>
                    <ul className="list-disc list-inside">
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
                    <h2 className="text-xl font-semibold">Experience</h2>
                    <div className="mb-4">
                        <p className="font-medium">VP Of Development</p>
                        <p>Coding Club at Alliance Academy for Innovation</p>
                        <p>• Aided in monthly club meeting planning and execution</p>
                        <p>• Fully developed club coding platform</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-medium">Cybersecurity Committee Officer</p>
                        <p>Cybersecurity Club at Alliance Academy for Innovation</p>
                        <p>• Aided in monthly club meeting planning and execution</p>
                        <p>• Helped create challenges for club-run cybersecurity capture the flag website</p>
                    </div>
                    <div>
                        <p className="font-medium">Lead Robotics Programmer</p>
                        <p>Vex Team 17451B at Alliance Academy for Innovation</p>
                        <p>• Completely developed robot-related code</p>
                        <p>• Aided in state competition qualification and winning of Vex Excellence Award</p>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Extracurricular & Volunteering</h2>
                    <div>
                        <p className="font-medium">Volunteer Tutor</p>
                        <p>Next Generation Focus</p>
                        <p>• Teaching students from grades 2-6 subjects such as Math & ELA for 6 hours a week</p>
                    </div>
                </section>
            </div>

            <Image className="absolute bottom-0  w-screen" alt="waves" src={waves}/>

        </Navbar>
    );
}

export default Resume;
