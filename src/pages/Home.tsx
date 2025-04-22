import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hi, I'm Evan Tseng, <br />
            Software Engineer
          </h1>
          
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>
              As a passionate developer, I thrive on turning complex problems into simple, useful solutions. I graduated from the University of Colorado Boulder with a Bachelor of Science in Computer Science. Over the past several years, I've worked on building applications that people can actually use and benefit from. I'm always focused on creating software that works well and solves real problems. I'm also an aspiring entrepreneur, always looking for new ideas and opportunities to build something meaningful.
            </p>
            <p>
              Beyond coding, I have a strong passion for user experience design and believe that great software should be both powerful and easy to use. Outside of tech, I love spending time outdoors, whether it's hiking, camping, or just enjoying nature. I'm a huge Denver Broncos fan and also really into photography and videography — capturing moments and telling stories through visuals is something I really enjoy.
            </p>
            <p>
              This portfolio is a window into my journey, showcasing not just what I've built, but 
              how I think and solve problems. Whether you're a potential collaborator, employer, or 
              fellow developer, I'm excited to share my work with you.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/interests')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Palette className="w-5 h-5 mr-2" />
              Learn More About My Interests
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Code className="w-5 h-5 mr-2" />
              See My Projects
            </button>
          </div>
        </div>

        <div>
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/Photo-min.JPG"
              alt="Evan Tseng's graduation photo"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;