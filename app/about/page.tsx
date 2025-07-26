import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
  Zap,
  TrendingUp
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to bridge technology and business needs" },
    { year: "2020", title: "First Major Client", description: "Delivered our first enterprise software solution" },
    { year: "2021", title: "Team Expansion", description: "Grew to 15+ skilled professionals" },
    { year: "2022", title: "Cloud Certification", description: "Achieved AWS Advanced Consulting Partner status" },
    { year: "2023", title: "100+ Projects", description: "Crossed milestone of 100 successful project deliveries" },
    { year: "2024", title: "Renewable Focus", description: "Expanded into renewable energy solutions" }
  ];

  const team = [
    {
      name: "Abiodun Muh'd-Ahmad Odukaye",
      role: "CEO & Founder",
      bio: "15+ years in enterprise software development",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Cloud architecture expert with AWS certifications",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Torres",
      role: "Head of Operations",
      bio: "Operational excellence and client success specialist",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack development and modern frameworks expert",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20 px-10 ">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">Kernel Greens</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Founded by passionate engineers, we're dedicated to delivering innovative 
                technology solutions that empower businesses to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20  px-10 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Kernel Greens Integrated Services was born from a simple observation: 
                    businesses needed technology partners who could understand both the 
                    technical complexities and business objectives.
                  </p>
                  <p>
                    Founded in 2019 by a team of experienced engineers and consultants, 
                    we set out to bridge this gap by combining deep technical expertise 
                    with genuine business acumen.
                  </p>
                  <p>
                    Today, we've grown into a trusted partner for companies across various 
                    industries, helping them navigate digital transformation while maintaining 
                    focus on sustainable growth and innovation.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">150%</div>
                    <div className="text-sm text-muted-foreground">Average Growth</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20  px-10 bg-gradient-accent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our growth and evolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={milestone.year} className="hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-10 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                The passionate professionals behind our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {team.map((member) => (
                <Card key={member.name} className="hover:shadow-medium transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <div className="text-primary text-sm font-medium mb-2">{member.role}</div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg">
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;