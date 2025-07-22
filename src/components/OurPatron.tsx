import { Colors } from "@/styles/global";
import CustomizedNavigation from "./customized/CustomizedNavigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";

const OurPatron = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomizedNavigation />

      <div className="text-center mt-20 mb-4 px-4">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: Colors.TextColor2 }}
        >
          Our Patron
        </h2>
        <p
          className="text-xl max-w-3xl mx-auto"
          style={{ color: Colors.TextColor6 }}
        >
          A respected and influential figure in the legal community of Uttar
          Pradesh, Adv. Amol Kumar brings decades of experience in civil
          litigation, constitutional law, and corporate advisory.
        </p>
      </div>

      <div className="flex justify-center items-center p-4 flex-grow">
        <Card
          className="w-full max-w-2xl border overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            borderColor: Colors.CardBgSecondaryColor,
            backgroundColor: Colors.CardBgPrimaryColor,
          }}
        >
          <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
            <img
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Adv. Amol Kumar"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardContent className="p-6 text-center">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: Colors.TextColor1 }}
            >
              Adv. Amol Kumar
            </h3>
            <p
              className="font-semibold mb-2"
              style={{ color: Colors.TextColor3 }}
            >
              Raj Kumar & Company
            </p>
            <p
              className="font-semibold mb-2"
              style={{ color: Colors.TextColor5 }}
            >
              Renowned Litigator of Uttar Pradesh
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default OurPatron;
