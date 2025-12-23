import { ClipboardList, Calendar, MapPin, Clock, ArrowRight, Video, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfoHSxSqCniAzzLhSTvnN3pSe46phWd79G84W-zrNEIQMdPMw/viewform?usp=header";

const Register = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-spark-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-spark-orange/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-spark-green/10 text-spark-green px-4 py-2 rounded-full mb-6 font-semibold">
              <ClipboardList size={18} />
              Join the Bootcamp
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Ready to <span className="text-spark-green">Get Started</span>?
            </h1>
            <p className="text-lg text-muted-foreground">
              Take the first step toward your coding journey. Registration is free and only takes a few minutes!
            </p>
          </div>
        </div>
      </section>

      {/* Registration Card */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border-2 border-spark-green/20 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-spark-green/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-spark-orange/10 to-transparent rounded-tr-full" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-green animate-bounce-gentle">
                    <Sparkles className="text-primary-foreground" size={36} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Register for SparkBud Bootcamp
                  </h2>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    Fill out our quick registration form to secure your spot in the upcoming cohort. 
                    Spaces are limited, so don't wait!
                  </p>
                </div>

                {/* Info pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                    <Calendar className="text-spark-orange" size={18} />
                    <span className="font-medium text-foreground/80">5 Weeks</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                    <MapPin className="text-spark-green" size={18} />
                    <span className="font-medium text-foreground/80">Sharon Forks Library</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                    <Clock className="text-spark-orange" size={18} />
                    <span className="font-medium text-foreground/80">100% Free</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-orange text-primary-foreground px-10 py-5 rounded-full font-bold text-xl shadow-card hover:shadow-glow-orange transition-all duration-300 hover:scale-105 group"
                  >
                    Register Now
                    <ArrowRight className="transition-transform group-hover:translate-x-1" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Meeting Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-spark-orange/20">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-20 h-20 bg-spark-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Video className="text-spark-orange" size={36} />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Interest Meeting
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Want to learn more before signing up? Join our upcoming interest meeting 
                    where we'll walk through the program, answer questions, and help you decide 
                    if SparkBud is right for you.
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-spark-orange/10 text-spark-orange px-4 py-2 rounded-full font-semibold">
                    <Calendar size={18} />
                    Date: TBD
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-muted-foreground text-sm">
                  Check back soon for the meeting date and time, or register now and we'll send you all the details!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're here to help! Reach out to us anytime.
          </p>
          <a
            href="mailto:contact@sparkbud.org"
            className="inline-flex items-center gap-2 bg-spark-green text-primary-foreground px-6 py-3 rounded-full font-bold shadow-card hover:shadow-glow-green transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
