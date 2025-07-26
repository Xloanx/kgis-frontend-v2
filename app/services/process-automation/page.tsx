import { Workflow, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LearnMoreProcessAutomation() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
            <Workflow className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Discover Process Automation with Low-Code/No-Code
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Streamline your business operations, reduce manual work, and build powerful workflows faster than ever. 
          Our Low-Code/No-Code solutions empower teams to automate repetitive processes and integrate systems with ease.
        </p>
      </section>

      {/* Why Choose This Service */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Why Choose Our Approach?</CardTitle>
            <CardDescription>
              We simplify complex workflows with minimal coding, allowing your business to focus on growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Faster implementation and deployment",
                "Reduced development and maintenance costs",
                "Scalable and secure integrations",
                "Custom dashboards and analytics",
                "Enterprise-grade automation solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Technologies & Tools</CardTitle>
            <CardDescription>Industry-leading platforms we use</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {["Zapier", "Make.com", "Power Automate", "n8n", "Retool", "Bubble"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                {tech}
              </span>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-3 text-foreground">Ready to Automate Your Business?</h2>
        <p className="text-muted-foreground mb-6">
          Get in touch with our experts to start your process automation journey today.
        </p>
        <Link href="/contact" passHref>
          <Button variant="hero" size="xl" className="group">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
