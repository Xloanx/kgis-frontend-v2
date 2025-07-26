

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Link as linkk} from "lucide-react";
import Image from "next/image";
import heroBackground from "@/public/hero-bg.jpg";
import Link  from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
        <div className="absolute inset-0">
            <Image
                src={heroBackground}
                alt="Hero background"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
        </div>


      {/* Content */}
      <div className="relative z-10 container py-20 px-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2 text-primary-light" />
            <span className="text-sm font-medium">Trusted by 100+ Companies</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block">Re-Engineering</span>
            <span className="gradient-text block">Innovation</span>
            <span className="block">Driving Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            At Kernel Greens Integrated Services, we provide cutting-edge software development, 
            IT support, and cloud operations solutions that empower your business to thrive 
            in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Link href="/services" passHref>
                <Button variant="hero" size="xl" className="group">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in">
            {[
                { value: "80+", label: "Projects Delivered" },
                { value: "40+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
            ].map((stat, i) => (
                <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-light mb-1">
                    {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
                </div>
            ))}
            </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: "4s" }} />
    </section>
  );
};

export default HeroSection;