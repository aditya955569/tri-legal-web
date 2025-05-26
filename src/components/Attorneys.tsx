
import { Card, CardContent } from "@/components/ui/card";

const attorneys = [
  {
    name: "Sarah Mitchell",
    title: "Senior Partner",
    specialization: "Corporate Law & Litigation",
    experience: "15 Years",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "James Rodriguez",
    title: "Partner",
    specialization: "Criminal Defense",
    experience: "12 Years",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emily Chen",
    title: "Senior Associate",
    specialization: "Constitutional Law",
    experience: "8 Years",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=400&q=80"
  }
];

const Attorneys = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our experienced attorneys who bring decades of combined expertise 
            to every case, ensuring the highest quality legal representation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="bg-white border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={attorney.image} 
                  alt={attorney.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{attorney.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{attorney.title}</p>
                <p className="text-gray-600 mb-3">{attorney.specialization}</p>
                <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                  <span className="text-sm font-medium text-slate-700">{attorney.experience} Experience</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
