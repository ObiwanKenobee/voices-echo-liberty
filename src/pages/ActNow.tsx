
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, Users, Shield, Database, BarChart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { DataList } from "@/components/DataList";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const ActNow = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save the form data to the database - fixing the field names to match the schema
      const { error } = await supabase
        .from('partners')
        .insert({
          name: name,
          contact_email: email,  // Changed from 'email' to 'contact_email' to match schema
          description: message,
          status: 'pending',
          partnership_type: 'volunteer', // Required field according to schema
        });
        
      if (error) throw error;
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      
      // Show success message
      toast.success("Thank you for joining our movement! We'll be in touch soon.");
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("There was an error submitting your information. Please try again.");
    }
  };

  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220, 20, 60, 0.85), rgba(220, 20, 60, 0.85)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Take Action Now
            </h1>
            <p className="text-xl text-white/90 mb-8 font-opensans leading-relaxed">
              There are many ways to join our movement and make a difference. Choose the path that aligns with your skills, resources, and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Data Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-earth-green">
            Live Data Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            <DataList 
              entity="initiatives" 
              title="Ethical Initiatives"
              description="Current initiatives we're working on" 
            />
            <DataList 
              entity="alerts" 
              title="Wildlife Alerts" 
              description="Recent wildlife trafficking alerts"
            />
            <DataList 
              entity="reports"
              title="ESG Reports" 
              description="Environmental, social, and governance reports"
            />
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Our API provides real-time access to critical data about our initiatives, alerts, and reports. 
            </p>
            <Button className="bg-crimson hover:bg-crimson/90 text-white">
              Access Full API Documentation <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Action Paths Tabs */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-earth-green">
            Choose Your Path
          </h2>

          <Tabs defaultValue="donor" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-10">
              <TabsTrigger value="donor" className="text-lg font-opensans py-6">
                <Shield className="mr-2 h-5 w-5" /> Donor
              </TabsTrigger>
              <TabsTrigger value="technologist" className="text-lg font-opensans py-6">
                <Globe className="mr-2 h-5 w-5" /> Technologist
              </TabsTrigger>
              <TabsTrigger value="activist" className="text-lg font-opensans py-6">
                <Users className="mr-2 h-5 w-5" /> Activist
              </TabsTrigger>
            </TabsList>
            
            {/* Donor Tab */}
            <TabsContent value="donor" className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-earth-green">
                    Support Our Mission
                  </h3>
                  <p className="font-opensans text-gray-700 mb-6">
                    Your financial contribution directly enables rescue operations, technology development, and advocacy campaigns. 100% of public donations go directly to field operations.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">01</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Monthly Giving
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Sustain our work with recurring donations that help us plan for the future.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">02</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Impact Funding
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Target your giving to specific initiatives or geographic regions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">03</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Legacy Giving
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Create lasting impact through your estate planning and major gifts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-crimson hover:bg-crimson/90 text-white">
                    Donate Now <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-xl font-playfair font-bold mb-4 text-earth-green">
                      Your Impact
                    </h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="font-opensans">$25/month</span>
                        <span className="font-opensans text-crimson">Funds 24/7 monitoring for one wildlife area</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="font-opensans">$100/month</span>
                        <span className="font-opensans text-crimson">Supports rescue operations for trafficking victims</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span className="font-opensans">$500/month</span>
                        <span className="font-opensans text-crimson">Enables a full technology deployment in at-risk regions</span>
                      </div>
                    </div>
                    <p className="text-sm font-opensans text-gray-600 italic">
                      *All donations are tax-deductible. Transparency reports are published quarterly.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Technologist Tab */}
            <TabsContent value="technologist" className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-earth-green">
                    Contribute Your Skills
                  </h3>
                  <p className="font-opensans text-gray-700 mb-6">
                    Our tech stack is built by passionate volunteers who dedicate their skills to create tools for human and wildlife liberation.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">01</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Open Source Projects
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Contribute to our GitHub repositories and help build tools for good.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">02</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Data Science & AI
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Help develop models for identifying trafficking networks and wildlife threats.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">03</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Security & Privacy
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Ensure our systems protect vulnerable users and whistleblowers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-crimson hover:bg-crimson/90 text-white">
                    Join Tech Team <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-xl font-playfair font-bold mb-4 text-earth-green">
                      Current Tech Needs
                    </h4>
                    <ul className="space-y-4 mb-6 list-disc pl-5">
                      <li className="font-opensans text-gray-700">
                        <span className="font-semibold">Mobile developers</span> for our field reporting app
                      </li>
                      <li className="font-opensans text-gray-700">
                        <span className="font-semibold">Data scientists</span> for trafficking pattern analysis
                      </li>
                      <li className="font-opensans text-gray-700">
                        <span className="font-semibold">UX designers</span> for trauma-informed interface design
                      </li>
                      <li className="font-opensans text-gray-700">
                        <span className="font-semibold">Security experts</span> for secure communications protocols
                      </li>
                      <li className="font-opensans text-gray-700">
                        <span className="font-semibold">QA testers</span> for our reporting and monitoring tools
                      </li>
                    </ul>
                    <p className="text-sm font-opensans text-gray-600 italic">
                      *Both part-time volunteers and full-time contributors are welcome.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Activist Tab */}
            <TabsContent value="activist" className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-earth-green">
                    Amplify the Movement
                  </h3>
                  <p className="font-opensans text-gray-700 mb-6">
                    Use your voice, connections, and community influence to advance our mission and create change on the ground.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">01</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Community Organizing
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Start or join a local chapter and mobilize your community.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">02</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Advocacy Campaigns
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Engage with policymakers and push for legislative changes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-gold/20 rounded-full p-2 mr-4 mt-1">
                        <span className="text-gold">03</span>
                      </div>
                      <div>
                        <h4 className="font-semibold font-playfair text-earth-green mb-1">
                          Education & Awareness
                        </h4>
                        <p className="text-sm font-opensans text-gray-600">
                          Conduct workshops and spread knowledge about exploitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-crimson hover:bg-crimson/90 text-white">
                    Become an Activist <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h4 className="text-xl font-playfair font-bold mb-4 text-earth-green">
                      Upcoming Campaigns
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold font-playfair text-crimson">Global Wildlife Trafficking Summit</h5>
                        <p className="text-sm font-opensans text-gray-700 mb-1">
                          Help us put pressure on world leaders at this crucial policy meeting.
                        </p>
                        <p className="text-xs font-opensans text-gray-500">Starting June 2023</p>
                      </div>
                      <div>
                        <h5 className="font-semibold font-playfair text-crimson">Supply Chain Transparency Act</h5>
                        <p className="text-sm font-opensans text-gray-700 mb-1">
                          Join our coalition pushing for legislation requiring businesses to eliminate slavery from supply chains.
                        </p>
                        <p className="text-xs font-opensans text-gray-500">Ongoing Campaign</p>
                      </div>
                      <div>
                        <h5 className="font-semibold font-playfair text-crimson">Education for Freedom Initiative</h5>
                        <p className="text-sm font-opensans text-gray-700 mb-1">
                          Help bring trafficking awareness programs to schools and communities.
                        </p>
                        <p className="text-xs font-opensans text-gray-500">Launching September 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* API Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-earth-green">
            Explore Our API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-earth-green/10 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-earth-green" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">Data Access</h3>
              <p className="text-gray-600 mb-4">
                Get real-time access to our database of wildlife trafficking reports, ethical sourcing initiatives, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Wildlife alert monitoring</li>
                <li>• Supply chain transparency</li>
                <li>• Ethical sourcing verification</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-crimson/10 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-crimson" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">Analytics</h3>
              <p className="text-gray-600 mb-4">
                Leverage our analytics API to generate insights and visualizations from our extensive dataset.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Trafficking pattern recognition</li>
                <li>• Impact measurement</li>
                <li>• ESG performance metrics</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">Alerts</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to real-time alerts for wildlife trafficking incidents and high-risk areas.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Webhook integrations</li>
                <li>• SMS & email notifications</li>
                <li>• Custom alert thresholds</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-earth-green hover:bg-earth-green/90 text-white">
              View API Documentation <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="bg-earth-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-gold">
                Join Our Movement
              </h2>
              <p className="text-lg mb-6 font-opensans leading-relaxed">
                Take the first step by signing up for our newsletter and volunteer
                network. We'll connect you with opportunities that match your
                interests and availability.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic mb-6">
                <p className="text-lg font-playfair">
                  "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has."
                </p>
                <footer className="mt-2 text-gold">— Margaret Mead</footer>
              </blockquote>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white text-earth-green p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-earth-green">
                  Sign Up Now
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 font-opensans">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 font-opensans">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 font-opensans">
                      How would you like to contribute? (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-crimson hover:bg-crimson/90 text-white font-semibold py-3">
                    Join the Movement
                  </Button>
                  <p className="text-xs text-gray-500 text-center font-opensans">
                    By signing up, you agree to our Privacy Policy and Terms of Service.
                    We'll never share your information with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActNow;
