import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Search, Filter, X, Sparkles, CheckCircle2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Certification } from '../types';

interface CertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  certifications: Certification[];
}

export const CertificationsModal: React.FC<CertificationsModalProps> = ({
  isOpen,
  onClose,
  certifications
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Credentials' },
    { id: 'ai', label: 'AI & Agents' },
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
          <div className="w-12 h-12 rounded-xl bg-[#C74634] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            <div className="w-6 h-6 rounded-xs border-2 border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white"></div>
            </div>
          </div>
        );
      case 'azure':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#0078D4] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs font-mono">
            Az
          </div>
        );
      case 'google':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
            <span className="text-emerald-400 font-bold">G</span>
          </div>
        );
      case 'anthropic':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#CC785C] text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
        );
      case 'datacamp':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#03EF62] text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
            DC
          </div>
        );
      case 'codebasics':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            CB
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-[#4A7C9D] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
            <Award className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 text-[#3B6982] dark:text-sky-300 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">
                All Verified Credentials
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official certifications and verified training credentials ({certifications.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search credentials, skills, organizations..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#3B6982] dark:focus:ring-sky-500"
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

            {/* Total Results */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Showing <span className="font-bold text-slate-800 dark:text-slate-200">{filteredCerts.length}</span> of {certifications.length} certificates
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1 font-medium pr-1 text-[11px]">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#3B6982] text-white shadow-2xs font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => (
                <motion.div
                  layout
                  key={cert.id || cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.25) }}
                  className={`bg-white dark:bg-slate-900 rounded-2xl p-5 border shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    cert.isFeatured
                      ? 'border-[#4A7C9D]/40 dark:border-sky-500/40 ring-1 ring-[#4A7C9D]/20 dark:ring-sky-500/20'
                      : 'border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  {/* Top: Issuer Logo + Title + Details */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3.5">
                      {getIssuerBadge(cert.badgeType)}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-snug">
                          {cert.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                          {cert.issuer || 'Professional Organization'}
                        </p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 mt-0.5">
                          {cert.date} {cert.expires && `· Expires ${cert.expires}`}
                        </p>
                      </div>
                    </div>

                    {/* Skills Tag / Diamond Item */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                          <span>💎</span>
                          <span>{cert.skills[0]}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(1).map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Single Clean Action Button */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {cert.verificationUrl ? 'Official Verification' : 'Verified'}
                    </span>

                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-98 group"
                      >
                        <span>Show credential</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#3B6982] dark:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setPreviewCert(cert)}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-98"
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

          {filteredCerts.length === 0 && (
            <div className="py-12 text-center space-y-3">
              <Award className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                No certifications found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-between items-center text-xs text-slate-500">
          <div>
            13 Verified Industry & Academic Credentials
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#3B6982] hover:bg-[#2A4B5E] text-white rounded-xl font-bold cursor-pointer transition-colors shadow-2xs"
          >
            Close Window
          </button>
        </div>
      </div>

      {/* Full Certificate Details Diploma Lightbox Preview */}
      {previewCert && (
        <div 
          className="fixed inset-0 z-60 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewCert(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                {getIssuerBadge(previewCert.badgeType)}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug font-serif">
                    {previewCert.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A7C9D] dark:text-sky-300">
                    {previewCert.issuer} · {previewCert.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPreviewCert(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Graphic Card Display */}
            <div className="p-7 bg-gradient-to-br from-[#FAF8F5] to-[#F2EDE6] dark:from-slate-800 dark:to-slate-900 rounded-2xl border-4 border-double border-amber-600/40 dark:border-amber-700/40 shadow-inner text-center space-y-4 relative">
              <div className="flex justify-between items-center text-[11px] text-amber-800 dark:text-amber-300 font-serif font-bold uppercase tracking-widest border-b border-amber-200 dark:border-slate-700 pb-2">
                <span>{previewCert.issuer || 'Professional Certification'}</span>
                <span>Verified Credential</span>
              </div>

              <div className="space-y-1.5 py-2">
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Certificate of Achievement</p>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
                  {previewCert.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Presented to <span className="font-bold font-serif text-[#3B6982] dark:text-sky-300 text-sm">Ayush Kumar Sahu</span>
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto pt-1 leading-relaxed">
                  for demonstrating excellence and rigor in applied engineering curricula.
                </p>
              </div>

              {/* Skills Pill Display */}
              {previewCert.skills && previewCert.skills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {previewCert.skills.map((sk) => (
                    <span 
                      key={sk}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100/80 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-medium border border-amber-200/70 dark:border-amber-800/60"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-3 border-t border-amber-200/60 dark:border-slate-700 flex justify-between items-end text-[11px] text-slate-500">
                <div className="text-left">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">{previewCert.date}</div>
                  <div>Status: Authenticated & Verified</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-600/40 flex items-center justify-center font-serif font-bold text-sm">
                  ★
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              {previewCert.verificationUrl ? (
                <a
                  href={previewCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4.5 py-2.5 rounded-xl bg-[#3B6982] hover:bg-[#2A4B5E] text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-2xs hover:shadow cursor-pointer"
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
                onClick={() => setPreviewCert(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
