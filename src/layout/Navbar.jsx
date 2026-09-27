import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //if scroll run this fn
      setIsScrolled(window.scrollY > 50); //if over 50px true
    }; //pixel value

    //User scroll လုပ်တိုင်း handleScroll function ကို ခေါ်ပါ
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold hover:text-primary">
          T<span className="text-primary">H</span>H
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex item-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a href="#contact">
          <div className="hidden md:block">
            <Button size="sm">Contact Me</Button>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-lg text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact">
              <Button onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

//[] ဖြစ်တဲ့အတွက် cleanup က အဓိကအားဖြင့် အဲဒီ Navbar component တစ်ခုလုံး unmount ဖြစ်တဲ့အချိန် မှ run တာပါ။
