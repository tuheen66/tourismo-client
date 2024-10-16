import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 rounded-xl">
        <div className="px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className=" flex  items-center gap-4 mb-4 md:mb-0">
              <div className="w-24 ">
                <img className="rounded-full" src={logo} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Tourismo</h2>
                <p className="text-gray-400">
                  Your Gateway to Unforgettable Travels
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-white"
                aria-label="Tourismo on Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-white"
                aria-label="Tourismo on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-white"
                aria-label="Tourismo on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="hover:text-white"
                aria-label="Tourismo on LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about-us"} className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/all-packages"} className="hover:underline">
                    Our Packages
                  </Link>
                </li>
                <li>
                  <Link to={"/contact-us"} className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={"/community"} className="hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/resources/travel-tips" className="hover:underline">
                    Travel Tips
                  </a>
                </li>
                <li>
                  <a href="/resources/packing-tips" className="hover:underline">
                    Packing Guides
                  </a>
                </li>
                <li>
                  <a
                    href="/resources/destination-guides"
                    className="hover:underline"
                  >
                    Destination Guides
                  </a>
                </li>
                <li>
                  <a href="/resources/blog" className="hover:underline">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="/forums" className="hover:underline">
                    Community Forums
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 rounded mb-4 text-gray-800"
                  required
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-600 py-2 rounded hover:bg-yellow-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; 2024 Tourismo. All rights reserved.</p>
            <p className="mt-2">Designed with ❤️ by Monirul Hassan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
