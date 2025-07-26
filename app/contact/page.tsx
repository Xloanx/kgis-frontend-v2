import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (805) 720-8137", "+234 (802) 901-2220"],
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@kernelgreens.com", "support@kernelgreens.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["20 Bankole Street, Isheri-Ojodu, Berger, Lagos State, Nigeria"],
      description: "Visit us for in-person meetings"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 2pm"],
      description: "Emergency support available 24/7"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "Sales & Partnerships",
      email: "sales@kernelgreens.com",
      description: "For new projects and business partnerships"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      email: "support@kernelgreens.com",
      description: "For existing clients and technical issues"
    },
    {
      icon: MessageSquare,
      title: "General Inquiries",
      email: "hello@kernelgreens.com",
      description: "For general questions and information"
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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Ready to transform your business? Let's discuss how we can help you 
                achieve your technology goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-10 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            First Name *
                          </label>
                          <Input placeholder="Rahman" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Last Name *
                          </label>
                          <Input placeholder="Christopher" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Email Address *
                          </label>
                          <Input type="email" placeholder="rahman_christopher@company.com" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Phone Number
                          </label>
                          <Input placeholder="+234 (801) 234-5678" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Company Name
                          </label>
                          <Input placeholder="Your Company" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Service Interested In
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="software">Software Development</SelectItem>
                              <SelectItem value="automation">Process Automation</SelectItem>
                              <SelectItem value="support">IT Support & Sales</SelectItem>
                              <SelectItem value="cloud">Cloud Operations</SelectItem>
                              <SelectItem value="training">Training & Development</SelectItem>
                              <SelectItem value="energy">Renewable Energy</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Project Budget Range
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                            <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Project Description *
                        </label>
                        <Textarea 
                          placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                          rows={5}
                        />
                      </div>

                      <Button variant="cta" size="lg" className="w-full group">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={info.title} className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-muted-foreground text-sm">{detail}</p>
                            ))}
                            <p className="text-xs text-muted-foreground mt-2">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 px-10 bg-gradient-accent">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact by Department
              </h2>
              <p className="text-xl text-muted-foreground">
                Reach out to the right team for faster assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={dept.title} className="hover:shadow-medium transition-all duration-300 group text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
                      >
                        {dept.email}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-10 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule an appointment for in-person meetings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Office Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Kernel Greens Integrated Services</p>
                        <p className="text-muted-foreground">20 Bankole Street, Isheri-Ojodu, Berger,</p>
                        <p className="text-muted-foreground"> Lagos State, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                        <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>

              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would be integrated here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;