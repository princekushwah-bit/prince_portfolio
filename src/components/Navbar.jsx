
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> PrinceKushwah </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Trigger Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[60] relative"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden transition-all duration-300",
            isMenuOpen ? "visible" : "invisible"
          )}
        >
          {/* Overlay - Background Blur */}
          <div 
            className={cn(
              "absolute inset-0 bg-black/5 backdrop-blur-[2px] transition-opacity duration-300",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Compact Floating Glass Card */}
          <div
            className={cn(
              "absolute top-16 right-5 w-[180px] p-5 flex flex-col transition-all duration-500 ease-in-out shadow-2xl rounded-2xl",
              "bg-white/40 dark:bg-black/50 backdrop-blur-2xl border border-white/20 dark:border-white/10",
              isMenuOpen 
                ? "translate-x-0 opacity-100 scale-100" 
                : "translate-x-10 opacity-0 scale-90 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-3 text-center">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "text-foreground/90 hover:text-primary transition-all duration-300",
                    "text-base font-semibold py-1.5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};