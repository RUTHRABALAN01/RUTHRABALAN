import { Layers, Target, Users, BarChart3, ClipboardList, CheckCircle, ArrowRight } from 'lucide-react';

type CaseStudy = {
  id: string;
  title: string;
  context: string;
  role: string;
  tags: string[];
  approach: { icon: React.ElementType; text: string }[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    id: '01',
    title: 'Cross-Functional Delivery Coordination',
    context:
      'Developers on an ongoing Azentra Global project were hitting recurring roadblocks — unclear requirements and stalled reviews were delaying sign-off and creating rework. Stakeholders and the engineering team were operating from different understandings of what "done" meant.',
    role: 'Project Coordinator Intern — bridging stakeholders and developers',
    tags: ['Coordination', 'Stakeholder Collaboration', 'Product Execution'],
    approach: [
      {
        icon: Users,
        text: 'Aligned stakeholders and developers on scope and priorities, translating business needs into clearly scoped work items',
      },
      {
        icon: ClipboardList,
        text: 'When developers hit a roadblock, drafted and structured the pending work so they could continue with clarity instead of waiting',
      },
      {
        icon: CheckCircle,
        text: 'Evaluated and reviewed developer deliverables against requirements before sign-off, catching gaps early',
      },
      {
        icon: Layers,
        text: 'Ran coordination meetings and reviews between technical teams and business units to keep delivery on schedule',
      },
    ],
    outcomes: [
      'Reduced rework by aligning expectations early and reviewing deliverables against requirements before sign-off',
      'Unblocked developers faster by turning ambiguous roadblocks into structured, actionable work',
      'Improved transparency between engineering and stakeholders through regular reviews and documentation',
    ],
    metrics: [
      { label: 'Roles aligned', value: 'Dev × Stakeholder' },
      { label: 'Review stage', value: 'Pre-sign-off' },
    ],
  },
  {
    id: '02',
    title: 'Analytics-Driven Product Insights',
    context:
      'During the Business Analytics internship, two product/analytics initiatives needed someone to own the data layer — collect, clean, and interpret the numbers, then turn them into recommendations both technical and business teams could act on.',
    role: 'Business Analytics Intern — owning data collection through recommendations',
    tags: ['Analytics', 'Data Interpretation', 'Requirements'],
    approach: [
      {
        icon: BarChart3,
        text: 'Collected, cleaned, and analyzed raw data to surface what was actually happening versus what was assumed',
      },
      {
        icon: Target,
        text: 'Tied findings back to product goals so insights drove decisions, not just reports',
      },
      {
        icon: Users,
        text: 'Communicated results in language both engineers and stakeholders understood, supporting cross-functional decisions',
      },
      {
        icon: ClipboardList,
        text: 'Documented workflows and findings so the team could reuse the analysis beyond a single cycle',
      },
    ],
    outcomes: [
      'Delivered 2 product/analytics projects end-to-end from requirements to delivery',
      'Converted raw data into actionable recommendations that aligned technical work with business goals',
      'Improved team transparency with documented reports and repeatable workflows',
    ],
    metrics: [
      { label: 'Projects shipped', value: '2' },
      { label: 'Cycle', value: 'Req → Delivery' },
    ],
  },
  {
    id: '03',
    title: 'Translating AI/ML Research into Usable Systems',
    context:
      'Academic and personal AI/ML work — computer vision, geometric reasoning, CAD automation — only creates value when it is usable. The recurring challenge was bridging a research-grade model and a product-grade workflow that a non-technical user could actually operate.',
    role: 'AI/ML Engineer — productizing research into explainable systems',
    tags: ['Product Execution', 'Technical Translation', 'Modular Design'],
    approach: [
      {
        icon: Target,
        text: 'Started from the user or business problem, then designed the solution rather than leading with the model',
      },
      {
        icon: Layers,
        text: 'Built modular, explainable, and performance-aware systems so outputs could be trusted and reviewed',
      },
      {
        icon: Users,
        text: 'Translated complex technical ideas for non-technical stakeholders so they could evaluate and adopt the output',
      },
      {
        icon: BarChart3,
        text: 'Used data and structured thinking to support every design decision',
      },
    ],
    outcomes: [
      'Built AI systems that were technically sound and commercially meaningful, not just research demos',
      'Improved adoption by making model outputs explainable and reviewable for stakeholders',
      'Documented work phase by phase to keep product decisions transparent and reversible',
    ],
    metrics: [
      { label: 'Approach', value: 'Problem-first' },
      { label: 'Systems', value: 'Explainable' },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 relative">
      <div className="absolute inset-0 neural-dots opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// PRODUCT CASE STUDIES</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            How I Drive <span className="text-gradient">Product Execution</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Three lenses on the same loop — understand the problem, align people, ship something measurable.
            Each shows how I combine coordination, analytics, and technical translation to move a product forward.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card overflow-hidden group hover:border-primary/40 transition-colors duration-300"
            >
              {/* Header */}
              <div className="p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm text-primary">{study.id}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{study.context}</p>
                <div className="flex items-center gap-2 mt-4 text-sm font-mono text-primary">
                  <Target className="w-4 h-4" />
                  <span>{study.role}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div className="p-8 border-b border-border">
                <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> APPROACH
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {study.approach.map((step, aIndex) => (
                    <div
                      key={aIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <step.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes + Metrics */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> OUTCOMES
                    </h4>
                    <ul className="space-y-3">
                      {study.outcomes.map((outcome, oIndex) => (
                        <li key={oIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" /> AT A GLANCE
                    </h4>
                    <div className="space-y-4">
                      {study.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="p-3 rounded-xl border border-border bg-secondary/50">
                          <div className="text-xs font-mono text-muted-foreground mb-1">
                            {metric.label}
                          </div>
                          <div className="font-semibold text-foreground font-mono text-sm">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
