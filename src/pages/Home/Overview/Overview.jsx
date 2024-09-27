import React from "react";

import mission from '../../../assets/images/overview1.jpg'
import story from '../../../assets/images/overview2.jpg'
import community from '../../../assets/images/overview4.jpg'
import explore from '../../../assets/images/overview5.jpg'
import local from '../../../assets/images/local.jpg'
import tailored from '../../../assets/images/tailored.jpg'
import sustain from '../../../assets/images/sustain.jpg'

const Overview = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-6">
            {/* Header Section */}
            <div className="text-center py-8">
              <h1 className="text-3xl font-bold text-gray-800">An Overview of our project</h1>
              <p className="text-gray-600 mt-2">
                Connecting adventurers with unforgettable travel experiences
                worldwide.
              </p>
            </div>

            {/* Our Mission Section */}
            <div className=" text-center">
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-4">
                We believe that travel transforms lives. Our mission is to
                create authentic and meaningful travel experiences that allow
                people to connect with new cultures, explore breathtaking
                landscapes, and push beyond their comfort zones.
              </p>
              {/* Suggestion: Inspirational travel image */}
              <img
                src={mission}
                alt="Our Mission"
                className="w-full h-96 object-cover object-center rounded-lg mt-6"
              />
            </div>

            {/* Our Story Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
              <p className="text-gray-600 mt-4">
                Founded by a group of passionate travelers, our platform was
                born from a desire to make adventure accessible to all. Over the
                years, we’ve built strong relationships with local tour guides
                and communities, offering unique experiences that go beyond
                typical tourism. Whether it's trekking through mountain trails
                or exploring the hidden gems of coastal towns, we aim to provide
                tours that are both exciting and culturally enriching.
              </p>
              {/* Suggestion: Image of the founders or a scenic destination */}
              <img
                src={story}
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 mt-4">
                We’re more than just a travel booking site. We offer
                personalized, curated travel experiences that immerse you in the
                local culture, all while ensuring a safe and enriching journey.
                Whether you’re traveling solo, with friends, or as a family,
                we’re here to make your trip special.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                {/* Why Choose Us 1 */}
                <div className="bg-white shadow-xl shadow-slate-500 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-gray-700">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We work with local guides who know the ins and outs of their
                    regions, providing you with insider access to hidden spots,
                    authentic restaurants, and cultural experiences.
                  </p>
                  {/* Suggestion: Image of local guide or destination */}
                  <img
                    src={local}
                    alt="Local Expertise"
                    className="w-full  object-cover rounded-lg mt-4"
                  />
                </div>

                {/* Why Choose Us 2 */}
                <div className="bg-white shadow-xl shadow-slate-500  p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-gray-700">
                    Tailored Experiences
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Every traveler is different. We work closely with you to
                    create the perfect itinerary based on your interests, making
                    sure every moment is as you imagined it.
                  </p>
                  {/* Suggestion: Image of custom tours */}
                  <img
                    src={tailored}
                    alt="Tailored Experiences"
                    className="w-full  object-cover rounded-lg mt-4"
                  />
                </div>

                {/* Why Choose Us 3 */}
                <div className="bg-white shadow-xl shadow-slate-500  p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold text-gray-700">
                    Sustainability Focus
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We are committed to responsible tourism. Our tours support
                    local economies and we work hard to ensure minimal
                    environmental impact in the areas we visit.
                  </p>
                  {/* Suggestion: Image related to sustainable tourism */}
                  <img
                    src={sustain}
                    alt="Sustainability"
                    className="w-full  object-cover rounded-lg mt-4"
                  />
                </div>
              </div>
            </div>

            {/* Community Engagement Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">
                Community Engagement
              </h2>
              <p className="text-gray-600 mt-4">
                We believe in giving back to the communities that welcome us.
                Through our tours, we partner with local businesses, artisans,
                and community groups to ensure that tourism directly benefits
                the local population. By traveling with us, you’re helping
                create a more sustainable future for these regions.
              </p>
              {/* Suggestion: Image of community involvement or artisan work */}
              <img
                src={community}
                alt="Community Engagement"
                className="w-full h-96 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Ready to Explore Section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Ready to Explore?
              </h2>
              <p className="text-gray-600 mt-4">
                Whether you’re seeking adventure, relaxation, or cultural
                immersion, we’re here to help you make your dream journey a
                reality. Let’s embark on your next great adventure together.
              </p>
              {/* Suggestion: Inspirational travel image */}
              <img
                src={explore}
                alt="Ready to Explore"
                className="w-full h-96 object-cover rounded-lg mt-6"
              />
            </div>
          </div>
    </div>
  );
};

export default Overview;
