
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Briefcase, Gavel, Landmark } from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Law",
    description: "Comprehensive business legal services including mergers, acquisitions, and corporate governance.",
    icon: Briefcase,
    cases: "500+ Cases"
  },
  {
    title: "Criminal Defense",
    description: "Aggressive defense strategies for criminal charges with a proven track record of success.",
    icon: Shield,
    cases: "300+ Cases"
  },
  {
    title: "Civil Litigation",
    description: "Expert representation in complex civil disputes and commercial litigation matters.",
    icon: Gavel,
    cases: "400+ Cases"
  },
  {
    title: "Constitutional Law",
    description: "Specialized expertise in constitutional matters and fundamental rights protection.",
    icon: Landmark,
    cases: "150+ Cases"
  }
];

const PracticeAreas = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our firm provides comprehensive legal services across multiple practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-blue-600 font-semibold">
                  {area.cases}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
