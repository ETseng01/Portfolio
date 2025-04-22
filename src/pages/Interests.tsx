import React from 'react';

function Interests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Interests</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gaming */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gaming</h2>
          <p className="text-gray-600">
            Enthusiastic playing games. My current favorite games right now are Valorant and any COD variation game.
          </p>
        </div>

        {/* Reading */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sports</h2>
          <p className="text-gray-600">
            Growing up in Denver all my life, I am a die-hard Denver Broncos fan.
          </p>
        </div>

        {/* Photography */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Photography</h2>
          <p className="text-gray-600">
            Super into street photography. I am using the Sony ecosystem as well as fujifilm. 
          </p>
        </div>

        {/* Fitness */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fitness</h2>
          <p className="text-gray-600">
            Committed to maintaining a healthy lifestyle through regular exercise,
            including strength training and outdoor activities.
          </p>
        </div>

        {/* Music */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Music</h2>
          <p className="text-gray-600">
            having played 4 instruments, music is an essential to everyday life whether its driving, stuyding or workin out.
          </p>
        </div>

        {/* Travel */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Travel</h2>
          <p className="text-gray-600">
            Passionate about exploring new places, experiencing different cultures,
            and meeting people from around the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interests;