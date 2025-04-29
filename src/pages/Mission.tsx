
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Mission = () => {
  const [activeVow, setActiveVow] = useState<number | null>(null);

  // Define the 7 vows
  const vows = [
    {
      title: "Truth Above All",
      description:
        "We commit to radical honesty in all communications, backed by verifiable data and transparent methodology. No claim without proof, no statement without source.",
      icon: "🔍",
    },
    {
      title: "All Life Is Sacred",
      description:
        "We recognize the inherent value and dignity of every living being. Human or animal, all deserve freedom from exploitation and the right to thrive.",
      icon: "🌱",
    },
    {
      title: "Technology Serves Humanity",
      description:
        "We harness advanced tools—from AI to blockchain—not for profit, but to amplify impact, ensure transparency, and accelerate liberation.",
      icon: "💻",
    },
    {
      title: "United We Stand",
      description:
        "We build bridges between environmental and human rights movements, recognizing that exploitation of nature and humans share common roots and require unified solutions.",
      icon: "🤝",
    },
    {
      title: "Direct Action With Compassion",
      description:
        "We intervene boldly but ethically, guided by principles of nonviolence and respect for all parties involved—even those we oppose.",
      icon: "❤️",
    },
    {
      title: "Empower, Don't Rescue",
      description:
        "We develop systems and tools that enable communities to protect themselves and their environments, fostering true independence.",
      icon: "⚡",
    },
    {
      title: "Leave No One Behind",
      description:
        "We commit to reaching the most vulnerable, overlooked, and difficult cases—not just the easiest wins or most visible issues.",
      icon: "🌍",
    },
  ];

  return (
    <div className="flex flex-col pt-16">
      <SEO pageName="mission" />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47, 79, 79, 0.85), rgba(47, 79, 79, 0.85)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Our Sacred Mission
            </h1>
            <p className="text-xl text-white/90 mb-8 font-opensans leading-relaxed">
              We exist to protect the exploited, amplify silenced voices, and
              restore balance between humanity and the natural world. Through
              technology, advocacy, and direct intervention, we're creating a
              future where all life thrives in harmony.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Vows Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-6 text-earth-green">
            The 7 Vows That Guide Us
          </h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto font-opensans">
            These sacred commitments define our work and hold us accountable to
            our mission and community.
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {vows.map((vow, index) => (
                <AccordionItem value={`vow-${index}`} key={index}>
                  <AccordionTrigger className="text-xl font-playfair font-semibold text-earth-green py-4 hover:text-gold">
                    <span className="mr-3">{vow.icon}</span> {vow.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-opensans text-gray-700 py-4 px-10">
                    {vow.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-earth-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gold">
                Why We Exist
              </h2>
              <blockquote className="text-2xl italic mb-6 font-playfair border-l-4 border-gold pl-6">
                "The world will not be destroyed by those who do evil, but by those who watch without doing anything."
                <footer className="text-right text-gold mt-2">— Albert Einstein</footer>
              </blockquote>
              <p className="text-lg mb-6 font-opensans leading-relaxed">
                In a world where millions of humans live in modern slavery and
                countless species face extinction, silence is complicity. We
                refuse to be bystanders. Through a unique blend of technology,
                community action, and strategic intervention, we're building a
                movement powerful enough to confront these interconnected crises.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Our mission in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-earth-green">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gold/30"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "2020",
                title: "Foundation",
                description: "Voices for the Voiceless was founded by a coalition of technologists, conservationists, and human rights activists.",
                side: "right"
              },
              {
                year: "2021",
                title: "First Rescue Operation",
                description: "Successfully coordinated the liberation of 24 trafficking victims through our digital tracking system.",
                side: "left"
              },
              {
                year: "2022", 
                title: "Wildlife Protection Initiative",
                description: "Launched AI-powered monitoring systems in 3 national parks to prevent poaching.",
                side: "right"
              },
              {
                year: "2023",
                title: "Global Expansion",
                description: "Expanded operations to 12 countries with local community partnerships and digital infrastructure.",
                side: "left"
              },
              {
                year: "Present",
                title: "Building the Movement",
                description: "Growing our global community of activists, technologists, and donors to scale our impact.",
                side: "right"
              }
            ].map((event, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  event.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline content */}
                <div className="md:w-1/2 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-playfair font-bold mb-2 text-gold">{event.year}: {event.title}</h3>
                    <p className="font-opensans text-gray-700">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline marker */}
                <div className="absolute left-[-8px] md:left-1/2 transform md:translate-x-[-50%] w-5 h-5 rounded-full bg-gold border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-crimson text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-opensans">
            Add your voice to ours. Together, we can create meaningful change for
            the voiceless.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-white text-crimson hover:bg-white/90 text-lg px-8 py-6 rounded-md font-semibold"
              asChild
            >
              <Link to="/act-now">Take Action</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-md font-semibold"
              asChild
            >
              <Link to="/stories">Read Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
