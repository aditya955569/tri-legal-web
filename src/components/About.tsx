
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Committed to 
              <span className="text-amber-600 block">Justice & Excellence</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, our firm has been at the forefront of legal excellence, 
              providing unparalleled representation to clients across diverse legal matters. 
              We combine traditional legal expertise with innovative approaches to deliver 
              results that exceed expectations.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment extends beyond individual cases to strengthening the fabric 
              of justice in our community. We believe that exceptional legal representation 
              should be accessible, transparent, and focused on achieving the best possible 
              outcomes for our clients.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">20+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80" 
                  alt="Law firm office" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-slate-900 text-lg">Our Downtown Office</h3>
                  <p className="text-gray-600">Where excellence meets accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
