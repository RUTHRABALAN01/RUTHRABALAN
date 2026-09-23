import { Briefcase, Calendar, Rocket, CheckCircle, Users, BarChart3, Lightbulb, ClipboardList, Presentation, FolderKanban } from 'lucide-react';

type Responsibility = {
  icon: React.ElementType;
  text: string;
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
    period: 'Jul 2026 — Sep 2026',
    ongoing: false,
    summary:
      'Completed a Business Analytics Internship working on two product/analytics projects from requirements to delivery. I supported the team with data analysis, requirements understanding, process documentation, and cross-functional coordination — applying analytical thinking and technical skills to deliver practical business value.',
    responsibilities: [
      {
        icon: BarChart3,
        text: 'Business Analytics — Collecting, cleaning, and analyzing data to support operational decisions',
      },
      {
        icon: Lightbulb,
        text: 'Project Development — Contributing to 2 ongoing product/analytics projects from requirements to delivery',
      },
      {
        icon: Users,
        text: 'Stakeholder Coordination — Supporting communication between technical teams and business units',
      },
      {
        icon: Briefcase,
        text: 'Process Documentation — Creating clear reports and workflows to improve transparency and efficiency',
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

              <div className="p-8">
                <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> WHAT I'M LEARNING
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
