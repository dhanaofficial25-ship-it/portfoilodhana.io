import { motion } from "framer-motion";
import { personalInfo, education, achievements } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            {personalInfo.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg text-foreground">{edu.school}</h4>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>{edu.year}</span>
                      <span>{edu.status}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold">Performance: {edu.performance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <Card key={idx} className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors group">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                      <span className="text-xs text-primary/80 mt-1 block">{item.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
