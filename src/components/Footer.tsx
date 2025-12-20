const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            © 2024 <span className="text-gradient">RUTHRABALAN</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>Built with</span>
            <span className="text-primary">engineering-first</span>
            <span>mindset</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
