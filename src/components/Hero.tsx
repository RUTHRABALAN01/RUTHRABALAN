import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Brain } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 neural-dots" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">AI/ML Engineering Student</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Ruthrabalan</span>
              <br />
              <span className="text-gradient">Manthramoorthi</span>
            </h1>
            
            {/* Role */}
            <p className="text-lg md:text-xl text-primary font-mono mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              AI Systems • Computer Vision • CAD Automation
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Building intelligent systems that automate engineering workflows using AI, geometry, and simulation-aware logic.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="glow" size="xl">
                <Brain className="w-5 h-5" />
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
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-gradient relative">
                <img 
                  src={avatarImage} 
                  alt="Ruthrabalan Manthramoorthi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
