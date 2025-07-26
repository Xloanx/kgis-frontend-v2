import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Delivering dependable services you can trust"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Committed to exceeding expectations in every project"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients as strategic partners"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <section className="py-20 px-10 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Founded by Passionate Engineers,
              <span className="gradient-text block">Driven by Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kernel Greens Integrated Services was born from a vision to bridge the gap 
              between complex technology and practical business solutions. Our team of 
              skilled professionals combines deep technical expertise with a genuine 
              understanding of business needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Mission</h4>
                  <p className="text-muted-foreground">To empower businesses through innovative technology solutions that drive growth and efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Vision</h4>
                  <p className="text-muted-foreground">To be the leading technology partner for businesses seeking digital transformation and sustainable growth.</p>
                </div>
              </div>
            </div>
                <Link href="/about" passHref>
                    <Button variant="cta" size="lg" className="group">
                        Learn More About Us
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="hover:shadow-medium transition-all duration-300 group border-primary/10">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-gradient-accent rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;