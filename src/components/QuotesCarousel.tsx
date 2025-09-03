import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

const QuotesCarousel = () => {
  const quotes = [
    {
      text: "Teachers inspire, guide, and shape the future.",
      author: "Anonymous",
      language: "english"
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      language: "english"
    },
    {
      text: "गुरु के बिना ज्ञान संभव नहीं, और ज्ञान के बिना जीवन।",
      author: "Sanskrit Proverb",
      language: "hindi"
    },
    {
      text: "शिक्षक वह शक्ति है जो अंधकार से प्रकाश की ओर ले जाती है।",
      author: "Traditional Hindi Saying",
      language: "hindi"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Words of Wisdom
            </h2>
            <Quote className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-xl text-gray-300">
            Celebrating the profound impact of teachers
          </p>
        </div>

        {/* Quote Carousel */}
        <div className="relative glass-card rounded-3xl p-12 md:p-16 animate-fade-in-up delay-400">
          {/* Quote Content */}
          <div className="text-center min-h-[200px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-8 animate-float" />
            
            <blockquote 
              className={`text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 transition-all duration-500 ${
                quotes[currentQuote].language === 'hindi' 
                  ? 'text-purple-200 font-medium' 
                  : 'text-white'
              }`}
              style={{
                fontFamily: quotes[currentQuote].language === 'hindi' ? 'serif' : 'inherit'
              }}
            >
              "{quotes[currentQuote].text}"
            </blockquote>
            
            <cite className="text-lg text-cyan-300 font-medium not-italic">
              — {quotes[currentQuote].author}
            </cite>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevQuote}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-300/30 flex items-center justify-center hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextQuote}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-300/30 flex items-center justify-center hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-purple-400" />
            </button>
          </div>

          {/* Quote Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Language Indicator */}
          <div className="absolute top-6 right-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              quotes[currentQuote].language === 'hindi'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-300/30'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-300/30'
            }`}>
              {quotes[currentQuote].language === 'hindi' ? 'हिंदी' : 'English'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;