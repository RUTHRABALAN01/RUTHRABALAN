import { Briefcase, Calendar, Rocket, CheckCircle, Users, BarChart3, Lightbulb, ClipboardList, Presentation, FolderKanban, Target, ShieldAlert } from 'lucide-react';

type Responsibility = {
  icon: React.ElementType;
  text: string;
};

type Project = {
  title: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
  highlights: Responsibility[];
};

type Internship = {
  role: string;
  company: string;
  location?: string;
  period: string;
  ongoing: boolean;
  summary: string;
  responsibilities: Responsibility[];
  outcomes: string[];
  projects?: Project[];
};

const internships: Internship[] = [
  {
    role: 'Project Coordinator Intern',
    company: 'Azentra Global',
    period: 'Sep 2026 — Present',
    ongoing: true,
    summary:
      'Working as a Project Coordinator Intern under Azentra Global. I support real-world project coordination, team activities, meetings, and presentations — bridging technical delivery and stakeholder communication.',
    responsibilities: [
      {
        icon: FolderKanban,
        text: 'Project Coordination — Track progress, tasks, and timelines across ongoing projects to keep delivery on schedule',
      },
      {
        icon: Users,
        text: 'Developer & Stakeholder Liaison — Work closely with developers and stakeholders to align expectations, scope, and priorities',
      },
      {
        icon: ClipboardList,
        text: 'Roadblock Resolution — Help developers draft and structure pending work when they hit a roadblock, clarifying what needs to be done',
      },
      {
        icon: CheckCircle,
        text: 'Work Evaluation & Review — Evaluate and review developer deliverables against requirements before sign-off',
      },
      {
        icon: Presentation,
        text: 'Meetings & Presentations — Coordinate meetings, reviews, and presentations between technical teams and business units',
      },
    ],
    projects: [
      {
        title: 'AI/ML Campus Irregularity & Anomaly Detection System',
        period: 'Sep 2026 — Present',
        role: 'Technical Product Lead — driving requirements, schema design, and engineering handoff',
        tags: ['Product Discovery', 'API Schema Design', 'ML Scoping', 'MLOps'],
        summary:
          'On a Campus Automation platform covering attendance and facility access, the admin team needed to detect unauthorized, fraudulent, or irregular movements — but pending scanner-hardware decisions threatened to stall every backend and ML workstream. I owned the product requirements end to end: designed the API schema contract, scoped a decoupled ML anomaly-detection workflow, and enabled engineering teams to build synthetic evaluation pipelines in parallel while hardware vendors were still being selected.',
        highlights: [
          {
            icon: ClipboardList,
            text: 'Hardware-agnostic API contract — standardized a shared JSON event schema (person, location, timestamp, event type) so ML pipelines could be built on clean event logs without waiting for vendor SDKs',
          },
          {
            icon: Target,
            text: 'Rule engine vs. ML scoping — ran a trade-off analysis so deterministic rules handled fixed tardiness, impossible-geography and role violations, while unsupervised models (Isolation Forest / One-Class SVM) handled only subtle behavioral anomalies',
          },
          {
            icon: BarChart3,
            text: 'Synthetic data pipeline — defined the functional requirements for a synthetic event generator injecting realistic anomalies (odd-hour access, location flips, frequency spikes) to establish a baseline anomaly benchmark before hardware installation',
          },
          {
            icon: ShieldAlert,
            text: 'Trust & rollout safety — replaced binary flags with tiered confidence alerts (Review Suggested vs. High-Confidence Flag) and mandated a zero-alert shadow deployment phase to calibrate thresholds before live notifications',
          },
        ],
      },
    ],
    outcomes: [
      'Gained hands-on exposure to real-world project coordination and cross-functional teamwork',
      'Developed the ability to unblock developers and translate stakeholder needs into clear, actionable work',
      'Strengthened review and evaluation skills by assessing deliverables against requirements',
      'Improved leadership, organization, and stakeholder-management skills in a live environment',
    ],
  },
  {
    role: 'Business Analytics Intern',
    company: 'Azentra Global',
    period: 'Jun 2026 — Sep 2026',
    ongoing: false,
    summary:
      'Completed a Business Analytics Internship working on two product/analytics projects from requirements to delivery. I supported the team with data analysis, requirements understanding, process documentation, and cross-functional coordination — applying analytical thinking and technical skills to deliver practical business value.',
    responsibilities: [
      {
        icon: BarChart3,
        text: 'Business Analytics — Collected, cleaned, and analyzed data to support operational decisions',
      },
      {
        icon: Lightbulb,
        text: 'Project Development — Contributed to 2 product/analytics projects from requirements to delivery',
      },
      {
        icon: Users,
        text: 'Stakeholder Coordination — Supported communication between technical teams and business units',
      },
      {
        icon: Briefcase,
        text: 'Process Documentation — Created clear reports and workflows to improve transparency and efficiency',
      },
    ],
    outcomes: [
      'Gained hands-on exposure to real-world business problems and data-driven decision making',
      'Learned to align technical solutions with business goals and client expectations',
      'Improved ability to translate analytics insights into actionable recommendations',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// PROFESSIONAL EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Internship <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {internships.map((item, index) => (
            <div key={index} className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="p-8 border-b border-border">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full">
                    {item.role}
                  </span>
                  {item.ongoing && (
                    <>
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-muted-foreground">Ongoing</span>
                    </>
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="p-8 border-b border-border">
                <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <Rocket className="w-4 h-4" /> KEY RESPONSIBILITIES
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.responsibilities.map((resp, rIndex) => (
                    <div
                      key={rIndex}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <resp.icon className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {resp.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {item.projects && item.projects.length > 0 && (
                <div className="p-8 border-b border-border">
                  <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                    <FolderKanban className="w-4 h-4" /> FEATURED WORK
                  </h4>
                  <div className="space-y-6">
                    {item.projects.map((project, pIndex) => (
                      <div
                        key={pIndex}
                        className="rounded-xl border border-primary/20 bg-secondary/40 p-6 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h5 className="text-xl font-bold font-mono text-foreground">
                            {project.title}
                          </h5>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-mono text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {project.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            {project.role}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {project.summary}
                        </p>

                        <div className="space-y-3 mb-5">
                          {project.highlights.map((hl, hIndex) => (
                            <div key={hIndex} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/60">
                              <hl.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <span className="text-muted-foreground text-sm">{hl.text}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> {item.ongoing ? "WHAT I'M LEARNING" : 'WHAT I LEARNED'}
                </h4>
                <ul className="space-y-3">
                  {item.outcomes.map((outcome, oIndex) => (
                    <li key={oIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
