import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ship } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact Us', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = cn(
    'fixed w-full z-50 transition-all duration-300',
    isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
      : isHome
      ? 'bg-transparent py-6'
      : 'bg-white shadow-sm py-4'
  );

  const textClasses = cn(
    'transition-colors duration-300 font-medium text-sm',
    isScrolled || !isHome
      ? 'text-ascend-navy hover:text-ascend-ocean-end'
      : 'text-white hover:text-ascend-accent'
  );

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo.png" alt="Ascend Shipping Line Logo" width="160" height="60" className="h-[3.75rem] w-auto object-contain shrink-0 group-hover:scale-105 transition-transform" />
            </picture>
            <div className="flex flex-col justify-center w-fit">
              <div className={cn(
                "font-heading font-black text-3xl leading-none scale-y-[0.75] origin-bottom whitespace-nowrap transition-all duration-300",
                isScrolled || !isHome 
                  ? "bg-clip-text text-transparent bg-gradient-to-b from-[#42AEE7] to-[#14559E]" 
                  : "text-white"
              )}>
                <span className="tracking-[0.22em]">ASCEN</span><span>D</span>
              </div>
              <div className={cn(
                "flex justify-between w-full text-[9px] font-sans font-black uppercase mt-1 px-[2px] transition-colors duration-300",
                isScrolled || !isHome ? "text-[#71C2E6]" : "text-white/90"
              )} style={{ WebkitTextStroke: '0.5px currentColor' }}>
                <span>S</span><span>H</span><span>I</span><span>P</span><span>P</span><span>I</span><span>N</span><span>G</span><span className="w-[1px]"></span><span>L</span><span>I</span><span>N</span><span>E</span><span className="w-[1px]"></span><span>(</span><span>P</span><span>V</span><span>T</span><span>)</span><span className="w-[1px]"></span><span>L</span><span>T</span><span>D</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={textClasses}>
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end text-white px-6 py-2.5 rounded text-sm font-semibold hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-ascend-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled || !isHome ? "text-ascend-navy" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled || !isHome ? "text-ascend-navy" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-ascend-navy font-medium py-2 border-b border-gray-50 hover:text-ascend-ocean-end transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end text-white px-6 py-3 rounded text-center font-semibold hover:shadow-lg transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
