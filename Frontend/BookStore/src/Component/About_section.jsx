import React from 'react';

const About_section = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-12 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
        About KitabGhar
      </h2>
      
      <p className="text-sm sm:text-base text-White-700 leading-relaxed mb-4 text-justify">
        <strong>KitabGhar</strong> is a student-friendly platform that provides access to high-quality educational content, free courses, and valuable study resources. Our goal is to simplify learning and make knowledge accessible to everyone, regardless of background.
      </p>

      <p className="text-sm sm:text-base text-White-700 leading-relaxed mb-4 text-justify">
        Whether you're preparing for college exams, learning a new skill, or exploring your favorite subjects, KitabGhar offers a space tailored for you. With interactive tools and carefully curated content, we aim to keep you inspired and informed.
      </p>

      <h3 className="text-xl font-semibold text--800 mt-6 text-red-300 mb-2">Key Features:</h3>
      <ul className="list-disc list-inside text-sm sm:text-base text--700 space-y-1">
        <a>📘 Free and easy-to-access courses</a>
        <br/>
        <a>🧑‍🏫 Expert-created content</a>
        <br/>
        <a>📚 Comprehensive study resources</a>
        <br/>
         
        <a>🌐 Built by students, for students</a>
      </ul>
    </div>
  );
};

export default About_section;
