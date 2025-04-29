
import React from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, Users } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-green text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold text-gold">Our Mission</h3>
            <p className="font-opensans text-sm leading-relaxed">
              Voices for the Voiceless is dedicated to protecting wildlife and liberating humans
              from modern-day slavery through truth, technology, and sacred responsibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Users size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2 font-opensans">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-gold transition-colors">Mission</Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-gold transition-colors">Stories</Link>
              </li>
              <li>
                <Link to="/act-now" className="hover:text-gold transition-colors">Act Now</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold text-gold">Stay Updated</h3>
            <p className="font-opensans text-sm">
              Join our newsletter to receive updates on our work and ways to get involved.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-4 rounded-l-md text-earth-green w-full"
              />
              <button className="bg-gold hover:bg-gold/90 text-earth-green font-semibold py-2 px-4 rounded-r-md transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center font-opensans text-sm">
          <p>&copy; {new Date().getFullYear()} Voices for the Voiceless. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
