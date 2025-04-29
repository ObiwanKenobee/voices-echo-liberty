
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Mission", path: "/mission" },
    { name: "Stories", path: "/stories" },
    { name: "Act Now", path: "/act-now" }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 text-earth-green shadow-md py-2"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-playfair">
            <span className="text-gold">Voices</span> for the{" "}
            <span className="text-crimson">Voiceless</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-opensans font-medium transition-colors hover:text-gold ${
                location.pathname === item.path
                  ? "border-b-2 border-gold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            className="bg-crimson hover:bg-crimson/90 text-white font-opensans"
          >
            Join Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className={isScrolled ? "text-earth-green" : "text-white"} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-earth-green shadow-lg animate-fade-in">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-opensans font-medium py-2 px-4 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-muted text-gold"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-crimson hover:bg-crimson/90 text-white font-opensans w-full"
              >
                Join Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
