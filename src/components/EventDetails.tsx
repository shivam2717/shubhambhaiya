import React from 'react';
import { MapPin, Clock, Users, Building2, Calendar } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: 'Date',
      value: '4th September 2025',
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      icon: Clock,
      title: 'Time',
      value: '2:10 PM',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: MapPin,
      title: 'Venue',
      value: 'RABINDRA BHAWAN',
      subtitle: 'Dr. B. C. Roy Engineering College',
      gradient: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Users,
      title: 'Organised by',
      value: 'ELECTRONIC AND COMMUNICATION',
      subtitle: 'ENGINEERING DEPARTMENT',
      gradient: 'from-indigo-400 to-purple-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className={`glass-card rounded-2xl p-8 hover:scale-105 hover:rotate-1 transition-all duration-500 group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${detail.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <detail.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  {detail.title}
                </h3>
                <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${detail.gradient} bg-clip-text text-transparent mb-2`}>
                  {detail.value}
                </p>
                {detail.subtitle && (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {detail.subtitle}
                  </p>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${detail.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Special Message Card */}
        <div className="mt-16 glass-card rounded-3xl p-12 text-center animate-fade-in-up delay-800">
          <Building2 className="w-12 h-12 text-cyan-400 mx-auto mb-6 animate-float" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Us for a Special Celebration
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We invite you to be part of this meaningful gathering as we honor the dedication, 
            wisdom, and impact of our beloved teachers. Your presence will make this celebration even more special.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-300/30">
            <span className="text-cyan-300 font-medium">We eagerly await your arrival</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;