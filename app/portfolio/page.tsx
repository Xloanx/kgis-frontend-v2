import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Urban Green Infrastructure Project",
      description: "Complete landscaping and environmental solutions for a 50-acre commercial complex in downtown area.",
      image: "/api/placeholder/600/400",
      category: "Commercial Landscaping",
      location: "New York, NY",
      completion: "2024",
      tags: ["Landscaping", "Environmental", "Commercial"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Sustainable Agricultural Consulting",
      description: "Comprehensive agricultural consulting for organic farming transition covering 200+ acres.",
      image: "/api/placeholder/600/400",
      category: "Agricultural Consulting",
      location: "California, CA",
      completion: "2023",
      tags: ["Agriculture", "Consulting", "Organic"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Smart Irrigation System Implementation",
      description: "Advanced IoT-based irrigation system for water conservation and crop optimization.",
      image: "/api/placeholder/600/400",
      category: "Technology Solutions",
      location: "Texas, TX",
      completion: "2024",
      tags: ["Technology", "IoT", "Water Management"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Residential Garden Transformation",
      description: "Complete makeover of residential properties with sustainable landscaping solutions.",
      image: "/api/placeholder/600/400",
      category: "Residential Landscaping",
      location: "Florida, FL",
      completion: "2023",
      tags: ["Residential", "Landscaping", "Sustainable"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Corporate Campus Greening",
      description: "Large-scale corporate campus beautification with native plants and sustainable practices.",
      image: "/api/placeholder/600/400",
      category: "Corporate Services",
      location: "Washington, WA",
      completion: "Ongoing",
      tags: ["Corporate", "Native Plants", "Sustainability"],
      status: "In Progress"
    },
    {
      id: 6,
      title: "Municipal Park Development",
      description: "Design and implementation of eco-friendly public park with recreation facilities.",
      image: "/api/placeholder/600/400",
      category: "Public Works",
      location: "Oregon, OR",
      completion: "2024",
      tags: ["Public", "Recreation", "Eco-friendly"],
      status: "Completed"
    }
  ];

  const categories = ["All", "Commercial Landscaping", "Agricultural Consulting", "Technology Solutions", "Residential Landscaping", "Corporate Services", "Public Works"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-10 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our successful projects across landscaping, agriculture, and environmental solutions. 
                Each project showcases our commitment to sustainability and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b bg-background/50">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="transition-all hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.completion}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-10 bg-gradient-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our comprehensive services.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;