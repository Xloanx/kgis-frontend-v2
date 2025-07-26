import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUpRight,
  Send
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Process Automation", href: "/services/process-automation" },
    { name: "Cloud Operations", href: "/services/cloud-operations" },
    { name: "IT Support & Sales", href: "/services/it-support" },
    { name: "Renewable Energy", href: "/services/renewable-energy" },
    { name: "Training & Development", href: "/services/training" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container py-12 px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Get the latest insights on technology trends and business solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="hero" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-25 h-25 rounded-lg overflow-hidden">
                <Image
                src="/logo.png"
                alt="Kernel Greens Logo"
                fill
                className="object-contain"
                priority
                />
            </div>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Re-engineering innovation and driving excellence through cutting-edge 
              technology solutions that empower businesses to thrive.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>20 Bankole Street, Isheri-Ojodu, Berger, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+234 (805) 720-8137</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@kernelgreens.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© {currentYear} Kernel Greens Integrated Services. All rights reserved.</p>
            <p>Built with ❤️ by Kernel Greens Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;