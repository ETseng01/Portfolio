import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Socials() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Connect With Me</h1>
      
      <div className="grid gap-8">
        {/* LinkedIn */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Linkedin className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">LinkedIn</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Connect with me professionally on LinkedIn to learn more about my work experience,
            skills, and professional achievements. I regularly share industry insights and engage
            with the tech community.
          </p>
          <a
            href="https://www.linkedin.com/in/evan-tseng-5a1887243/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Visit Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Github className="h-8 w-8 text-gray-800 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">GitHub</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Explore my open-source contributions and personal projects on GitHub. You'll find
            examples of my coding style, project organization, and technical problem-solving
            approaches.
          </p>
          <a
            href="https://github.com/ETseng01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;