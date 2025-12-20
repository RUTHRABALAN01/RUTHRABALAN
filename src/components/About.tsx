import { Code2, Database, Cpu, LineChart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, label: 'Deep Learning', value: 'PyTorch & TensorFlow' },
    { icon: Database, label: 'Data Processing', value: 'Big Data Pipelines' },
    { icon: Cpu, label: 'MLOps', value: 'Production Systems' },
    { icon: LineChart, label: 'Research', value: 'Published Papers' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-mono text-sm">// ABOUT ME</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Passionate about
                <br />
                <span className="text-gradient">AI Innovation</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a Machine Learning Engineer with 5+ years of experience building 
                production-grade AI systems. My expertise spans from research prototyping 
                to deploying scalable ML pipelines that serve millions of predictions daily.
              </p>
              <p>
                Currently focused on large language models, computer vision, and 
                the intersection of AI with real-world applications. I believe in 
                making AI accessible, efficient, and impactful.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border-gradient group hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-mono text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl border-gradient overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              
              {/* Code-like decoration */}
              <div className="absolute inset-8 flex flex-col justify-center font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-accent">class</span> <span className="text-primary">MLEngineer</span>:
                </div>
                <div className="pl-4 text-muted-foreground">
                  <span className="text-accent">def</span> <span className="text-foreground">__init__</span>(self):
                </div>
                <div className="pl-8 text-muted-foreground">
                  self.skills = [<span className="text-primary">"ML"</span>, <span className="text-primary">"DL"</span>, <span className="text-primary">"NLP"</span>]
                </div>
                <div className="pl-8 text-muted-foreground">
                  self.passion = <span className="text-accent">True</span>
                </div>
                <div className="pl-8 text-muted-foreground">
                  self.coffee = <span className="text-primary">float</span>(<span className="text-accent">"inf"</span>)
                </div>
                <div className="pl-4 pt-4 text-muted-foreground">
                  <span className="text-accent">def</span> <span className="text-foreground">build</span>(self, idea):
                </div>
                <div className="pl-8 text-muted-foreground">
                  <span className="text-accent">return</span> <span className="text-primary">Production</span>(idea)
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
