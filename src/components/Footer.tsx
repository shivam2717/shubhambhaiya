import React from 'react';
import { GraduationCap, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Department Logo/Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-8 animate-glow">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>

          {/* Department Name */}
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Electronic & Communication Engineering
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Dr. B. C. Roy Engineering College
          </p>


        {/* Closing Message */}
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center animate-fade-in-up delay-400">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            <h4 className="text-2xl md:text-3xl font-bold text-white">
              With Deep Respect & Gratitude
            </h4>
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
          
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            We look forward to celebrating this special day with you, honoring the incredible 
            contribution of teachers in shaping minds and building futures.
          </p>

          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            With Warm Regards,
            <br />
            <span className="text-2xl">ECE Department, BCREC</span>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
           Made with ❤️ by SHIVAM KUMAR MISHRA
            <Heart className="w-4 h-4 inline text-pink-400" /> for our teachers.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
