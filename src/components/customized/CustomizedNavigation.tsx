import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Gavel } from "lucide-react";
import { Colors } from "@/styles/global";

const CustomizedNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Blogs", path: "/blogs" },
    { name: "Our Team", path: "/attorneys" },
    // { name: "Probono", path: "/probono" },
    { name: "Internship", path: "/careers-internship" },
    { name: "Join Us", path: "/join-us" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: any) => {
    const currentPath = window.location.pathname;

    if (item.path) {
      if (item.path === currentPath) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(item.path);
      }
    } else {
      scrollToSection(item.href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-md"
      style={{ backgroundColor: Colors.PrimaryBgColor }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center gap-2">
              <img
                src="/images/newLogo.jpeg"
                alt="VidhiVidh Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium transition-colors"
                style={{
                  color: Colors.TextColor1,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = Colors.SecondaryBgColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = Colors.TextColor1)
                }
              >
                {item.name}
              </button>
            ))}
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 transition-colors"
                  style={{
                    color: Colors.TextColor1,
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = Colors.SecondaryBgColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = Colors.TextColor1)
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomizedNavigation;
