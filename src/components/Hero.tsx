import { Button } from '@/components/ui/button';
import { ArrowDown, Star } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

const Hero = () => {
  const stats = [
    { number: '3+', label: 'PROJECTS ONGOING' },
    { number: 'B.Tech', label: 'AI/ML STUDENT' },
    { number: '5+', label: 'TECHNOLOGIES' },
  ];

  const marqueeText = 'AI SYSTEMS • COMPUTER VISION • CAD AUTOMATION • DEEP LEARNING • GRAPH NEURAL NETWORKS • ';

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 pt-24 pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Stats Row */}
            <div className="flex gap-8 animate-fade-up">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-display text-foreground">{stat.number}</span>
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Main Heading */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] tracking-wide">
                <span className="text-foreground">AI/ML</span>
                <br />
                <span className="text-primary">ENGINEER</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-md animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Building intelligent systems that automate engineering workflows using AI, geometry, and simulation-aware logic.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider px-8 py-6 text-sm"
              >
                Get Started
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right - Avatar with Accent */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              {/* Neon accent shape behind */}
              <div className="absolute -top-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-primary rounded-full opacity-80" />
              
              {/* Avatar Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden flex items-end justify-center">
                <img 
                  src={avatarImage} 
                  alt="Ruthrabalan" 
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute bottom-8 left-0 bg-background/90 backdrop-blur-sm border border-border px-4 py-2 z-20">
                <span className="font-display text-2xl md:text-3xl text-foreground">RUTHRABALAN</span>
              </div>

              {/* Decorative Star */}
              <div className="absolute top-4 left-4 z-20">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="border-t border-b border-border bg-primary py-4 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          <span className="text-2xl md:text-3xl font-display text-primary-foreground tracking-wider">
            {marqueeText.repeat(4)}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="py-8 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;