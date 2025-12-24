import { Code, Sprout, Leaf, TreeDeciduous, Trees, Medal } from "lucide-react";
import Layout from "@/components/Layout";

const weeklyContent = [
  {
    week: 1,
    title: "Planting the Seed - Intro to Scratch",
    icon: Sprout,
    description: "Learn all about the logic behind programming in one of the most engaging environments! Figure out how to create animations, sprites, and simple games!",
    topics: ["Scratch", "Games", "Animations"],
  },
  {
    week: 2,
    title: "Growing Roots - Intro to Python",
    icon: Leaf,
    description: "Unleash the boundless possibilities with Python code! Learn the basics of one of the world's most popular coding languages - and trust us, there's a good reason it's so well liked.",
    topics: ["Variables", "Data types", "Printing"],
  },
  {
    week: 3,
    title: "Branching Out - Delve Deeper into Python",
    icon: TreeDeciduous,
    description: "Learn about more advanced topics like control structures, which enable the computer to make decisions! Explore new functions, and see how they can improve your code.",
    topics: ["Loops", "Conditionals", "Functions"],
  },
  {
    week: 4,
    title: "Bearing Fruit - Wrapping up with Python",
    icon: Trees,
    description: "Use what you've learned about Python to recreate your favorite games, apps, and programs! Work directly with the mentors to build a personal CS plan moving forward.",
    topics: ["Advanced Python", "Applications", "Future Plans"],
  },
  {
    week: 5,
    title: "Full Bloom - Mini Hackathon & Celebration",
    icon: Medal,
    description: "Using everything from the course, students will form groups to design, build, and present a project! Beyond learning programming, this experience will prepare students for competitive experiences moving forward - but in a safe, learning oriented environment. Don't miss out on the certificate ceremony and celebration!",
    topics: ["Teamwork", "Showcase", "Celebration"],
    isHighlighted: true,
  },
];

const TimelineWeek = ({ 
  week, 
  title, 
  icon: Icon, 
  description, 
  topics,
  isLast,
  isHighlighted = false
}: { 
  week: number; 
  title: string; 
  icon: typeof Sprout; 
  description: string; 
  topics: string[];
  isLast: boolean;
  isHighlighted?: boolean;
}) => (
  <div className="relative flex gap-6">
    {/* Timeline line and node */}
    <div className="flex flex-col items-center">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-soft transition-all duration-300 hover:scale-110 ${
        isHighlighted 
          ? "bg-gradient-to-br from-spark-orange to-spark-green text-primary-foreground shadow-glow-orange" 
          : week % 2 === 1 
            ? "bg-spark-orange text-primary-foreground" 
            : "bg-spark-green text-primary-foreground"
      }`}>
        <Icon size={24} />
      </div>
      {!isLast && (
        <div className="w-1 flex-1 bg-gradient-to-b from-spark-green/50 to-spark-orange/50 rounded-full my-2" />
      )}
    </div>
    
    {/* Content card */}
    <div className="flex-1 pb-8">
      <div className={`rounded-2xl p-6 shadow-card border-2 transition-all duration-300 hover:shadow-xl ${
        isHighlighted 
          ? "bg-gradient-to-br from-spark-orange/10 via-card to-spark-green/10 border-spark-orange/40 hover:border-spark-orange/60 ring-2 ring-spark-orange/20" 
          : week % 2 === 1 
            ? "bg-card border-spark-orange/20 hover:border-spark-orange/40" 
            : "bg-card border-spark-green/20 hover:border-spark-green/40"
      }`}>
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            isHighlighted 
              ? "bg-gradient-to-r from-spark-orange to-spark-green text-primary-foreground" 
              : week % 2 === 1 
                ? "bg-spark-orange/10 text-spark-orange" 
                : "bg-spark-green/10 text-spark-green"
          }`}>
            Week {week}
          </span>
          {isHighlighted && (
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-spark-green/10 text-spark-green animate-pulse-gentle">
              🎉 Grand Finale
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, index) => (
            <span 
              key={index}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                isHighlighted 
                  ? "bg-spark-orange/15 text-spark-orange border border-spark-orange/30" 
                  : "bg-muted text-foreground/80"
              }`}
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
