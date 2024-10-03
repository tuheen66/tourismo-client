
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaClock } from 'react-icons/fa';
import contact from '../assets/images/contact.jpg'
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <div className="flex flex-col">
      
      {/* Hero Section */}
      <section
        className="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[450px] bg-cover bg-center flex items-center justify-center rounded-xl"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="p-8 rounded">
          <h1 className="text-4xl text-white font-bold mb-2">Get In Touch With Us!</h1>
          <p className="text-lg text-gray-300">We're here to help you with all your tour inquiries.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row  gap-20">
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message or inquiry"
                  className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-700 text-white font-semibold py-2 px-4 rounded-md shadow hover:shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 ml-28">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="space-y-4">
              <li>
             
                <h3 className="flex  gap-2 items-center text-lg font-medium"> <FaLocationDot className='text-2xl text-orange-600'></FaLocationDot> Location</h3>
                <p className="text-gray-600">123 Travel Street, Wanderlust City, World.</p>
              </li>
              <li>
              
                <h3 className=" flex  gap-2 items-center text-lg font-medium"> <FaPhone className='text-xl text-orange-600'></FaPhone>Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </li>
              <li>
              
                <h3 className="flex  gap-2 items-center text-lg font-medium"><MdEmail className='text-2xl text-orange-600'></MdEmail> Email</h3>
                <p className="text-gray-600">support@tourismo.com</p>
              </li>
              <li>
             
                <h3 className="flex  gap-2 items-center text-lg font-medium"> <FaClock className='text-2xl text-orange-600'></FaClock> Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              title="Tourismo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019121614073!2d-122.41941548468162!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!
              1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8a6b1f63%3A0x5f7e4f9c0b4f0c7a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616581234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              className="rounded-md"
            ></iframe>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* FAQs Section (Optional) */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">How can I book a tour?</h3>
              <p className="text-gray-600">Simply browse our packages, select the tour that excites you, and follow the booking steps!</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">What is the cancellation policy?</h3>
              <p className="text-gray-600">You can cancel your booking up to 48 hours before the tour starts for a full refund.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Do you offer group discounts?</h3>
              <p className="text-gray-600">Yes, we offer discounts for groups of 10 or more. Please contact us for more details.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-slate-300  py-12 rounded-md text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for your next adventure?</h2>
          <Link to={'/all-packages'}
            href="/packages"
            className="bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            Explore Our Packages
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactUs;