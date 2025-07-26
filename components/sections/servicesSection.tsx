import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Headphones, 
  Workflow,
  Cloud,
  GraduationCap, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications built with modern technologies",
      features: ["React/Next.js", "Node.js/Python", "Mobile Apps", "API Development"],
      href: "/services/software-development"
    },
    {
    icon: Workflow,
    title: "Process Automation (Low-Code/No-Code)",
    description: "Streamline operations with custom automation solutions built on low-code/no-code platforms",
    features: ["Workflow Automation", "Integration with Existing Tools", "Rapid Deployment", "Scalable Solutions"],
    href: "/services/process-automation"
    },
    {
    icon: Cloud,
    title: "Cloud Operations",
    description: "AWS-certified cloud services for scalable infrastructure management",
    features: ["AWS Migration", "DevOps", "Auto-scaling", "Cost Optimization"],
    href: "/services/cloud-operations"
    },
    {
    icon: Headphones,
    title: "IT Support & Sales",
    description: "Round-the-clock IT support and expert technology sales solutions",
    features: ["24/7 Support", "Hardware Sales", "Network Setup", "Security Solutions"],
    href: "/services/it-support"
    },
        {
      icon: Zap,
      title: "Renewable Energy",
      description: "Eco-friendly energy solutions including solar power installations",
      features: ["Solar Installation", "Backup Systems", "Energy Audit", "Maintenance"],
      href: "/services/renewable-energy"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Corporate learning programs and skill development workshops",
      features: ["Corporate Training", "Skill Assessment", "Custom Curricula", "Certification"],
      href: "/services/training"
    },
  ];

  return (
    <section className="py-20 px-10 bg-gradient-accent">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Solutions for 
            <span className="gradient-text block">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From cutting-edge software development to renewable energy solutions, 
            we provide end-to-end services that drive innovation and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="cta" size="lg" className="group">
            Schedule Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;