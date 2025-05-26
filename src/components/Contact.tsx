
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a confidential 
            consultation with one of our experienced attorneys.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-700">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-slate-300" />
                <Input placeholder="Last Name" className="border-slate-300" />
              </div>
              <Input placeholder="Email Address" type="email" className="border-slate-300" />
              <Input placeholder="Phone Number" type="tel" className="border-slate-300" />
              <Textarea 
                placeholder="Tell us about your legal matter..." 
                className="border-slate-300 min-h-32"
              />
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-700 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700">Address</h4>
                  <p className="text-slate-600">123 Legal Plaza, Suite 500<br />Downtown District, NY 10001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Phone</h4>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Email</h4>
                  <p className="text-slate-600">contact@lawfirm.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Office Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h4 className="font-bold text-slate-700 mb-2">Emergency Contact</h4>
              <p className="text-slate-600 mb-4">
                For urgent legal matters requiring immediate attention, 
                call our emergency hotline.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white">
                (555) 999-HELP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
