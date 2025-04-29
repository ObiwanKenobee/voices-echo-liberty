
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
              Their voices were silenced. 
              <span className="text-crimson"> Ours will not be.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-opensans">
              Join a global movement protecting wildlife and liberating humans from
              modern-day slavery—through truth, technology, and sacred
              responsibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-gold hover:bg-gold/90 text-earth-brown text-lg px-8 py-6 rounded-md"
                asChild
              >
                <Link to="/act-now">Join the Mission</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-md"
              >
                See Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 text-earth-green">
            The Crisis by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 rounded-lg">
              <p className="text-5xl font-playfair font-bold text-crimson mb-2">40M+</p>
              <p className="text-xl text-earth-green font-opensans">
                People trapped in modern slavery worldwide
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-5xl font-playfair font-bold text-crimson mb-2">1M+</p>
              <p className="text-xl text-earth-green font-opensans">
                Species at risk of extinction this century
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <p className="text-5xl font-playfair font-bold text-crimson mb-2">$150B</p>
              <p className="text-xl text-earth-green font-opensans">
                Annual profits from human trafficking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="bg-earth-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gold">
                Our Sacred Mission
              </h2>
              <p className="text-lg mb-6 font-opensans leading-relaxed">
                We believe in the inherent dignity of all life. Through a
                powerful blend of technology, advocacy, and direct action, we're
                building a movement to end exploitation and restore harmony
                between humans and the natural world.
              </p>
              <Button
                className="bg-gold hover:bg-gold/90 text-earth-brown font-semibold"
                asChild
              >
                <Link to="/mission" className="inline-flex items-center">
                  Learn About Our 7 Vows <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Technology meeting humanity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-6 text-earth-green">
            Stories of Impact
          </h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto font-opensans">
            Behind every statistic is a story. Meet the wildlife and people whose
            lives have been changed through our collective action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rescued from Trafficking",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                tag: "Human Rights"
              },
              {
                title: "Protecting the Last Rhinos",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                tag: "Wildlife"
              },
              {
                title: "Sanctuary at Sea",
                image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                tag: "Marine Conservation"
              }
            ].map((story, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {story.tag}
                  </span>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-earth-green">
                    {story.title}
                  </h3>
                  <p className="font-opensans text-sm text-gray-600 mb-4">
                    A powerful story of resilience, hope, and the impact of our collective action.
                  </p>
                  <Link
                    to="/stories"
                    className="text-crimson font-semibold inline-flex items-center hover:text-crimson/80"
                  >
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-earth-green text-earth-green hover:bg-earth-green/5"
              asChild
            >
              <Link to="/stories" className="inline-flex items-center">
                View All Stories <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-crimson text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Join the Movement Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-opensans">
            Whether you're a technologist, donor, or activist, there's a place
            for you in our global community of changemakers.
          </p>
          <Button
            className="bg-white text-crimson hover:bg-white/90 text-lg px-8 py-6 rounded-md font-semibold"
            asChild
          >
            <Link to="/act-now">Take Action Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
