import { ExternalLink, Github, Brain, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Vision API',
      description: 'Production-grade computer vision API serving 2M+ requests daily. Features real-time object detection, image classification, and semantic segmentation.',
      tags: ['PyTorch', 'FastAPI', 'Docker', 'YOLO'],
      icon: Eye,
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'LLM Chat Platform',
      description: 'Enterprise conversational AI platform with RAG capabilities. Handles multi-turn conversations with context-aware responses.',
      tags: ['LangChain', 'GPT-4', 'Vector DB', 'React'],
      icon: MessageSquare,
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Time-series forecasting system for financial markets. Achieves 94% accuracy on next-day predictions using ensemble methods.',
      tags: ['XGBoost', 'LSTM', 'Apache Spark', 'AWS'],
      icon: BarChart3,
      gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'AutoML Pipeline',
      description: 'End-to-end automated machine learning system. Handles feature engineering, model selection, and hyperparameter optimization.',
      tags: ['AutoML', 'MLflow', 'Kubernetes', 'Airflow'],
      icon: Brain,
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of AI/ML projects showcasing production-ready solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-gradient overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Button variant="cyber" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
