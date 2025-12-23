import { Code, Sprout, Leaf, TreeDeciduous, Trees } from "lucide-react";
import Layout from "@/components/Layout";

const weeklyContent = [
  {
    week: 1,
    title: "Planting the Seed",
    icon: Sprout,
    description: "Introduction to programming concepts, setting up your environment, and writing your first lines of code.",
    topics: ["What is code?", "Python basics", "Variables & data types"],
  },
  {
    week: 2,
    title: "Growing Roots",
    icon: Leaf,
    description: "Building a strong foundation with control flow, loops, and understanding how programs make decisions.",
    topics: ["If/else statements", "Loops (for, while)", "Simple projects"],
  },
  {
    week: 3,
    title: "Branching Out",
    icon: TreeDeciduous,
    description: "Learning about functions, organization, and how to write reusable, clean code.",
    topics: ["Functions", "Parameters & returns", "Code organization"],
  },
  {
    week: 4,
    title: "Bearing Fruit",
    icon: Trees,
    description: "Working with data structures and building more complex, interactive programs.",
    topics: ["Lists & dictionaries", "File handling", "Mini-projects"],
  },
  {
    week: 5,
    title: "Full Bloom",
    icon: Trees,
    description: "Putting it all together with a capstone project and presenting your work!",
    topics: ["Capstone project", "Code review", "Showcase & celebration"],
  },
];

const TimelineWeek = ({ 
  week, 
  title, 
  icon: Icon, 
  description, 
  topics,
  isLast 
}: { 
  week: number; 
  title: string; 
  icon: typeof Sprout; 
  description: string; 
  topics: string[];
  isLast: boolean;
}) => (
  <div className="relative flex gap-6">
    {/* Timeline line and node */}
    <div className="flex flex-col items-center">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-soft transition-all duration-300 hover:scale-110 ${
        week % 2 === 1 ? "bg-spark-orange text-primary-foreground" : "bg-spark-green text-primary-foreground"
      }`}>
        <Icon size={24} />
      </div>
      {!isLast && (
        <div className="w-1 flex-1 bg-gradient-to-b from-spark-green/50 to-spark-orange/50 rounded-full my-2" />
      )}
    </div>
    
    {/* Content card */}
    <div className="flex-1 pb-8">
      <div className={`bg-card rounded-2xl p-6 shadow-card border-2 transition-all duration-300 hover:shadow-xl ${
        week % 2 === 1 ? "border-spark-orange/20 hover:border-spark-orange/40" : "border-spark-green/20 hover:border-spark-green/40"
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            week % 2 === 1 
              ? "bg-spark-orange/10 text-spark-orange" 
              : "bg-spark-green/10 text-spark-green"
          }`}>
            Week {week}
          </span>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-foreground/80"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Curriculum = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-20 w-40 h-40 bg-spark-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-spark-green/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-spark-orange/10 text-spark-orange px-4 py-2 rounded-full mb-6 font-semibold">
              <Code size={18} />
              What You'll Learn
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Our <span className="text-spark-orange">Curriculum</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A carefully designed 5-week journey that takes you from complete beginner 
              to confident coder—growing your skills step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Growth Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch your coding skills blossom week by week
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {weeklyContent.map((week, index) => (
              <TimelineWeek 
                key={week.week}
                {...week}
                isLast={index === weeklyContent.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;
