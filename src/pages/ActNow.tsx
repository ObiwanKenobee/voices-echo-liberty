
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

const ActNow = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user) {
      // If logged in, store as a partner application
      await submitAsPartner();
    } else {
      // If not logged in, redirect to auth page with join tab selected
      navigate('/auth', { state: { tab: 'signup', formData: { name, email, message } } });
    }
  };
  
  const submitAsPartner = async () => {
    setIsSubmitting(true);
    
    try {
      // Save the form data to the database - fixing the field names to match the schema
      const { error } = await supabase
        .from('partners')
        .insert({
          name: name,
          contact_email: email,
          description: message,
          status: 'pending',
          partnership_type: 'volunteer',
        });
        
      if (error) throw error;
      
      // Reset the form
      setName("");
      setEmail("");
      setMessage("");
      
      toast.success("Thank you for joining our mission! We'll be in touch soon.");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Act Now</h1>
        <p className="text-center mb-8">
          Join our mission to protect wildlife and combat modern slavery.
          Together, we can make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-earth-green/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Report a Wildlife Crime</h2>
            <p className="mb-4">
              If you've witnessed poaching, illegal wildlife trade, or any other
              wildlife crime, report it securely through our platform.
            </p>
            <Button className="w-full bg-earth-green hover:bg-earth-green/90">
              Report Now
            </Button>
          </div>

          <div className="bg-crimson/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Report Human Trafficking</h2>
            <p className="mb-4">
              Help us fight modern slavery by reporting suspected human
              trafficking activities securely and anonymously.
            </p>
            <Button className="w-full bg-crimson hover:bg-crimson/90">
              Report Now
            </Button>
          </div>
        </div>

        <div className="bg-gold/5 p-8 rounded-lg border border-gold/20">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Join Our Mission
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                How would you like to help?
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold/90 text-white py-3 px-6 rounded-md text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join the Mission"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActNow;
