
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Define the story categories
  const categories = [
    { id: "all", label: "All Stories" },
    { id: "human", label: "Human Rights" },
    { id: "wildlife", label: "Wildlife" },
    { id: "environmental", label: "Environmental" }
  ];

  // Define the stories
  const stories = [
    {
      id: 1,
      title: "From Captivity to Freedom",
      category: "human",
      excerpt: "The story of Amara, who escaped human trafficking and now helps others find freedom.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Protecting the Last Rhinos",
      category: "wildlife",
      excerpt: "How technology is helping park rangers stay one step ahead of poachers.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Sanctuary at Sea",
      category: "wildlife",
      excerpt: "Creating protected marine areas to save endangered whale populations.",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Digital Liberation Network",
      category: "human",
      excerpt: "How secure technology is helping identify and free victims of modern slavery.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Healing the Amazon",
      category: "environmental",
      excerpt: "Working with indigenous communities to protect and restore crucial rainforest regions.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Children of the Mines",
      category: "human",
      excerpt: "Exposing and addressing child labor in mineral extraction for electronics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false
    }
  ];

  // Filter stories based on selected category
  const filteredStories = activeFilter === 'all'
    ? stories
    : stories.filter(story => story.category === activeFilter);

  // Get featured story
  const featuredStory = stories.find(story => story.featured);

  return (
    <div className="flex flex-col pt-16">
      <SEO pageName="stories" />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 69, 19, 0.85), rgba(139, 69, 19, 0.85)), url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Stories of Impact
            </h1>
            <p className="text-xl text-white/90 mb-8 font-opensans leading-relaxed">
              Behind every statistic is a story. These are the narratives of wildlife, 
              people, and places transformed through our collective action.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      {featuredStory && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-earth-green">
              Featured Story
            </h2>
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:w-1/2">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {categories.find(cat => cat.id === featuredStory.category)?.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-earth-green">
                  {featuredStory.title}
                </h3>
                <p className="text-lg font-opensans text-gray-700 mb-6">
                  {featuredStory.excerpt}
                </p>
                <Button className="bg-crimson hover:bg-crimson/90 text-white">
                  Read Full Story <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-6 text-earth-green">
            Explore All Stories
          </h2>
          
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={
                  activeFilter === category.id
                    ? "bg-gold hover:bg-gold/90 text-white border-none"
                    : "border-earth-green text-earth-green hover:bg-earth-green/5"
                }
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {categories.find(cat => cat.id === story.category)?.label}
                  </span>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-earth-green">
                    {story.title}
                  </h3>
                  <p className="font-opensans text-gray-600 mb-4">
                    {story.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="text-crimson p-0 h-auto font-semibold hover:text-crimson/80"
                  >
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-earth-green text-earth-green hover:bg-earth-green/5"
            >
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Share Story CTA */}
      <section className="bg-earth-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gold">
            Have a Story to Share?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-opensans">
            Whether you've experienced exploitation firsthand or witnessed the impact
            of our work, your story matters. Share it with our community.
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-earth-brown text-lg px-8 py-6">
            Share Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Stories;
