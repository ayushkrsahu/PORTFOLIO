import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Building2, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Experience, Education } from '../types';

interface ExperienceEducationSectionProps {
  experiences: Experience[];
  education: Education[];
  onScrollToCertifications?: () => void;
}

export const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({
  experiences,
  education,
  onScrollToCertifications
}) => {
  return (
    <section id="experience-education-section" className="w-full bg-slate-50/70 dark:bg-slate-900/40 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* SECTION 1: WORK EXPERIENCE */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 rounded-xl text-[#3B6982] dark:text-sky-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#3B6982] dark:text-sky-200">Work Experience</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">2+ years of data engineering & cloud warehouse migration expertise</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 text-[#4A7C9D] dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-slate-800 dark:text-slate-100 mt-1">{exp.role}</h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="px-3 py-1 bg-sky-50 dark:bg-sky-950/60 text-[#3B6982] dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 rounded-full text-xs font-bold font-mono">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#4A7C9D] dark:text-sky-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {exp.summary && (
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-5">
                    {exp.summary}
                  </p>
                )}

                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    {exp.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 px-3 py-2.5"
                      >
                        <div className="text-base sm:text-lg font-bold font-mono text-[#3B6982] dark:text-sky-300 leading-tight">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {exp.highlights && exp.highlights.length > 0 ? (
                  <div className="space-y-5">
                    {exp.highlights.map((group) => (
                      <div key={group.area}>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-400 mb-2">
                          {group.area}
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-[#4A7C9D] dark:marker:text-sky-400 leading-relaxed">
                          {group.points.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-[#4A7C9D] dark:marker:text-sky-400 leading-relaxed">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono font-medium rounded-md border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: ACADEMIC EDUCATION */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#4A7C9D]/10 dark:bg-sky-500/10 rounded-xl text-[#3B6982] dark:text-sky-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#3B6982] dark:text-sky-200">Education</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Postgraduate and undergraduate academic achievements</p>
              </div>
            </div>

            {onScrollToCertifications && (
              <button
                onClick={onScrollToCertifications}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#4A7C9D] dark:text-sky-300 hover:underline cursor-pointer"
              >
                <span>Jump to Certifications</span>
                <span>↓</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all space-y-4 relative pl-7"
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#4A7C9D] dark:bg-sky-500 rounded-l-3xl" />
                
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold font-serif text-slate-800 dark:text-slate-100 text-lg leading-snug">
                      {edu.institution}
                    </h3>
                    <div className="text-xs text-slate-400 dark:text-slate-400 mt-0.5">
                      {edu.period}
                    </div>
                  </div>
                  {edu.grade && (
                    <span className="text-xs font-bold text-sky-800 dark:text-sky-200 bg-sky-100 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  )}
                </div>

                <div className="text-sm font-semibold text-[#3B6982] dark:text-sky-300">
                  {edu.degree}
                </div>

                {edu.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


