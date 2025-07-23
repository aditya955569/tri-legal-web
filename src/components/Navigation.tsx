import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Colors } from "@/styles/global";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Patron", path: "/our-patron" },
    { name: "Attorneys", href: "#attorneys" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Testimonials", href: "#testimonials" },
    // { name: "Contact", href: "#contact" },
    { name: "Blogs", path: "/blogs" },
    // { name: "Probono", path: "/probono" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: any) => {
    item.path ? navigate(item.path) : scrollToSection(item.href);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50  shadow-md"
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/newLogo.jpeg"
              alt="VidhiVidh Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium  hover:text-[#CBA14A] transition-colors"
                style={{ color: Colors.TextColor1 }}
              >
                {item.name}
              </button>
            ))}

            <Button
              size="sm"
              style={{
                backgroundColor: isHover
                  ? Colors.CardBgSecondaryColor
                  : Colors.SecondaryBgColor,
                color: isHover ? Colors.TextColor3 : Colors.TextColor2,
                fontWeight: "600",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => scrollToSection("#contact")}
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" style={{ color: Colors.MenuIconColor }} />
            ) : (
              <Menu
                className="h-6 w-6"
                style={{ color: Colors.MenuIconColor }}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden border-t shadow-lg"
            style={{
              backgroundColor: Colors.PrimaryBgColor,
              borderColor: Colors.BorderLineColor2,
            }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  style={{ color: Colors.TextColor1 }}
                  className="block w-full text-left px-3 py-2  hover:text-[#CBA14A] hover:bg-[#14283c] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: Colors.SecondaryBgColor,
                    color: Colors.TextColor2,
                  }}
                  className="w-full hover:bg-[#b98d37] font-semibold"
                  onClick={() => scrollToSection("#contact")}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
