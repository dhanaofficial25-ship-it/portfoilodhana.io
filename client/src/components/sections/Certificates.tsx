import { motion } from "framer-motion";
import { certificates } from "@/data/resume";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Awards</h2>
          <p className="text-muted-foreground">My achievements and participations</p>
        </motion.div>

        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-primary/10 overflow-hidden hover:border-primary/40 transition-all duration-300">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <img 
                            src={cert.img} 
                            alt={cert.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <h4 className="font-semibold text-sm line-clamp-2">{cert.title}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
