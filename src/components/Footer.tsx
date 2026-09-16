import { Link } from 'react-router-dom';
import { Ship, Mail, MapPin, Linkedin, Globe, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ascend-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-4 group w-fit">
              <img src="/logo.png" alt="Ascend Shipping Line Logo" className="h-[3.75rem] w-auto object-contain shrink-0 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col justify-center text-white w-fit">
                <div className="font-heading font-black text-3xl leading-none scale-y-[0.75] origin-bottom whitespace-nowrap">
                  <span className="tracking-[0.22em]">ASCEN</span><span>D</span>
                </div>
                <div className="flex justify-between w-full text-[9px] font-sans font-black uppercase mt-1 opacity-90 px-[2px]" style={{ WebkitTextStroke: '0.5px currentColor' }}>
                  <span>S</span><span>H</span><span>I</span><span>P</span><span>P</span><span>I</span><span>N</span><span>G</span><span className="w-[1px]"></span><span>L</span><span>I</span><span>N</span><span>E</span><span className="w-[1px]"></span><span>(</span><span>P</span><span>V</span><span>T</span><span>)</span><span className="w-[1px]"></span><span>L</span><span>T</span><span>D</span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-ascend-grey leading-relaxed">
              Your Trusted Partner in Global Logistics — Specialists in Transshipments & Global Freight Solutions.
            </p>
            <p className="text-xs text-ascend-accent font-medium uppercase tracking-wider">
              Part of Ascend International Group
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-ascend-grey hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-ascend-grey hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/transshipment" className="text-ascend-grey hover:text-white transition-colors text-sm">Transshipment Hub</Link></li>
              <li><Link to="/insights" className="text-ascend-grey hover:text-white transition-colors text-sm">Insights</Link></li>
              <li><Link to="/why-choose-us" className="text-ascend-grey hover:text-white transition-colors text-sm">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-ascend-grey text-sm">Ocean Freight</li>
              <li className="text-ascend-grey text-sm">Air Freight</li>
              <li className="text-ascend-grey text-sm">Transshipment Services</li>
              <li className="text-ascend-grey text-sm">Freight Forwarding</li>
              <li className="text-ascend-grey text-sm">Customs & Documentation</li>
              <li className="text-ascend-grey text-sm">Supply Chain Coordination</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-ascend-grey">
                <MapPin className="w-5 h-5 text-ascend-ocean-end shrink-0 mt-0.5" />
                <span>77, Galle Road,<br />Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-ascend-grey">
                <Mail className="w-5 h-5 text-ascend-ocean-end shrink-0" />
                <a href="mailto:info@ascendshipping.lk" className="hover:text-white transition-colors">info@ascendshipping.lk</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-ascend-grey">
                <Globe className="w-5 h-5 text-ascend-ocean-end shrink-0" />
                <a href="https://www.ascendshipping.lk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.ascendshipping.lk</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-ascend-grey">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/94743223145" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">+94 74 322 3145</a>
              </li>
              <li className="pt-1">
                <a 
                  href="https://www.linkedin.com/company/ascendshipping/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#0A66C2]/15 text-[#70B5F9] border border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all text-xs font-semibold group shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#70B5F9] group-hover:text-white transition-colors shrink-0" />
                  <span>Follow on LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 flex items-center justify-center text-xs text-ascend-grey text-center">
          <p>
            © {new Date().getFullYear()}{' '}
            <a 
              href="https://baraint.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors underline decoration-ascend-grey/40 hover:decoration-white"
            >
              Bara International Technologies (Pvt) Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
