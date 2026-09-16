import { motion } from 'motion/react';
import { Anchor, Map, Ship, ArrowRight, TrendingUp } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';

export function Transshipment() {
  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header / Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ascend-ocean-start/10 text-ascend-ocean-start font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-full mb-6">
              Our Core Specialization
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ascend-navy mb-6 leading-tight">
              The Transshipment Hub of the Indian Ocean
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ascend Shipping Line specializes in leveraging Sri Lanka's strategic position to provide highly efficient, cost-effective transshipment solutions for global freight forwarders, shipping agents, and traders.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1542289657-b2488a098059?q=80&w=2070&auto=format&fit=crop" 
              alt="Colombo Port" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ascend-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                <p className="font-semibold font-heading mb-1 text-lg">Port of Colombo</p>
                <p className="text-sm text-white/80">Connecting East-West maritime routes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Colombo Section */}
      <section className="py-24 bg-ascend-navy text-white relative overflow-hidden">
        {/* Decorative Map Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Route Through Sri Lanka?</h2>
            <p className="text-ascend-grey text-lg">
              Located at the crossroads of major shipping lanes, Colombo offers unparalleled transit times and connectivity between Asia, Europe, and the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Map className="w-10 h-10 text-ascend-accent mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Strategic Location</h3>
              <p className="text-ascend-grey text-sm leading-relaxed">
                Situated midway between key hubs, reducing overall transit times and offering highly efficient route options for major shipping lines.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Ship className="w-10 h-10 text-ascend-accent mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Deep-Water Capacity</h3>
              <p className="text-ascend-grey text-sm leading-relaxed">
                Capable of handling the world's largest mega-ships, ensuring smooth operations for high-volume transshipment cargo.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <TrendingUp className="w-10 h-10 text-ascend-accent mb-6" />
              <h3 className="text-xl font-heading font-bold mb-3">Cost Efficiency</h3>
              <p className="text-ascend-grey text-sm leading-relaxed">
                Competitive terminal handling charges and streamlined operations make it a financially strategic choice for global forwarders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ascend Advantage */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold text-ascend-navy">The Ascend Transshipment Advantage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end mt-4 md:mt-0" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ascend-bg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-ascend-ocean-start">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-ascend-navy mb-2">Priority Handling</h4>
                  <p className="text-gray-600">Our strong relationships with port authorities and terminal operators ensure priority berthing and rapid cargo turnaround.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ascend-bg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-ascend-ocean-start">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-ascend-navy mb-2">Seamless Coordination</h4>
                  <p className="text-gray-600">We manage complex multi-carrier transfers, ensuring your cargo connects flawlessly from the mother vessel to feeder ships.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ascend-bg flex items-center justify-center shrink-0 mr-6">
                  <span className="text-xl font-bold text-ascend-ocean-start">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-ascend-navy mb-2">Documentation Expertise</h4>
                  <p className="text-gray-600">Rapid processing of all required transshipment manifests and customs documentation to prevent delays.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ascend-bg rounded-2xl p-10 flex flex-col justify-center">
              <Anchor className="w-16 h-16 text-ascend-ocean-start mb-6 opacity-50" />
              <h3 className="text-2xl font-heading font-bold text-ascend-navy mb-4">Ready to route your cargo efficiently?</h3>
              <p className="text-gray-600 mb-8">
                Let our transshipment specialists design a custom routing plan that minimizes transit time and maximizes cost savings for your global supply chain.
              </p>
              <a 
                href="/contact"
                className="bg-ascend-navy text-white px-6 py-3 rounded font-semibold w-fit hover:bg-ascend-navy-light transition-colors flex items-center space-x-2"
              >
                <span>Consult a Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
