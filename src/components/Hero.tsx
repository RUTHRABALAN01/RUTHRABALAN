import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-foreground/20 mb-10 animate-fade-up">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70">AI/ML Engineering Student</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up tracking-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">RUTHRABALAN</span>
            </h1>
            
            {/* Role */}
            <p className="text-base md:text-lg text-foreground/60 font-mono mb-6 animate-fade-up tracking-wide" style={{ animationDelay: '0.15s' }}>
              AI Systems • Computer Vision • CAD Automation
            </p>
            
            {/* Description */}
            <p className="text-base text-foreground/50 max-w-lg mx-auto lg:mx-0 mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Building intelligent systems that automate engineering workflows using AI, geometry, and simulation-aware logic.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="glow" size="xl">
                View Projects
              </Button>
              <Button variant="cyber" size="xl">
                Get in Touch
              </Button>
            </div>
          </div>
          
          {/* Right - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden relative group flex items-center justify-center">
                <img 
                  src={avatarImage} 
                  alt="Ruthrabalan" 
                  className="w-full h-full object-contain mix-blend-multiply invert"
                />
              </div>
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l border-t border-foreground/40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r border-b border-foreground/40" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground transition-colors duration-300">
            <span className="text-xs font-mono uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;