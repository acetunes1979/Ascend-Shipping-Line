import { motion } from 'motion/react';
import { Ship, Plane, Container, FileText, Globe2, Link2, SearchCheck, CheckCircle2 } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';

const servicesList = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Comprehensive ocean freight solutions connecting major global ports with reliable transit times.',
    features: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'Import & Export Shipments', 'Door-to-Port / Port-to-Port']
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast, secure, and time-definite air cargo solutions for your most critical shipments.',
    features: ['Express Cargo', 'Commercial Air Freight', 'Consolidated Shipments', 'Priority Cargo Solutions']
  },
  {
    icon: Container,
    title: 'Transshipment Services',
    description: 'Our core specialization. Leveraging Sri Lanka’s strategic position as a primary Indian Ocean hub.',
    features: ['Colombo Hub Routing', 'Multi-modal Transfers', 'Cost-effective Consolidation', 'Strategic Network Access']
  },
  {
    icon: Globe2,
    title: 'Freight Forwarding',
    description: 'End-to-end management of your cargo’s journey, ensuring optimal routing and carrier selection.',
    features: ['Global Network', 'Carrier Negotiation', 'Route Optimization', 'Cargo Tracking']
  },
  {
    icon: FileText,
    title: 'Customs & Documentation',
    description: 'Navigating complex global customs regulations to ensure smooth clearance and compliance.',
    features: ['Customs Clearance', 'Import/Export Documentation', 'Tariff Classification', 'Regulatory Compliance']
  },
  {
    icon: Link2,
    title: 'Supply Chain Coordination',
    description: 'Integrated logistics management backed by the Ascend International ecosystem.',
    features: ['Procurement Support', 'Inventory Management', 'Distribution Logistics', 'End-to-End Visibility']
  }
];

const industries = [
  'International Trade Companies',
  'Manufacturers',
  'Importers & Exporters',
  'Retailers',
  'Automotive',
  'Healthcare & Medical Products',
  'Industrial Products',
  'Construction Materials',
  'Consumer Goods'
];

export function Services() {
  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ascend-navy mb-6">
            Comprehensive Logistics Solutions
          </h1>
          <p className="text-xl text-gray-600">
            From ocean freight to strategic transshipment, we provide reliable services tailored to your global trade needs.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  service.title === 'Transshipment Services' 
                    ? 'border-ascend-ocean-start/30 bg-ascend-bg shadow-md relative overflow-hidden' 
                    : 'border-gray-100 bg-white'
                }`}
              >
                {service.title === 'Transshipment Services' && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    CORE SPECIALIZATION
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.title === 'Transshipment Services'
                    ? 'bg-gradient-to-br from-ascend-ocean-start to-ascend-ocean-end text-white'
                    : 'bg-ascend-bg text-ascend-navy'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-ascend-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-ascend-accent mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-ascend-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ascend-navy mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-lg">Our diverse logistics expertise allows us to cater to a wide range of industry sectors, ensuring specialized handling for every cargo type.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-ascend-navy font-medium text-sm flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-ascend-ocean-start" />
                <span>{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
