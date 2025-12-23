import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-[hsl(220,20%,12%)] py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          {/* Sparkle icons */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-spark-orange" size={24} />
            <div className="w-12 h-0.5 bg-muted-foreground/30 rounded-full" />
            <Sparkles className="text-spark-green" size={24} />
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-bold text-[hsl(45,30%,90%)] mb-2">
            Inspiring the next generation of coders,
          </p>
          <p className="text-xl md:text-2xl font-bold text-spark-green/80 mb-6">
            one spark at a time
          </p>
          
          {/* Copyright */}
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} SparkBud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
