import React from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
      
      {/* Work Experience Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Software Engineer Intern</h3>
            <p className="text-gray-600">L3Harris • May 2024 - Aug 2024</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Developed Java-based software simulator for Counter Communications Systems (CCS)</li>
              <li>• Strengthened skills in Object-Oriented Programming, Git, Jira, Bitbucket, and RHEL8</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Engineers in Medicine</h3>
            <p className="text-gray-600">University of Colorado Boulder • Dec 2022 - Feb 2023</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Collaborated on interdisciplinary projects at the intersection of engineering and medicine</li>
              <li>• Helped develop curriculum for submission to Ecosystem Arts</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Ecosystem Arts</h3>
            <p className="text-gray-600">Nonprofit • May 2019 - Oct 2021</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Tweaked front-end of social media site using HTML/CSS</li>
              <li>• Created curriculum for long-term pediatric hospital patients</li>
              <li>• Assisted with social media outreach and community engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">University of Colorado at Boulder</h3>
            <p className="text-gray-600">Bachelor of Science in Computer Science • Sep 2021 - Current</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Fairview High School</h3>
            <p className="text-gray-600">International Baccalaureate Student • Aug 2017 - May 2021</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Code className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">LandIQ</h3>
            <p className="text-gray-600">Entrepreneurship Project • Sep 2024 - Current</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Built AI-driven platform predicting permitting timelines for real estate developers</li>
              <li>• Developed UI using React, Tailwind CSS, and Vite</li>
              <li>• Used Firebase for database and authentication features</li>
              <li>• Pitched at CU Boulder's Deming Entrepreneurship Shark Tank</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">sikFlic</h3>
            <p className="text-gray-600">May 2023 - Sep 2024</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Launched cross-platform iOS/Android photo app with Flutter and Dart</li>
              <li>• Added geotagging to let users revisit photo locations</li>
              <li>• Formed a legally recognized LLC to support business operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Languages</h3>
              <p className="text-gray-700">
                Java, Python, C++, Swift, Kotlin, Dart, JavaScript, TypeScript, HTML/CSS, SQL, Node.js, R, Scala, Assembly
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Frameworks & Tools</h3>
              <p className="text-gray-700">
                React, Flutter, Firebase, AWS, REST APIs, Git, XCode, VSCode, Vite
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;