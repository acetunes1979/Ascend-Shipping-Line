import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Globe, Send, CheckCircle2, Linkedin, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full pt-24 lg:pt-32 bg-ascend-bg min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-ascend-navy mb-6"
          >
            Request a Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Get in touch with our logistics specialists to discuss your global freight and transshipment requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-ascend-navy mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-ascend-ocean-start/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-ascend-ocean-start" />
                  </div>
                  <div>
                    <p className="font-semibold text-ascend-navy mb-1">Head Office</p>
                    <p className="text-gray-600 text-sm">77, Galle Road,<br/>Colombo 03, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-ascend-ocean-start/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-ascend-ocean-start" />
                  </div>
                  <div>
                    <p className="font-semibold text-ascend-navy mb-1">Email</p>
                    <a href="mailto:info@ascendshipping.lk" className="text-gray-600 text-sm hover:text-ascend-ocean-start transition-colors">info@ascendshipping.lk</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-ascend-ocean-start/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-ascend-ocean-start" />
                  </div>
                  <div>
                    <p className="font-semibold text-ascend-navy mb-1">Website</p>
                    <a href="https://www.ascendshipping.lk" target="_blank" rel="noreferrer" className="text-gray-600 text-sm hover:text-ascend-ocean-start transition-colors">www.ascendshipping.lk</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366]" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-ascend-navy mb-1">WhatsApp</p>
                    <a href="https://wa.me/94743223145" target="_blank" rel="noreferrer" className="text-gray-600 text-sm hover:text-[#25D366] transition-colors">+94 74 322 3145</a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="font-semibold text-ascend-navy mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/ascendshipping/" target="_blank" rel="noreferrer" className="text-gray-600 text-sm hover:text-[#0A66C2] transition-colors">Follow us on LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed - Colombo 03, Sri Lanka */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.518600185966!2d79.84594220000002!3d6.904832599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sColombo%2003%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Colombo 03 Location"
              />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              {formStatus === 'success' ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-3xl font-heading font-bold text-ascend-navy mb-4">Quote Request Sent</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out to Ascend Shipping Line. A logistics specialist will review your requirements and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Acme Logistics" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="+94 77 XXXXXXX" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Freight Type *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white">
                      <option value="">Select a service...</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="transshipment">Transshipment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Port / City" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Port / City" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Incoterms (Optional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="e.g. FOB, CIF, EXW" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message / Cargo Details *</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ascend-ocean-start focus:border-ascend-ocean-start outline-none transition-shadow bg-gray-50 focus:bg-white resize-none" placeholder="Please provide details about volume, weight, commodity, and timeline..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-ascend-ocean-start to-ascend-ocean-end text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="animate-pulse">Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
