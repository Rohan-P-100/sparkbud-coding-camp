import { Users, Code, Calendar, Award, Sparkles, Heart, Target, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import sparkbudLogo from "@/assets/sparkbud-logo.png";

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfoHSxSqCniAzzLhSTvnN3pSe46phWd79G84W-zrNEIQMdPMw/viewform?usp=header";

const infoBoxes = [
  {
    icon: Calendar,
    title: "5 Weeks",
    description: "Intensive hands-on learning experience",
    color: "orange" as const,
  },
  {
    icon: Code,
    title: "100% Free",
    description: "No cost to participate—ever",
    color: "green" as const,
  },
  {
    icon: Users,
    title: "In-Person",
    description: "Learn together at Sharon Forks Library",
    color: "orange" as const,
  },
  {
    icon: Award,
    title: "Real Skills",
    description: "Build projects you can show off",
    color: "green" as const,
  },
];

const InfoBox = ({ 
  icon: Icon, 
  title, 
  description, 
  color 
}: { 
  icon: typeof Users; 
  title: string; 
  description: string; 
  color: "orange" | "green";
}) => (
  <div className={`group relative bg-card rounded-2xl p-6 shadow-card border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
    color === "orange" 
      ? "border-spark-orange/20 hover:border-spark-orange/50" 
      : "border-spark-green/20 hover:border-spark-green/50"
  }`}>
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
      color === "orange" 
        ? "bg-spark-orange/10 text-spark-orange" 
        : "bg-spark-green/10 text-spark-green"
    }`}>
      <Icon size={28} strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
    
    {/* Decorative corner */}
    <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-3xl rounded-tr-2xl ${
      color === "orange" ? "bg-spark-orange" : "bg-spark-green"
    }`} />
  </div>
);

const CodeBlock = () => (
  <div className="bg-code-bg rounded-2xl overflow-hidden shadow-card border border-foreground/10">
    {/* Window header */}
    <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-foreground/10">
      <div className="w-3 h-3 rounded-full bg-destructive/80" />
      <div className="w-3 h-3 rounded-full bg-spark-orange" />
      <div className="w-3 h-3 rounded-full bg-spark-green" />
      <span className="ml-4 text-code-comment text-sm font-mono">program_details.json</span>
    </div>
    
    {/* Code content */}
    <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
      <div className="text-code-comment">// SparkBud Program Details</div>
      <div className="mt-4 text-code-text">{"{"}</div>
      <div className="ml-4">
        <span className="text-code-property">"program"</span>
        <span className="text-code-text">: </span>
        <span className="text-code-string">"SparkBud Coding Camp"</span>
        <span className="text-code-text">,</span>
      </div>
      <div className="ml-4">
        <span className="text-code-property">"duration"</span>
        <span className="text-code-text">: </span>
        <span className="text-code-string">"5 weeks"</span>
        <span className="text-code-text">,</span>
      </div>
      <div className="ml-4">
        <span className="text-code-property">"cost"</span>
        <span className="text-code-text">: </span>
        <span className="text-code-string">"FREE"</span>
        <span className="text-code-text">,</span>
      </div>
      <div className="ml-4">
        <span className="text-code-property">"format"</span>
        <span className="text-code-text">: </span>
        <span className="text-code-string">"In-Person"</span>
        <span className="text-code-text">,</span>
      </div>
      <div className="ml-4">
        <span className="text-code-property">"location"</span>
        <span className="text-code-text">: </span>
        <span className="text-code-string">"Sharon Forks Library"</span>
        <span className="text-code-text">,</span>
      </div>
      <div className="ml-4">
        <span className="text-code-property">"status"</span>
        <span className="text-code-text">: </span>
        <span className="text-spark-green font-semibold">"registration_open"</span>
      </div>
      <div className="text-code-text">{"}"}</div>
    </div>
  </div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-spark-orange/10 rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-spark-green/10 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6 font-semibold">
              <Sparkles size={18} />
              Free 5-Week Coding Bootcamp
            </div>
            
            <img 
              src={sparkbudLogo} 
              alt="SparkBud Logo" 
              className="h-24 md:h-32 mx-auto mb-8 animate-float"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Ignite Your <span className="text-spark-orange">Coding</span> Journey
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              SparkBud is a nonprofit on a mission to make computer science accessible to everyone. 
              Join our free 5-week bootcamp and discover the joy of building with code—no experience required!
            </p>
            
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-orange text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-card hover:shadow-glow-orange transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <Sparkles size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Code Block Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <CodeBlock />
          </div>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes SparkBud Special
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to kickstart your programming adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {infoBoxes.map((box, index) => (
              <InfoBox key={index} {...box} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-spark-green/5 to-spark-orange/5 rounded-3xl p-8 md:p-12 border-2 border-spark-green/20 shadow-card overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-spark-green/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-spark-orange/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-spark-green rounded-xl flex items-center justify-center">
                    <Target className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                  <span className="font-bold text-spark-green">SparkBud</span> believes every student deserves the opportunity to explore computer science, 
                  regardless of their background or resources. We're dedicated to breaking down barriers and creating 
                  an inclusive, supportive environment where young minds can discover their potential in tech.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-spark-green/30">
                    <Heart className="text-spark-orange" size={18} />
                    <span className="font-semibold text-foreground/80">Nonprofit Driven</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-spark-green/30">
                    <Lightbulb className="text-spark-green" size={18} />
                    <span className="font-semibold text-foreground/80">Beginner Friendly</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-spark-green/30">
                    <Users className="text-spark-orange" size={18} />
                    <span className="font-semibold text-foreground/80">Community Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
