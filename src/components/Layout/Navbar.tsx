import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import garudaLogo from "@/assets/garuda-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Jadwal", path: "/jadwal" },
    { name: "Klasemen Voli", path: "/klasemen" },
    { name: "Tentang Kami", path: "/tentang-kami" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img 
              src={garudaLogo} 
              alt="Garuda Pancasila" 
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
            />
            <motion.div 
              className={`flex flex-col transition-all duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.6
              }}
            >
              <div className="text-xl font-bold whitespace-nowrap" style={{ color: '#c7282a' }}>Sanggar Bakti</div>
            </motion.div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? ""
                      : "hover:opacity-80"
                  }`}
                  style={{ 
                    color: '#c7282a'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ID Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="default" 
              size="sm"
              className="text-white font-medium px-6 py-2 rounded-md shadow-sm"
              style={{ 
                backgroundColor: '#c7282a',
                borderColor: '#c7282a'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a01f21';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c7282a';
              }}
            >
              ID
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: '#c7282a' }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm border-t border-primary/20">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium transition-colors hover:opacity-80 rounded-lg ${
                    isActive(item.path)
                      ? "bg-red-100"
                      : ""
                  }`}
                  style={{ color: '#c7282a' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button 
                  variant="default" 
                  size="default"
                  className="text-white w-full h-12 text-base font-medium rounded-md"
                  style={{ 
                    backgroundColor: '#c7282a',
                    borderColor: '#c7282a'
                  }}
                >
                  ID
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;