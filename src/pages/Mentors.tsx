import { GraduationCap, Trophy, Award, FileText, Users } from "lucide-react";
import Layout from "@/components/Layout";

interface Accomplishment {
  icon: typeof GraduationCap;
  text: string;
}

interface MentorData {
  name: string;
  role: string;
  accomplishments: Accomplishment[];
  hasPhoto: boolean;
}

const mentors: MentorData[] = [
  {
    name: "Rohan Puppala",
    role: "Co-Founder",
    accomplishments: [
      { icon: GraduationCap, text: "Taken Ga Tech & Harvard Comp Sci" },
      { icon: Trophy, text: "State Champion for Programming" },
      { icon: Award, text: "Research at Stanford & Space Labs" },
      { icon: FileText, text: "Max score on National AP CS Exam" },
      { icon: Users, text: "Helped lead club with 500+ members" },
    ],
    hasPhoto: true,
  },
  {
    name: "Ram Singh",
    role: "Co-Founder",
    accomplishments: [
      { icon: GraduationCap, text: "Taken Ga Tech & Harvard Comp Sci" },
      { icon: Trophy, text: "4.67 Comp Sci Subject GPA" },
      { icon: Award, text: "CollegeBoard recognized ambassador" },
      { icon: FileText, text: "CS Blog founder & writer" },
      { icon: Users, text: "Help lead club with 500+ members" },
    ],
    hasPhoto: true,
  },
];

const AccomplishmentBox = ({ 
  icon: Icon, 
  text 
}: { 
  icon: typeof GraduationCap; 
  text: string;
}) => (
  <div className={`flex items-center gap-4 p-3 rounded-xl border-2 transition-all duration-300 ${
    text 
      ? "bg-card border-spark-green/30 hover:border-spark-green/60 hover:shadow-soft" 
      : "bg-muted/50 border-border"
  }`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
      text 
        ? "bg-spark-green text-primary-foreground" 
        : "bg-muted text-muted-foreground/50"
    }`}>
      <Icon size={20} />
    </div>
    {text ? (
      <span className="text-foreground font-medium">{text}</span>
    ) : (
      <div className="h-4 bg-muted rounded-full flex-1" />
    )}
  </div>
);

const MentorCard = ({ mentor }: { mentor: MentorData }) => (
  <div className="bg-gradient-card rounded-3xl p-6 md:p-8 shadow-card border border-spark-green/10 transition-all duration-300 hover:shadow-xl">
    {/* Photo placeholder */}
    <div className="flex justify-center mb-6">
      <div className={`w-32 h-32 rounded-2xl border-4 flex items-center justify-center transition-all duration-300 ${
        mentor.hasPhoto 
          ? "border-spark-green/30 bg-spark-green/5" 
          : "border-spark-green/20 bg-muted"
      }`}>
        {mentor.hasPhoto ? (
          <span className="text-spark-green/50 font-medium">Photo</span>
        ) : (
          <span className="text-muted-foreground/50 font-medium">Photo</span>
        )}
      </div>
    </div>
    
    {/* Name and role */}
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-foreground mb-1">{mentor.name}</h3>
      <span className="text-spark-green font-semibold">{mentor.role}</span>
    </div>
    
    {/* Accomplishments */}
    <div className="space-y-3">
      {mentor.accomplishments.map((acc, index) => (
        <AccomplishmentBox key={index} {...acc} />
      ))}
    </div>
  </div>
);

const Mentors = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-spark-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-spark-orange/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-spark-green/10 text-spark-green px-4 py-2 rounded-full mb-6 font-semibold">
              <Users size={18} />
              Meet the Team
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Your <span className="text-spark-green">Mentors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn from passionate educators and industry professionals who are dedicated 
              to helping you succeed in your coding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mentor Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Want to become a mentor?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking for passionate individuals to help guide the next generation of programmers.
          </p>
          <a
            href="mailto:contact@sparkbud.org"
            className="inline-flex items-center gap-2 bg-spark-green text-primary-foreground px-6 py-3 rounded-full font-bold shadow-card hover:shadow-glow-green transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Mentors;
