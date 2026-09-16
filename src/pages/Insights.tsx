import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';

const pillars = [
  { id: 'all', label: 'All Insights', color: 'bg-ascend-navy' },
  { id: 'transshipment', label: 'Transshipment Expertise', color: 'bg-ascend-ocean-end' },
  { id: 'knowledge', label: 'Freight Knowledge', color: 'bg-ascend-ocean-start' },
  { id: 'industry', label: 'Industry Updates', color: 'bg-ascend-grey' },
  { id: 'solutions', label: 'Client Solutions', color: 'bg-emerald-600' },
  { id: 'corporate', label: 'Corporate Growth', color: 'bg-ascend-accent' },
];

// Placeholder articles
const articles = [
  {
    id: 1,
    title: 'Why Colombo is the Premier Transshipment Hub in 2026',
    excerpt: 'An analysis of recent infrastructure upgrades and strategic advantages making Sri Lanka the top choice for regional routing.',
    category: 'transshipment',
    date: 'Sep 1, 2026',
    author: 'Logistics Desk',
    image: 'https://images.unsplash.com/photo-1542289657-b2488a098059?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Understanding Incoterms: A Guide for Exporters',
    excerpt: 'A clear breakdown of the most common international commercial terms and how they impact liability and cost.',
    category: 'knowledge',
    date: 'Aug 24, 2026',
    author: 'Documentation Team',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Global Supply Chain Resilience in Modern Trade',
    excerpt: 'How the shipping industry is adapting to new challenges and ensuring uninterrupted cargo flow.',
    category: 'industry',
    date: 'Aug 15, 2026',
    author: 'Industry Analysis',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Case Study: Streamlining Garment Exports to Europe',
    excerpt: 'How Ascend Shipping reduced transit times by 15% for a major textile manufacturer using smart routing.',
    category: 'solutions',
    date: 'Aug 05, 2026',
    author: 'Client Success',
    image: 'https://images.unsplash.com/photo-1555522777-a89e4726b2bb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Ascend International Group Expands Logistics Portfolio',
    excerpt: 'New strategic partnerships announced to strengthen our end-to-end supply chain capabilities.',
    category: 'corporate',
    date: 'Jul 28, 2026',
    author: 'Corporate Comms',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'FCL vs LCL: Choosing the Right Ocean Freight Strategy',
    excerpt: 'A strategic comparison to help importers and exporters optimize their shipping budgets and timelines.',
    category: 'knowledge',
    date: 'Jul 15, 2026',
    author: 'Freight Specialists',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop',
  }
];

export function Insights() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredArticles = activeTab === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeTab);

  return (
    <div className="w-full pt-24 lg:pt-32">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ascend-navy mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl text-gray-600">
            Industry knowledge, company news, and expert logistics strategies.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === pillar.id
                  ? `${pillar.color} text-white border-transparent shadow-md`
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {pillar.label}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-ascend-bg py-20 min-h-[500px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article) => {
                const pillarInfo = pillars.find(p => p.id === article.category);
                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={article.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full ${pillarInfo?.color}`}>
                        {pillarInfo?.label}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-ascend-navy mb-3 line-clamp-2 group-hover:text-ascend-ocean-start transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                        {article.excerpt}
                      </p>
                      <button className="text-ascend-ocean-start font-medium text-sm inline-flex items-center space-x-1 hover:text-ascend-ocean-end transition-colors group/link mt-auto w-fit">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              No articles found for this category.
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
