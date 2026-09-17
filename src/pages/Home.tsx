import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Plane, Container, ArrowRight, ShieldCheck, Globe2, Users, CheckCircle, Briefcase, TrendingUp, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { CtaSection } from '../components/CtaSection';

const SLIDES = [
  {
    webp: "/hero-1.webp",
    fallback: "/Gemini_Generated_Image_o0yjyfo0yjyfo0yj.jpeg",
    subtitle: "The Shipping & Logistics Subsidiary of Ascend International (Pvt) Ltd",
    titleLine1: "Your Trusted Partner in",
    titleLine2: "Global Logistics",
    description: "Specialists in Transshipments & Global Freight Solutions"
  },
  {
    webp: "/hero-2.webp",
    fallback: "/freight-knowledge.jpeg",
    subtitle: "Industry Leading Expertise",
    titleLine1: "Mastering the Complexities of",
    titleLine2: "Freight Forwarding",
    description: "Delivering knowledge-driven solutions for your supply chain"
  },
  {
    webp: "/hero-3.webp",
    fallback: "/industry-updates.png",
    subtitle: "Stay Ahead of the Curve",
    titleLine1: "Real-Time Intelligence &",
    titleLine2: "Industry Updates",
    description: "Navigating global markets with accurate, timely insights"
  },
  {
    webp: "/hero-4.webp",
    fallback: "/client-solutions.png",
    subtitle: "Tailored to Your Needs",
    titleLine1: "Customized & Scalable",
    titleLine2: "Client Solutions",
    description: "Adapting to your unique business requirements with precision"
  },
  {
    webp: "/hero-5.webp",
    fallback: "/corporate-growth.png",
    subtitle: "Driving Business Forward",
    titleLine1: "Empowering Your",
    titleLine2: "Corporate Growth",
    description: "Strategic logistics partnerships that fuel expansion"
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Preload the next slide image in background for seamless transitions
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIndex].webp;
  }, [currentSlide]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-ascend-navy">
          {SLIDES.map((slide, index) => (
            <div 
              key={slide.webp}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: index === currentSlide ? 1 : 0
              }}
            >
              <picture>
                <source srcSet={slide.webp} type="image/webp" />
                <img 
                  src={slide.fallback}
                  alt={`Logistics background ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  {...(index === 0 ? { fetchPriority: "high" } : {})}
                  style={{
                    transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 5s ease-out'
                  }}
                />
              </picture>
            </div>
          ))}
          <div className="absolute inset-0 z-10 bg-ascend-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-ascend-navy via-transparent to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-20 h-full flex flex-col justify-center">
          <div className="relative w-full">
            {SLIDES.map((slide, index) => (
              <div 
                key={`text-${index}`}
                className="max-w-5xl transition-all duration-1000 ease-in-out"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform: `translateY(${index === currentSlide ? '0' : '20px'})`,
                  position: index === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  pointerEvents: index === currentSlide ? 'auto' : 'none',
                  visibility: index === currentSlide || index === 0 ? 'visible' : 'hidden' // Keep first in DOM flow for height
                }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 md:w-24 h-[2px] bg-[#5FA5D9]" />
                  <span className="text-[#5FA5D9] text-xs md:text-sm font-semibold font-sans uppercase tracking-[0.25em] leading-relaxed">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-black text-white leading-[1.1] mb-8 tracking-tight">
                  <span className="inline-block whitespace-normal md:whitespace-nowrap">{slide.titleLine1}</span><br />
                  <span>{slide.titleLine2}</span>
                </h1>
                
                <h2 className="text-xl md:text-[1.6rem] font-heading font-semibold text-[#8EB7ED] tracking-wide leading-snug">
                  {slide.description}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* News Ticker Slider */}
        <div className="absolute bottom-12 left-0 w-full z-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              key={currentSlide} // Forces animation to restart perfectly synced on every slide change
              initial={{ x: "100vw" }}
              animate={{ 
                x: ["100vw", "0px", "0px", "-100vw"] 
              }}
              transition={{ 
                duration: 5, // Matches the 5-second setInterval exactly
                times: [0, 0.2, 0.8, 1], // 1s to slide in, 3s to wait, 1s to slide out
                ease: "easeInOut" 
              }}
              className="flex items-center space-x-4 w-max"
            >
              <div className="w-12 md:w-24 h-[2px] bg-[#5FA5D9] shrink-0" />
              <span className="text-white text-xs md:text-sm font-semibold font-sans uppercase tracking-[0.25em] leading-relaxed shrink-0">
                Glory to Glory Ascending in excellence
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Snapshot */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ascend-navy mb-4">Core Logistics Solutions</h2>
            <p className="text-ascend-grey">Comprehensive freight forwarding and strategic transshipment services designed to connect businesses and markets globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop" alt="Ocean Freight" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded shadow flex items-center justify-center text-ascend-ocean-start">
                  <Ship className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold text-ascend-navy mb-3">Ocean Freight</h3>
                <p className="text-gray-600 mb-6 flex-grow">Reliable FCL and LCL shipments, door-to-port and port-to-port solutions for global trade.</p>
                <Link to="/services" className="text-ascend-ocean-start font-medium inline-flex items-center space-x-1 hover:text-ascend-ocean-end transition-colors group/link">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop" alt="Air Freight" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded shadow flex items-center justify-center text-ascend-ocean-start">
                  <Plane className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold text-ascend-navy mb-3">Air Freight</h3>
                <p className="text-gray-600 mb-6 flex-grow">Express cargo, commercial air freight, and priority solutions for time-sensitive deliveries.</p>
                <Link to="/services" className="text-ascend-ocean-start font-medium inline-flex items-center space-x-1 hover:text-ascend-ocean-end transition-colors group/link">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border-2 border-ascend-ocean-start/20 bg-ascend-bg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative"
            >
              
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" alt="Transshipment" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded shadow flex items-center justify-center text-ascend-ocean-start">
                  <Container className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col bg-white">
                <h3 className="text-xl font-heading font-bold text-ascend-navy mb-3">Transshipment</h3>
                <p className="text-gray-600 mb-6 flex-grow">Leveraging Colombo's strategic position as a regional maritime hub for efficient cargo routing.</p>
                <Link to="/transshipment" className="text-ascend-ocean-start font-medium inline-flex items-center space-x-1 hover:text-ascend-ocean-end transition-colors group/link">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Synergy Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-ascend-navy/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-ascend-navy text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                Group Synergy
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ascend-navy mb-6 leading-tight">
                Integrated Trade, Procurement & Logistics Support
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are more than just a freight forwarder. As a proud subsidiary of{' '}
                <a 
                  href="https://ascendinternational.lk/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-ascend-ocean-start font-medium hover:underline"
                >
                  Ascend International (Pvt) Ltd
                </a>
                , we offer our clients access to a diversified business ecosystem.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ascend-ocean-start mr-3 shrink-0" />
                  <span className="text-gray-700">Financial stability and backing of a major diversified group.</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-6 h-6 text-ascend-ocean-start mr-3 shrink-0" />
                  <span className="text-gray-700">Holistic supply chain solutions combining procurement and trade expertise.</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-ascend-ocean-start mr-3 shrink-0" />
                  <span className="text-gray-700">A shared philosophy: <em>"Building Businesses. Creating Opportunities. Impacting Nations."</em></span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-ascend-navy text-white px-8 py-4 rounded font-semibold hover:bg-ascend-ocean-end transition-colors shadow-sm text-center"
                >
                  Partner With Us
                </Link>
                <a 
                  href="mailto:info@ascendshipping.lk" 
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded font-semibold text-ascend-navy bg-gray-50 border border-gray-200 hover:border-ascend-ocean-end hover:text-ascend-ocean-start hover:bg-white hover:shadow-sm transition-all text-center"
                >
                  <Mail className="w-5 h-5 text-ascend-ocean-start shrink-0" />
                  <span>info@ascendshipping.lk</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
                alt="Corporate Logistics Strategy" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="bg-ascend-navy py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-ascend-accent mb-4">
                <Ship className="w-8 h-8" />
              </div>
              <h4 className="text-white font-heading font-semibold mb-2">Transshipment Expertise</h4>
              <p className="text-ascend-grey text-sm">Specialized handling in the Colombo hub</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-ascend-accent mb-4">
                <Globe2 className="w-8 h-8" />
              </div>
              <h4 className="text-white font-heading font-semibold mb-2">Global Network</h4>
              <p className="text-ascend-grey text-sm">Connecting businesses across all continents</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-ascend-accent mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-white font-heading font-semibold mb-2">Customer-Centric</h4>
              <p className="text-ascend-grey text-sm">Dedicated support and transparent communication</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-ascend-accent mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-white font-heading font-semibold mb-2">Reliability</h4>
              <p className="text-ascend-grey text-sm">Consistent delivery and strategic partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Callout */}
      <section className="py-24 bg-ascend-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ascend-ocean-start/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-sm font-bold text-ascend-accent uppercase tracking-wider mb-4">Our Vision</h3>
              <p className="text-xl font-heading font-medium text-ascend-navy leading-relaxed relative z-10">
                "To become a trusted logistics partner connecting businesses and markets through efficient, reliable, and innovative shipping solutions."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
            >
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-ascend-navy/5 rounded-full -mr-16 -mb-16 blur-2xl" />
              <h3 className="text-sm font-bold text-ascend-accent uppercase tracking-wider mb-4">Our Mission</h3>
              <p className="text-xl font-heading font-medium text-ascend-navy leading-relaxed relative z-10">
                "To deliver exceptional logistics services that simplify global trade and create long-term value through professionalism, strategic partnerships, and customer-focused service."
              </p>
            </motion.div>
          </div>


        </div>
      </section>

      <CtaSection />
    </div>
  );
}
