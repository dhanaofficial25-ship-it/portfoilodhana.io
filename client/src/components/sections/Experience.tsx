import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey and internships</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l border-primary/20 ml-4 md:ml-auto md:mr-auto pl-8 md:pl-0 space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative md:grid md:grid-cols-5 md:gap-8 items-start"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:left-auto md:right-0 md:col-start-2 md:-ml-[9px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_0_4px_rgba(0,0,0,1)] md:hidden" />
              
              <div className="md:col-span-2 md:text-right md:pr-12 relative hidden md:block">
                <h3 className="font-bold text-lg">{job.company}</h3>
                <span className="text-sm text-muted-foreground block mb-2">{job.period}</span>
                <div className="absolute right-[-41px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_0_4px_hsl(var(--background))]" />
              </div>

              <div className="md:col-span-3 pl-2 md:pl-0">
                <div className="md:hidden mb-2">
                  <h3 className="font-bold text-lg">{job.company}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                  {job.role}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {job.icon && <job.icon className="w-3 h-3 mr-1" />}
                    {idx === 0 ? "Full Time" : "Internship"}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
