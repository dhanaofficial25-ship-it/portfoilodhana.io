import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Mail":
      return Mail;
    case "Linkedin":
      return Linkedin;
    case "Github":
      return Github;
    default:
      return Mail;
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            {personalInfo.title}. Passionate about building seamless web experiences and exploring emerging tech like AR/VR.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full text-lg h-12 px-8" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8" asChild>
              <Link href="/experience">View Experience</Link>
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            {personalInfo.socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src={personalInfo.image} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Link href="/about">
          <ArrowDown className="text-muted-foreground w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
