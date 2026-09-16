import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-ascend-navy py-20 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-ascend-ocean-end/20 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to optimize your global supply chain?
        </h2>
        <p className="text-ascend-grey text-lg mb-10 max-w-2xl mx-auto">
          Partner with a logistics specialist backed by a diversified business group. Contact us today for tailored freight and transshipment solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end text-white px-8 py-4 rounded font-semibold hover:shadow-lg hover:shadow-ascend-ocean-end/30 transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 rounded font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
