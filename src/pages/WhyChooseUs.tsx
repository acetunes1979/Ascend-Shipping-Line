import { motion } from 'motion/react';
import { ShieldCheck, Globe2, Ship, Users, CheckCircle, Briefcase, TrendingUp } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { Link } from 'react-router-dom';

const advantages = [
  {
    icon: Ship,
    title: 'Transshipment Expertise',
    desc: 'Deep knowledge of Colombo port operations ensuring priority routing and rapid cargo transfers.'
  },
  {
    icon: Globe2,
    title: 'Global Network',
    desc: 'Strategic alliances with major carriers and global agents to reach any destination seamlessly.'
  },
  {
    icon: Users,
    title: 'Customer-Centric Service',
    desc: 'Dedicated account managers providing transparent, proactive communication and custom solutions.'
  },
  {
    icon: ShieldCheck,
    title: 'Unwavering Reliability',
    desc: 'A proven track record of safe, timely deliveries and meticulous documentation handling.'
  }
];

export function WhyChooseUs() {
  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ascend-navy mb-6">
            The Ascend Advantage
          </h1>
          <p className="text-xl text-gray-600">
            Why leading businesses trust us with their critical global logistics.
          </p>
        </motion.div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-ascend-bg border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, index) => (
              <motion.div 
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:space-x-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-ascend-ocean-start/10 text-ascend-ocean-start flex items-center justify-center shrink-0 mb-6 sm:mb-0">
                  <adv.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-ascend-navy mb-3">{adv.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glory to Glory Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-medium italic text-ascend-navy mb-8 max-w-4xl mx-auto leading-relaxed">
              "We believe wealth is not merely a measure of success, but a tool for stewardship, impact, and advancing a greater purpose."
            </p>
            
            <div className="flex items-center space-x-2 mb-10">
              <div className="w-12 h-px bg-ascend-grey/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-ascend-ocean-end" />
              <div className="w-2 h-2 rounded-full bg-ascend-navy" />
              <div className="w-1.5 h-1.5 rounded-full bg-ascend-ocean-end" />
              <div className="w-12 h-px bg-ascend-grey/30" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black font-heading uppercase text-ascend-navy tracking-tighter mb-6">
              GLORY TO GLORY
            </h2>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-0.5 bg-ascend-grey/30" />
              <div className="w-16 h-1 bg-ascend-ocean-end" />
              <div className="w-8 h-0.5 bg-ascend-grey/30" />
            </div>

            <p className="text-sm md:text-lg lg:text-xl font-light uppercase tracking-[0.3em] text-ascend-navy mb-10">
              ASCENDING IN EXCELLENCE
            </p>

            <div className="flex items-center space-x-2">
              <div className="w-12 h-px bg-ascend-grey/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-ascend-ocean-end" />
              <div className="w-2 h-2 rounded-full bg-ascend-navy" />
              <div className="w-1.5 h-1.5 rounded-full bg-ascend-ocean-end" />
              <div className="w-12 h-px bg-ascend-grey/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Group Tie-in */}
      <section className="py-24 bg-white relative overflow-hidden">
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
                We are more than just a freight forwarder. As a proud subsidiary of <a href="https://ascendinternational.lk/" target="_blank" rel="noreferrer" className="text-ascend-ocean-start font-medium hover:underline">Ascend International (Pvt) Ltd</a>, we offer our clients access to a diversified business ecosystem.
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
              
              <Link to="/contact" className="inline-flex bg-ascend-navy text-white px-8 py-4 rounded font-semibold hover:bg-ascend-ocean-end transition-colors">
                Partner With Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Logistics Strategy" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
