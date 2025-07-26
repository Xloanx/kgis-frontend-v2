'use client'

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, Plus } from "lucide-react";
import BlogCreateForm from "@/components/forms/blogCreateForm";

const Blog = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Landscaping",
      excerpt: "Exploring innovative approaches to eco-friendly landscaping that benefit both property owners and the environment.",
      content: "Full blog content here...",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Sustainability",
      tags: ["Sustainability", "Landscaping", "Innovation"],
      image: "/api/placeholder/800/400",
      featured: true
    },
    {
      id: 2,
      title: "Smart Irrigation: Technology Meets Agriculture",
      excerpt: "How IoT and AI are revolutionizing water management in modern agriculture and landscaping projects.",
      content: "Full blog content here...",
      author: "Sarah Johnson",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Technology", "IoT", "Agriculture"],
      image: "/api/placeholder/800/400",
      featured: false
    },
    {
      id: 3,
      title: "Native Plants: Your Local Ecosystem's Best Friend",
      excerpt: "Discover the benefits of incorporating native plants into your landscaping design for better sustainability.",
      content: "Full blog content here...",
      author: "Mike Davis",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Gardening",
      tags: ["Native Plants", "Ecosystem", "Landscaping"],
      image: "/api/placeholder/800/400",
      featured: false
    },
    {
      id: 4,
      title: "Corporate Green Spaces: Boosting Employee Wellbeing",
      excerpt: "Research shows how well-designed corporate green spaces can improve productivity and employee satisfaction.",
      content: "Full blog content here...",
      author: "Lisa Chen",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Corporate",
      tags: ["Corporate", "Wellbeing", "Green Spaces"],
      image: "/api/placeholder/800/400",
      featured: false
    },
    {
      id: 5,
      title: "Seasonal Maintenance Tips for Your Garden",
      excerpt: "Essential maintenance tips to keep your garden thriving throughout the changing seasons.",
      content: "Full blog content here...",
      author: "Tom Wilson",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "Maintenance",
      tags: ["Maintenance", "Seasonal", "Gardening"],
      image: "/api/placeholder/800/400",
      featured: false
    }
  ];

  const categories = ["All", "Sustainability", "Technology", "Gardening", "Corporate", "Maintenance"];
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8 px-10">
          <div className="container max-w-4xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Create New Blog Post</h1>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Back to Blog
              </Button>
            </div>
            <BlogCreateForm onSuccess={() => setShowCreateForm(false)} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-10 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with the latest insights, tips, and trends in landscaping, 
                agriculture, and environmental solutions.
              </p>
              
              {/* Search and Create */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <SignedIn>
                  <Button onClick={() => setShowCreateForm(true)} className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Post
                  </Button>
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Sign In to Create Posts
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-10 border-b bg-background/50">
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

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-10">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 max-w-4xl mx-auto">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default">{featuredPost.category}</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <Button variant="cta">Read Full Article</Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-10 bg-background/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-10 bg-gradient-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on valuable insights and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;