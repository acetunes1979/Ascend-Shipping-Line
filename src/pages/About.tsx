import { motion } from 'motion/react';
import { Building2, ArrowRight } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';

export function About() {
  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ascend-navy mb-6 leading-tight"
          >
            Connecting Global Trade Through Reliable Logistics
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-ascend-navy mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ascend Shipping Line (Pvt) Ltd is a premier shipping and logistics company committed to providing reliable freight forwarding, transshipment, and supply chain solutions for businesses engaged in international trade.
                </p>
                <p>
                  As a subsidiary of Ascend International (Pvt) Ltd, we leverage a diversified business ecosystem to provide clients with integrated logistics support that extends beyond transportation.
                </p>
                <p>
                  Our focus is on delivering efficient cargo movement, transparent communication, and long-term partnerships that create value for our clients.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                alt="Cargo port operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ascend-navy/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-ascend-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12 rounded-2xl shadow-sm border-t-4 border-ascend-ocean-start"
            >
              <h3 className="text-sm font-bold text-ascend-ocean-start uppercase tracking-wider mb-6">Our Vision</h3>
              <p className="text-2xl font-heading font-medium text-ascend-navy leading-relaxed">
                "To become a trusted logistics partner connecting businesses and markets through efficient, reliable, and innovative shipping solutions."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-12 rounded-2xl shadow-sm border-t-4 border-ascend-accent"
            >
              <h3 className="text-sm font-bold text-ascend-accent uppercase tracking-wider mb-6">Our Mission</h3>
              <p className="text-2xl font-heading font-medium text-ascend-navy leading-relaxed">
                "To deliver exceptional logistics services that simplify global trade and create long-term value through professionalism, strategic partnerships, and customer-focused service."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part of Ascend International Band */}
      <section className="bg-ascend-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Corporate building" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-ascend-ocean-start to-ascend-ocean-end rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Part of Ascend International</h2>
          <p className="text-lg md:text-xl text-ascend-grey mb-12 leading-relaxed">
            As a subsidiary, we offer integrated trade, procurement, and logistics support that extends far beyond standard transportation. We build businesses, create opportunities, and impact nations.
          </p>
          <a 
            href="https://ascendinternational.lk/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-ascend-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors group"
          >
            <span>Visit Ascend International</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
