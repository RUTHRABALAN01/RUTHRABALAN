import { Network, HardDrive, Terminal, Wifi, Monitor, Wrench, Server, Cable } from 'lucide-react';

const NetworkHardware = () => {
  const networkSkills = [
    { icon: Network, text: 'Understanding of OSI Model and TCP/IP basics' },
    { icon: Wifi, text: 'IP addressing and subnetting fundamentals' },
    { icon: Server, text: 'Routers, switches, and access points configuration' },
    { icon: Cable, text: 'LAN setup and troubleshooting' },
    { icon: Terminal, text: 'Basic network diagnostics — ping, traceroute, ipconfig' },
  ];

  const hardwareSkills = [
    { icon: HardDrive, text: 'Hardware assembly & component identification (RAM, SSD, PSU, motherboard)' },
    { icon: Monitor, text: 'Operating system installation — Windows & Linux' },
    { icon: Terminal, text: 'Basic Linux terminal usage and file management' },
    { icon: Wrench, text: 'Troubleshooting slow systems and connectivity issues' },
  ];

  return (
    <section id="networking" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-mono text-sm">// INFRASTRUCTURE</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Networking & Hardware
            <br />
            <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mb-16">
          <div className="p-6 rounded-2xl border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <p className="relative text-muted-foreground leading-relaxed text-lg">
              I am actively preparing for the <span className="text-foreground font-semibold">Cisco CCNA certification</span> and 
              building practical networking skills through hands-on labs and self-study. With a solid 
              foundation in both networking fundamentals and hardware troubleshooting, I am ready to 
              contribute to <span className="text-foreground font-semibold">technical support, system maintenance, and IT infrastructure setup</span> roles 
              from day one.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Networking */}
          <div className="space-y-4">
            <h3 className="font-mono text-xl text-primary mb-6 flex items-center gap-2">
              <Network className="w-5 h-5" /> Networking
            </h3>
            <div className="space-y-3">
              {networkSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <skill.icon className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Systems */}
          <div className="space-y-4">
            <h3 className="font-mono text-xl text-primary mb-6 flex items-center gap-2">
              <HardDrive className="w-5 h-5" /> Hardware & Systems
            </h3>
            <div className="space-y-3">
              {hardwareSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <skill.icon className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkHardware;
