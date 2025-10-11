import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";
import aboutInterior from "@/assets/about-interior.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every dish is crafted with dedication and love for culinary artistry",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest ingredients from trusted suppliers",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and experience are at the heart of everything we do",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${aboutInterior})` }}
        />
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of culinary excellence, passion, and dedication to creating unforgettable dining experiences
          </p>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={aboutInterior}
                alt="Restaurant Interior"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold font-playfair">
                Welcome to <span className="text-gradient-gold">LaCresta Dining</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, LaCresta Dining has been a beacon of culinary excellence, bringing together the finest local and continental cuisines. Our restaurant was born from a passion for creating exceptional dining experiences that blend traditional flavors with modern techniques.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've established ourselves as a premier destination for food enthusiasts who appreciate quality, ambiance, and impeccable service. Every dish tells a story, and every visit is an opportunity to create lasting memories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence extends beyond the plate. We believe in creating an atmosphere where every guest feels valued, where celebrations become extraordinary, and where ordinary evenings transform into special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in creating exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-playfair">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold font-playfair">
                Meet Our <span className="text-gradient-gold">Executive Chef</span>
              </h2>
              <h3 className="text-2xl font-semibold text-primary">
                Chef Marcus Reynolds
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 20 years of culinary expertise, Chef Marcus Reynolds brings a wealth of international experience to LaCresta Dining. Trained in prestigious kitchens across Europe and Asia, Chef Marcus has developed a unique style that honors traditional techniques while embracing contemporary innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His philosophy is simple: respect the ingredients, honor the craft, and create dishes that not only satisfy the palate but also touch the soul. Under his leadership, LaCresta has earned numerous accolades and has become synonymous with culinary excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chef Marcus believes that cooking is an art form, and his kitchen is where creativity meets precision. Every menu is carefully curated to showcase seasonal ingredients and provide guests with an unforgettable gastronomic journey.
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src={chefPortrait}
                alt="Chef Marcus Reynolds"
                className="rounded-lg shadow-elegant w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Our <span className="text-gradient-gold">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create extraordinary dining experiences that celebrate the art of cuisine, foster connections, and leave lasting impressions. We strive to be more than just a restaurant – we aim to be a destination where memories are made, relationships are strengthened, and the love of exceptional food brings people together.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
