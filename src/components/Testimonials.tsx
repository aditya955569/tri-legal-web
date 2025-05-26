
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The team's expertise in corporate law helped us navigate a complex merger successfully. Their attention to detail and strategic thinking were exceptional.",
    client: "Michael Thompson",
    position: "CEO, TechCorp Industries",
    rating: 5
  },
  {
    quote: "Professional, knowledgeable, and truly caring. They fought tirelessly for my case and achieved an outcome I never thought possible.",
    client: "Lisa Anderson",
    position: "Small Business Owner",
    rating: 5
  },
  {
    quote: "Outstanding legal representation with clear communication throughout the entire process. I highly recommend their services.",
    client: "David Kumar",
    position: "Real Estate Developer",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with our legal team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-slate-900">{testimonial.client}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
