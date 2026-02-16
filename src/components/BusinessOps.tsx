import { Briefcase, Users, BarChart3, FileText, Handshake, Lightbulb } from 'lucide-react';

const BusinessOps = () => {
  const abilities = [
    { icon: FileText, text: 'Requirement Gathering — Identifying, documenting, and prioritizing stakeholder needs' },
    { icon: Users, text: 'Customer Interaction — Professional communication with clients to understand pain points' },
    { icon: Briefcase, text: 'Presentation & Pitching — Structuring and delivering compelling proposals' },
    { icon: Lightbulb, text: 'Process Improvement Thinking — Analyzing workflows to identify bottlenecks and optimize outcomes' },
    { icon: FileText, text: 'Documentation — Creating clear, structured reports and project documentation' },
    { icon: Handshake, text: 'Negotiation Basics — Understanding stakeholder interests and driving mutually beneficial outcomes' },
  ];

  const coreStrengths = [
    {
      title: 'Technical Communication',
      description: 'Translating complex AI and engineering concepts into clear, actionable language that non-technical stakeholders can understand and act upon.',
    },
    {
      title: 'Client Handling & Requirements',
      description: 'Experienced in gathering requirements, understanding user needs, and aligning technical solutions with business objectives.',
    },
    {
      title: 'Problem Solving & Decision Making',
      description: 'Structured, analytical approach to breaking down problems, evaluating trade-offs, and making data-driven decisions under constraints.',
    },
    {
      title: 'Team Coordination & Leadership',
      description: 'Proven ability to coordinate cross-functional teams, organize events, and drive collaborative efforts toward deadlines.',
    },
    {
      title: 'Analytical & Data-Driven Thinking',
      description: 'Leveraging quantitative analysis and metrics to support strategic decisions, identify patterns, and measure impact.',
    },
  ];

  return (
    <section id="business" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// BUSINESS & OPERATIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Business & Operations
            <br />
            <span className="text-gradient">Understanding</span>
          </h2>
        </div>

        {/* Bridge Paragraph */}
        <div className="max-w-3xl mb-16">
          <div className="p-6 rounded-2xl border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <p className="relative text-muted-foreground leading-relaxed text-lg">
              As an engineering student with a strong foundation in AI and systems thinking, 
              I bring a unique ability to <span className="text-foreground font-semibold">bridge the gap between technical teams and management</span>. 
              I combine deep technical knowledge with business acumen — understanding not just 
              <em> how</em> systems work, but <em>why</em> they matter to the business. This dual perspective 
              allows me to communicate effectively across departments, translate requirements into 
              actionable plans, and drive decisions that are both technically sound and commercially viable.
            </p>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreStrengths.map((strength, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-gradient group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary font-mono text-sm">0{index + 1}</span>
                <h3 className="font-semibold text-foreground">{strength.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Practical Abilities */}
        <div className="space-y-4">
          <h3 className="font-mono text-xl text-primary mb-6">Practical Abilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {abilities.map((ability, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <ability.icon className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  {ability.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle indicator */}
        <div className="flex items-center gap-3 mt-12">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground font-mono text-xs">
            Engineering mindset × Business thinking = Impact
          </span>
        </div>
      </div>
    </section>
  );
};

export default BusinessOps;
