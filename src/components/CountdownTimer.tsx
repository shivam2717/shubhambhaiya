import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-04T14:10:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Event Countdown
            </h2>
            <Clock className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Time remaining until our special Teacher's Day celebration
          </p>
        </div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up delay-400">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className={`glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-glow`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-lg md:text-xl text-gray-300 capitalize font-medium">
                {unit}
              </div>
              <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                  style={{ width: `${(value % 60) / 60 * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Event Reminder */}
        <div className="mt-16 glass-card rounded-2xl p-8 animate-fade-in-up delay-800">
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span className="text-lg text-purple-300 font-medium">Save the Date</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            September 4th, 2025 at 2:10 PM
          </p>
          <p className="text-lg text-gray-300">
            Mark your calendar and be part of this special celebration!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;