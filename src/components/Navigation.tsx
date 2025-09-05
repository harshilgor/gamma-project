import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Welcome", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const solutionItems = [
    { name: "Pos", path: "/solutions/pos" },
    { name: "Ecom", path: "/solutions/ecom" },
    { name: "Pay-by-link", path: "/solutions/pay-by-link" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`transition-all duration-300 ease-in-out sticky z-50 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border border-gray-800 rounded-2xl mx-4 mt-6 shadow-2xl top-4' 
        : 'bg-black backdrop-blur-sm border-b border-gray-800 top-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              Gama
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-white border-b-2 border-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Explore Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white flex items-center gap-1">
                  Explore solution
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {solutionItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.path} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800 ${
              isScrolled ? 'bg-black/90' : 'bg-black'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Solutions */}
              <div className="px-3 py-2 text-base font-medium text-gray-300">
                Explore solution
              </div>
              {solutionItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-6 py-2 text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;