const Skills = () => {
  const skillCategories = [
    {
      title: 'Deep Learning',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'Hugging Face'],
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'AutoML', 'Feature Engineering'],
    },
    {
      title: 'NLP & LLMs',
      skills: ['Transformers', 'LangChain', 'GPT', 'BERT', 'RAG Systems'],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'YOLO', 'ResNet', 'Stable Diffusion', 'Image Segmentation'],
    },
    {
      title: 'MLOps & Cloud',
      skills: ['AWS SageMaker', 'GCP Vertex AI', 'MLflow', 'Kubeflow', 'Docker'],
    },
    {
      title: 'Data Engineering',
      skills: ['Apache Spark', 'Airflow', 'SQL', 'Pandas', 'Dask'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 neural-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end AI solutions
          </p>
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
        
        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'ML Models Deployed' },
            { value: '10M+', label: 'Predictions/Day' },
            { value: '15+', label: 'Research Papers' },
            { value: '99.9%', label: 'Model Uptime' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
              <div className="text-muted-foreground font-mono text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
