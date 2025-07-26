import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send, Phone, Mail, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 px-10 bg-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CTA Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform
              <span className="gradient-text block">Your Business?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our innovative solutions can drive your business forward. 
              Get a free consultation and discover the possibilities.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-white/80">+234 (805) 720-8137</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-white/80">hello@kernelgreens.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-white/80">20 Bankole Street, Isheri-Ojodu, Berger, Lagos State, Nigeria</div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="xl" className="group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get Your Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-white/50" />
                  <Input placeholder="Last Name" className="bg-white/50" />
                </div>
                <Input placeholder="Email Address" type="email" className="bg-white/50" />
                <Input placeholder="Phone Number" className="bg-white/50" />
                <Input placeholder="Company Name" className="bg-white/50" />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-white/50"
                />
                <Button variant="cta" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;