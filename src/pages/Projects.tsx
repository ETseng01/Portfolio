import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">LandIQ</h2>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Collaborated in a team of 3 to build an AI-driven platform predicting permitting timelines for real estate developers</li>
              <li>• Developed UI using React, Tailwind CSS, and Vite for optimized workflows</li>
              <li>• Used Firebase for database and authentication features</li>
              <li>• Pitched at CU Boulder's Deming Entrepreneurship Shark Tank, receiving feedback from startup mentors</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ETseng01/LandIQv0.1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Github className="h-5 w-5 mr-1" />
                Repository
              </a>
              <a
                href="https://peppy-marzipan-41216d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <ExternalLink className="h-5 w-5 mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;