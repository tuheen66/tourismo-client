import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import wks1 from "../assets/images/wks1.jpg";
import wks2 from "../assets/images/wks2.jpg";
import wks3 from "../assets/images/wks3.jpg";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import mem1 from "../assets/images/mem1.jpg";
import mem2 from "../assets/images/mem2.jpg";
import mem3 from "../assets/images/mem3.jpg";
import community from "../assets/images/community.jpg";

const Community = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen rounded-xl"
        style={{
          backgroundImage: ` url(${community})`,
        }}
      >
        <div className="bg-black bg-opacity-40 h-full flex flex-col justify-center items-center rounded-xl text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Welcome to Our Travel Family
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Connect, Share, and Explore with Fellow Travelers and Guides
          </p>
          <button className="bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700">
            Join the Adventure
          </button>
        </div>
      </section>

      <main className="my-12 px-4">
        {/* Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hello, Traveler!</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Whether you're planning your next big adventure, sharing stories
            from past journeys, or offering tips to fellow explorers, our
            community is here to support and inspire you every step of the way.
          </p>
        </section>

        {/* Member Profiles */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Meet Our Community Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Member 1 */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src={img1}
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Alice Johnson</h4>
              <p className="text-gray-600">Adventure Enthusiast</p>
              <div className="mt-4 flex justify-center space-x-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Alice on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Alice on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Alice on Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src={img3}
                alt="Mark Lee"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Mark Lee</h4>
              <p className="text-gray-600">Cultural Explorer</p>
              <div className="mt-4 flex justify-center space-x-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Mark on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Mark on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Mark on Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Add more member profiles as needed */}
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src={img4}
                alt="Sophia Martinez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Sophia Martinez</h4>
              <p className="text-gray-600">Nature Lover</p>
              <div className="mt-4 flex justify-center space-x-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Sophia on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Sophia on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Sophia on Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src={img2}
                alt="Daniel Kim"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold">Daniel Kim</h4>
              <p className="text-gray-600">Foodie Explorer</p>
              <div className="mt-4 flex justify-center space-x-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Daniel on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Daniel on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Daniel on Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Events Calendar */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What’s Happening Next
          </h3>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event 1 */}
              <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={wks1}
                  alt="Mountain Trekking Workshop"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Mountain Trekking Workshop
                </h4>
                <p className="text-gray-600">📅 October 15, 2024</p>
                <p className="text-gray-600">📍 Rocky Mountains</p>
                <a
                  href="/events/mountain-trekking"
                  className="text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </li>

              {/* Event 2 */}
              <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={wks2}
                  alt="Cultural Exchange Meetup"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Cultural Exchange Meetup
                </h4>
                <p className="text-gray-600">📅 November 5, 2024</p>
                <p className="text-gray-600">📍 Downtown Convention Center</p>
                <a
                  href="/events/cultural-exchange"
                  className="text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </li>

              {/* Add more events as needed */}
              <li className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={wks3}
                  alt="Photography Walk"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Sunset Photography Walk
                </h4>
                <p className="text-gray-600">📅 December 10, 2024</p>
                <p className="text-gray-600">📍 City Park</p>
                <a
                  href="/events/photography-walk"
                  className="text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What Our Members Are Saying
          </h3>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 shadow-md rounded-lg flex">
              <img
                src={mem2}
                alt="Sarah K."
                className="w-24 h-24 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-gray-700 italic">
                  "Tourismo's community has been a game-changer for planning my
                  solo trip across Asia. The tips and support from fellow
                  travelers are amazing!"
                </p>
                <h4 className="text-lg font-semibold mt-2">- Sarah K.</h4>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 shadow-md rounded-lg flex">
              <img
                src={mem1}
                alt="David M."
                className="w-24 h-24 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-gray-700 italic">
                  "As a tour guide, connecting with fellow guides through
                  Tourismo has helped me enhance my services and reach more
                  tourists. It's a fantastic platform!"
                </p>
                <h4 className="text-lg font-semibold mt-2">- David M.</h4>
              </div>
            </div>

            {/* Add more testimonials as needed */}
            <div className="bg-white p-6 shadow-md rounded-lg flex">
              <img
                src={mem3}
                alt="Emily R."
                className="w-24 h-24 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-gray-700 italic">
                  "The events organized by Tourismo have allowed me to meet
                  incredible people and discover new places I never thought I'd
                  visit."
                </p>
                <h4 className="text-lg font-semibold mt-2">- Emily R.</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Our Travel Moments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <img
              src={pic1}
              alt="Sunset at the Beach"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img
              src={pic2}
              alt="Mountain Hiking"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img
              src={pic3}
              alt="City Lights"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img
              src={pic4}
              alt="Cultural Festival"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img
              src={pic5}
              alt="Historic Landmark"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            <img
              src={pic6}
              alt="Local Cuisine"
              className="w-full h-60 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
            {/* Add more images as needed */}
          </div>
          <div className="text-center mt-6">
            <a href="/gallery" className="text-blue-600 hover:underline">
              Explore More Photos
            </a>
          </div>
        </section>

        {/* Call-to-Action (CTA) */}
        <section className="text-center py-12 bg-slate-300  rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold mb-4">
            Share Your Journey with Us!
          </h3>
          <p className="mb-6">
            Join the Tourismo community today and start connecting with
            travelers and guides from around the world. Your next adventure
            starts here.
          </p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-yellow-500">
            Become a Member
          </button>
        </section>
      </main>
    </div>
  );
};

export default Community;
