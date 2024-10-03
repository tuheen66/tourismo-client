import team from "../assets/images/team.jpg"
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
import icon5 from "../assets/images/icon5.png"
import icon6 from "../assets/images/icon6.png"
import mission from "../assets/images/mission.jpg"


const AboutUs = () => {
  return (
    <div>
      <h2 className="text-2xl">About Us</h2>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Section 1: Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Tourismo
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Tourismo, your ultimate destination for discovering
              unique travel experiences and booking unforgettable tour packages.
            </p>
          </div>

          {/* Section 2: Mission */}
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={mission}
                alt="Our Mission"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                At Tourismo, our mission is to connect passionate travelers with
                expert guides to create memorable adventures that explore the
                world's most breathtaking destinations. We aim to make travel
                easy, enjoyable, and accessible for all.
              </p>
            </div>
          </div>

          {/* Section 3: Meet Our Team */}
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Our team of travel enthusiasts, experienced guides, and customer
                service experts work tirelessly to bring you personalized travel
                experiences. Whether you're an adventurer, history buff, or
                leisure traveler, we have something for everyone.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={team}
                alt="Our Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section 4: Why Choose Us */}
          <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                Why Choose Tourismo?
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                From exclusive tour packages to expert local guides, Tourismo
                offers a unique travel experience. Here’s why travelers choose
                us:
              </p>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon1}
                    alt="Expert Guides"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Expert Guides
                  </h3>
                  <p className="text-gray-600">
                    Our local guides have extensive knowledge about the
                    destinations and offer insider tips for a more immersive
                    experience.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon2}
                    alt="Exclusive Packages"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Exclusive Packages
                  </h3>
                  <p className="text-gray-600">
                    We curate exclusive travel packages that cater to various
                    interests—whether it’s adventure, culture, or relaxation.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon3}
                    alt="Customizable Tours"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Customizable Tours
                  </h3>
                  <p className="text-gray-600">
                    We offer flexible itineraries, allowing you to customize
                    your trips based on your preferences and schedule.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon4}
                    alt="24/7 Support"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600">
                    Our customer support team is available around the clock to
                    assist with your travel needs and inquiries.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon5}
                    alt="Local Experiences"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Local Experiences
                  </h3>
                  <p className="text-gray-600">
                    Get to know the culture and traditions of each destination
                    through immersive, locally curated experiences.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="text-center p-6 bg-gray-50 rounded-lg shadow-2xl shadow-slate-400">
                  <img
                    src={icon6}
                    alt="Sustainable Travel"
                    className="mx-auto mb-4 w-24 h-24"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Sustainable Travel
                  </h3>
                  <p className="text-gray-600">
                    We are committed to responsible and sustainable tourism,
                    ensuring that your travels have a positive impact on local
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    </div>
  );
};

export default AboutUs;
