import React from 'react';
import { Sparkles, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="neural-network">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Personalized Greeting */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-300/30 backdrop-blur-sm">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <span className="text-lg text-purple-200 font-medium">Dear Shubham Bhaiya, You're Invited!</span>
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Teacher's Day
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Celebration
          </span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            2025
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-up delay-400">
          A Special Invitation to{' '}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
            Shubham Bhaiya
          </span>
        </h2>

        {/* Invitation Message */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-in-up delay-600">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-cyan-400 mr-3" />
            <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow" />
            <Users className="w-8 h-8 text-cyan-400 ml-3" />
          </div>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Dear Shubham Bhaiya, on the occasion of Teacher's Day, we would be{' '}
            <span className="text-cyan-300 font-medium">honored by your presence</span> as we celebrate our teachers and mentors. 
            Please join us in this special celebration organised by the{' '}
            <span className="text-purple-300 font-medium">ECE Department</span>.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4 animate-fade-in-up delay-800">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;