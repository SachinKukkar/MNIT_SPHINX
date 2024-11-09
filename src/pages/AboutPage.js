import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            We are passionate about improving healthcare access and experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At DocTrail, our mission is to bridge the gap between healthcare professionals and the people who need them most, particularly in rural areas. We aim to streamline healthcare access, reduce wait times, and make medical support easier to obtain for everyone.
          </p>
          <p className="text-lg text-gray-700">
            By offering innovative solutions and combining technology with compassionate healthcare services, we are committed to making healthcare more accessible, affordable, and efficient.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-700 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              DocTrail was born out of a need to address the challenges faced by doctors and healthcare providers in rural areas. For years, medical professionals working in these areas have struggled with outdated systems and overwhelming paperwork, leading to a delay in patient care. Our founders, a group of healthcare and tech experts, came together with a shared vision: to transform healthcare in rural regions and enhance the quality of life for millions.
            </p>
            <p className="text-lg text-gray-700">
              Today, DocTrail is a growing platform that connects doctors and patients, streamlining healthcare services for everyone involved. We continue to innovate and push boundaries to meet the needs of both patients and doctors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-700 mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our team consists of dedicated healthcare professionals, tech enthusiasts, and problem solvers. Together, we are working tirelessly to provide better healthcare services to underserved communities. We believe in innovation, empathy, and a patient-first approach.
            </p>
            <p className="text-lg text-gray-700">
              Our team members come from diverse backgrounds and have years of experience in healthcare, technology, and business. Each one is committed to making a real difference in the world through accessible and efficient healthcare.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center py-12 bg-purple-700 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg mb-6">
            Whether you are a healthcare provider, a patient, or someone passionate about healthcare innovation, we invite you to be part of our mission. Together, we can revolutionize healthcare for those who need it the most.
          </p>
          <button
            className="px-8 py-3 bg-purple-900 text-white rounded-lg text-xl hover:bg-purple-800 transition duration-300"
            onClick={() => alert('Join Us clicked!')}
          >
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
