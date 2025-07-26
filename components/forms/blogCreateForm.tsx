import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Plus, X, Save, Eye } from "lucide-react";

interface BlogCreateFormProps {
  onSuccess?: () => void;
}

const BlogCreateForm = ({ onSuccess }: BlogCreateFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    featured: false,
    image: ""
  });
  
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [isPreview, setIsPreview] = useState(false);


  const categories = [
    "Sustainability",
    "Technology", 
    "Gardening",
    "Corporate",
    "Maintenance",
    "Agriculture",
    "Environment"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags(prev => [...prev, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.author || !formData.category) {
      toast("Missing Information",{
        description: "Please fill in all required fields.",
        // variant: "destructive"
      });
      return;
    }

    // Simulate blog post creation
    console.log("Creating blog post:", {
      ...formData,
      tags,
      date: new Date().toISOString(),
      readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`
    });

    toast("Blog Post Created!",{
      description: "Your blog post has been successfully created.",
    });

    onSuccess?.();
  };

  if (isPreview) {
    return (
        <div className="flex justify-center px-4">
            <Card className="w-full max-w-4xl">
                <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                    <CardTitle className="text-2xl">{formData.title || "Blog Post Title"}</CardTitle>
                    <CardDescription className="mt-2">
                        {formData.excerpt || "Blog post excerpt will appear here..."}
                    </CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => setIsPreview(false)}>
                    <X className="w-4 h-4 mr-2" />
                    Exit Preview
                    </Button>
                </div>
                
                <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground border-t">
                    <span>By {formData.author || "Author Name"}</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{Math.ceil(formData.content.split(' ').length / 200)} min read</span>
                    {formData.category && (
                    <>
                        <span>•</span>
                        <Badge variant="outline">{formData.category}</Badge>
                    </>
                    )}
                    {formData.featured && <Badge>Featured</Badge>}
                </div>
                </CardHeader>
                
                <CardContent>
                {formData.image && (
                    <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                    <img src={formData.image} alt="Blog post" className="w-full h-full object-cover" />
                    </div>
                )}
                
                <div className="prose prose-lg max-w-none">
                    <div className="whitespace-pre-wrap">{formData.content || "Blog content will appear here..."}</div>
                </div>
                
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="flex justify-center px-4">
        <Card className="w-full max-w-4xl">
        <CardHeader>
            <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-2xl">Create New Blog Post</CardTitle>
                <CardDescription>
                Fill in the details below to create a new blog post for your website.
                </CardDescription>
            </div>
            <Button variant="outline" onClick={() => setIsPreview(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
            </Button>
            </div>
        </CardHeader>
        
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter blog post title"
                    className="mt-1"
                />
                </div>
                
                <div className="md:col-span-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange("excerpt", e.target.value)}
                    placeholder="Brief description of the blog post"
                    className="mt-1"
                    rows={2}
                />
                </div>
            </div>

            {/* Author and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <Label htmlFor="author">Author *</Label>
                <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    placeholder="Author name"
                    className="mt-1"
                />
                </div>
                
                <div>
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                        {category}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>
            </div>

            {/* Image URL */}
            <div>
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                id="image"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="mt-1"
                />
            </div>

            {/* Tags */}
            <div>
                <Label htmlFor="tags">Tags</Label>
                <div className="mt-1 space-y-2">
                <div className="flex gap-2">
                    <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                    <Plus className="w-4 h-4" />
                    </Button>
                </div>
                
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer">
                        {tag}
                        <X 
                            className="w-3 h-3 ml-1 hover:text-destructive" 
                            onClick={() => removeTag(tag)}
                        />
                        </Badge>
                    ))}
                    </div>
                )}
                </div>
            </div>

            {/* Content */}
            <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="Write your blog post content here..."
                className="mt-1 min-h-[300px]"
                />
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center space-x-2">
                <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleInputChange("featured", checked)}
                />
                <Label htmlFor="featured">Mark as featured post</Label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                Create Blog Post
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsPreview(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
                </Button>
            </div>
            </form>
        </CardContent>
        </Card>
    </div>
  );
};

export default BlogCreateForm;