import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Headphones, 
  Cloud, 
  GraduationCap, 
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications built with cutting-edge technologies and best practices.",
      features: [
        "React/Next.js Development",
        "Node.js & Python Backend",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Testing & Quality Assurance"
      ],
        link: "/services/software-development",
      technologies: ["React", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL"],
      pricing: "Starting from $5,000",
      deliveryTime: "4-12 weeks"
    },
    {
    icon: Workflow,
    title: "Low-Code/No-Code Process Automation",
    description: "Accelerate digital transformation by automating workflows and integrating business systems with minimal coding.",
    features: [
        "Business Workflow Automation",
        "Integration with Existing Tools (CRM, ERP, etc.)",
        "Rapid Application Development",
        "Custom Dashboards & Reporting",
        "Scalable, Maintainable Solutions",
        "Reduced Development Time & Costs"
    ],
    link: "/services/process-automation",
    technologies: ["n8n", "Make.com", "Power Automate", "Zapier", "Retool", "Bubble"],
    pricing: "Starting from $3,500",
    deliveryTime: "2-6 weeks"
    },
    {
      icon: Cloud,
      title: "Cloud Operations",
      description: "AWS-certified cloud services for scalable, secure, and cost-efficient infrastructure.",
      features: [
        "AWS Cloud Migration",
        "DevOps & CI/CD Setup",
        "Auto-scaling Solutions",
        "Cost Optimization",
        "Monitoring & Alerting",
        "Disaster Recovery Planning"
      ],
        link: "/services/cloud-operations",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      pricing: "Starting from $1,000/month",
      deliveryTime: "2-8 weeks"
    },
    {
      icon: Headphones,
      title: "IT Support & Sales",
      description: "Comprehensive IT support services and expert technology sales solutions for businesses.",
      features: [
        "24/7 Technical Support",
        "Hardware Sales & Procurement",
        "Network Setup & Configuration",
        "Security Solutions Implementation",
        "System Maintenance",
        "Remote Support Services"
      ],
        link: "/services/it-support",
      technologies: ["Windows", "Linux", "macOS", "Cisco", "Microsoft", "VMware"],
      pricing: "Starting from $200/month",
      deliveryTime: "Immediate support"
    },
    {
      icon: Zap,
      title: "Renewable Energy Solutions",
      description: "Sustainable energy solutions including solar installations and backup systems.",
      features: [
        "Solar Panel Installation",
        "Battery Backup Systems",
        "Energy Efficiency Audits",
        "System Monitoring",
        "Maintenance Services",
        "ROI Analysis & Planning"
      ],
        link: "/services/renewable-energy",
      technologies: ["Solar panels", "Inverters", "Battery systems", "Monitoring software"],
      pricing: "Custom quote required",
      deliveryTime: "2-6 weeks"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Professional training programs and skill development workshops for teams and individuals.",
      features: [
        "Corporate Training Programs",
        "Technical Skill Assessment",
        "Custom Learning Curricula",
        "Certification Preparation",
        "Workshop Facilitation",
        "Progress Tracking & Analytics"
      ],
        link: "/services/training",
      technologies: ["Various platforms", "LMS", "Assessment tools", "Virtual training"],
      pricing: "Starting from $500/session",
      deliveryTime: "1-4 weeks prep"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "We understand your requirements and business objectives"
    },
    {
      step: 2,
      title: "Planning",
      description: "Detailed project planning and timeline creation"
    },
    {
      step: 3,
      title: "Development",
      description: "Agile development with regular updates and feedback"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Testing, deployment, and knowledge transfer"
    },
    {
      step: 5,
      title: "Support",
      description: "Ongoing maintenance and support services"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20 px-10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business 
                growth and digital transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-10 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-strong transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">Starting from</div>
                          <div className="font-bold text-primary">{service.pricing}</div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Delivery Time */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{service.deliveryTime}</span>
                          </div>
                          <Link href={service.link} passHref>
                          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            Get in Touch
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-10 bg-gradient-accent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30" style={{ transform: 'translateX(-50%)' }} />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-10 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" className="group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;