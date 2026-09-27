const Skills = () => {
  const skillCategories = [
    {
      title: 'Product Management',
      skills: ['Product Strategy', 'Roadmapping', 'Requirements & Prioritization', 'Go-to-Market', 'User Research', 'Product Discovery'],
    },
    {
      title: 'Stakeholder & Delivery',
      skills: ['Stakeholder Management', 'Cross-Functional Leadership', 'Agile Delivery', 'Sprint Coordination', 'Sign-off & Review', 'Status Reporting'],
    },
    {
      title: 'Analytics & Metrics',
      skills: ['Metrics & KPIs', 'Data Interpretation', 'A/B Testing Concepts', 'Excel / Spreadsheets', 'Basic SQL', 'Visualization Thinking'],
    },
    {
      title: 'Artificial Intelligence',
      skills: ['Machine Learning', 'Deep Learning', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
    },
    {
      title: 'Computer Vision & Geometry',
      skills: ['OpenCV', 'Multi-Camera Systems', 'Object Tracking', 'Point Clouds', 'Mesh Processing', 'B-Rep Concepts'],
    },
    {
      title: 'Programming & Tools',
      skills: ['Python', 'C/C++ (basic)', 'Git', 'GitHub', 'Jupyter', 'VS Code'],
    },
    {
      title: 'AI / ML Tools',
      skills: ['Data Preprocessing', 'Feature Engineering', 'Neural Networks', 'Model Training', 'Evaluation Metrics'],
    },
    {
      title: 'Engineering & Systems',
      skills: ['CAD Systems', 'Visualization Pipelines', 'Rule-Based Systems', 'Optimization', 'Simulation-Aware Design'],
    },
  ];

  const coreSkills = [
    'Product Strategy',
    'Roadmapping',
    'Requirements & Prioritization',
    'Stakeholder Management',
    'Cross-Functional Leadership',
    'Product Execution',
    'User Research',
    'Metrics & KPIs',
    'Data-Driven Decisions',
    'Go-to-Market',
    'Agile Delivery',
    'AI/ML Engineering',
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 neural-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// PRODUCT + ENGINEERING STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A product-management toolkit grounded in AI/ML engineering, business analytics, and data-driven decision making
          </p>
        </div>
        
        {/* Core Skills */}
        <div className="mb-16">
          <h3 className="font-mono text-lg text-center text-primary mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-mono bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground rounded-full hover:border-primary/50 hover:bg-primary/20 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border-gradient group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-mono text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-mono bg-secondary/50 text-muted-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
