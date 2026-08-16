import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Search, Sparkles, Eye, CheckCircle2, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Certification } from '../types';

interface CertificationsSectionProps {
  certifications: Certification[];
  onOpenWindow: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  onOpenWindow
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCertificate, setActiveCertificate] = useState<Certification | null>(null);

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'ai', label: 'AI & Agentic Systems' },
    { id: 'cloud', label: 'Cloud Architecture' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'analytics', label: 'Analytics & BI' },
    { id: 'programming', label: 'Python & Systems' }
  ];

  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch =
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.issuer && cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const getIssuerBadge = (badgeType?: string) => {
    switch (badgeType) {
      case 'oracle':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#C74634] text-white flex items-center justify-center font-bold shadow-md shrink-0 border border-red-400/40">
            <div className="w-7 h-7 rounded-md border-[3.5px] border-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
            </div>
          </div>
        );
      case 'azure':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#0078D4] text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0 border border-sky-400/40 font-mono">
            Az
          </div>
        );
      case 'google':
        return (
          <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0 border border-slate-700">
            <span className="text-emerald-400 font-black">G</span>
          </div>
        );
      case 'anthropic':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#CC785C] text-white flex items-center justify-center font-bold shadow-md shrink-0">
            <Sparkles className="w-7 h-7" />
          </div>
        );
      case 'datacamp':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#03EF62] text-slate-950 flex items-center justify-center font-black text-lg shadow-md shrink-0">
            DC
          </div>
        );
      case 'codebasics':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
            CB
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#4A7C9D] text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
            <Award className="w-7 h-7" />
          </div>
        );
    }
  };

  const handleShowCredential = (cert: Certification) => {
    // Shows custom certificate right on the website in-app modal
    setActiveCertificate(cert);
  };

  return (
    <section 
      id="certifications-section" 
      className="w-full bg-slate-50/70 dark:bg-slate-900/40 py-20 px-6 sm:px-12 md:px-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Official Accreditations
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-800 dark:text-slate-100">
              Certifications & Credentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              Industry-standard certified credentials across Agentic AI, Autonomous Workflows, Microsoft Azure, Google Cloud Analytics, and Databricks engineering.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenWindow}
              className="px-5 py-2.5 bg-[#3B6982] hover:bg-[#2A4B5E] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <Eye className="w-4 h-4" />
              <span>Open Certificate Viewer</span>
              <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-mono">
                {certifications.length}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#3B6982] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials, skills, organizations..."
              className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B6982] dark:focus:ring-sky-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Spacious Certification Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                layout
                key={cert.id || cert.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  cert.isFeatured
                    ? 'border-[#4A7C9D]/40 dark:border-sky-500/40 ring-1 ring-[#4A7C9D]/15 dark:ring-sky-500/20'
                    : 'border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {/* Header: Issuer Logo & Title Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    {getIssuerBadge(cert.badgeType)}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 font-serif leading-snug">
                        {cert.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                        {cert.issuer || 'Official Organization'}
                      </p>
                      
                      <p className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                        {cert.date} {cert.expires && `· Expires ${cert.expires}`}
                      </p>
                    </div>
                  </div>

                  {/* Skills / Diamond Expertise Row */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                        <span>💎</span>
                        <span>{cert.skills[0]}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(1).map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Single Clean "Show credential" Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {cert.verificationUrl ? 'Official Verification' : 'Verified Certificate'}
                  </span>

                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white text-xs font-bold transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer shadow-2xs active:scale-98 group"
                    >
                      <span>Show credential</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#3B6982] dark:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleShowCredential(cert)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white text-xs font-bold transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer shadow-2xs active:scale-98"
                    >
                      <span>Show credential</span>
                      <Eye className="w-3.5 h-3.5 text-[#3B6982] dark:text-sky-400" />
                    </button>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Verification Banner */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                100% Verified Credentials & Official Badges
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Inspect every authentic certificate directly on this site with full accreditation seals.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenWindow}
            className="px-5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            View All in Certificate Viewer →
          </button>
        </div>

      </div>

      {/* --- In-App Custom Certificate Diploma Modal (Displays directly on the website) --- */}
      {activeCertificate && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveCertificate(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                {getIssuerBadge(activeCertificate.badgeType)}
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 dark:text-white leading-snug">
                    {activeCertificate.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Issued by {activeCertificate.issuer} · {activeCertificate.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveCertificate(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Authentic Diploma Certificate Presentation */}
            <div className="p-8 sm:p-10 bg-gradient-to-b from-[#FAF8F5] to-[#F3EFEA] dark:from-slate-900 dark:to-slate-950 rounded-2xl border-4 border-double border-amber-600/40 dark:border-amber-700/40 text-center space-y-5 relative shadow-inner">
              <div className="flex justify-between items-center text-xs font-serif text-amber-800 dark:text-amber-400 font-bold uppercase tracking-widest border-b border-amber-200 dark:border-amber-900/40 pb-2">
                <span>{activeCertificate.issuer || 'Accredited Institution'}</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Official Credential
                </span>
              </div>

              <div className="py-2 space-y-2.5">
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
                  Certificate of Achievement & Accreditation
                </p>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                  {activeCertificate.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                  This certifies that
                </p>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#3B6982] dark:text-sky-300">
                  Ayush Kumar Sahu
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  has successfully satisfied all requirements, assessments, and demonstrated mastery in applied systems and domain competencies.
                </p>
              </div>

              {/* Skills Pill Display */}
              {activeCertificate.skills && activeCertificate.skills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {activeCertificate.skills.map((sk) => (
                    <span 
                      key={sk}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100/80 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-medium border border-amber-200/70 dark:border-amber-800/60"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              )}

              {/* Verified Seal & Status */}
              <div className="pt-4 border-t border-amber-200 dark:border-amber-900/40 flex justify-between items-end text-xs text-slate-500">
                <div className="text-left space-y-0.5">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">{activeCertificate.date}</div>
                  <div className="text-[11px]">Academic & Professional Verification</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 border-2 border-amber-600/50 flex items-center justify-center font-serif font-bold text-xl shadow-xs">
                    ★
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 mt-1">
                    Certified Seal
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex justify-between items-center pt-2">
              {activeCertificate.verificationUrl ? (
                <a
                  href={activeCertificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#3B6982] hover:bg-[#2A4B5E] text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <span>Verify on Official Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Authenticated Certificate</span>
                </div>
              )}

              <button
                onClick={() => setActiveCertificate(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};
