import React from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../types';

interface HeroProps {
  profile: UserProfile;
  onOpenResume: () => void;
  onScrollToProjects: () => void;
  onScrollToCertifications: () => void;
  onScrollToDashboards?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onScrollToProjects,
  onScrollToCertifications,
  onScrollToDashboards
}) => {
  return (
    <section id="hero-section" className="w-full bg-white dark:bg-slate-950 pt-10 pb-8 px-6 sm:px-12 text-center transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto space-y-4"
      >
        
        {/* Main Heading - Refined, moderate size matching sample UI */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light tracking-wide leading-relaxed">
          Hello there, I am a{' '}
          <span className="font-semibold text-[#3B6982] dark:text-sky-300">
            Senior Data Engineer at ByteIQ Analytics
          </span>
        </h2>

        {/* Visa status */}
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-normal tracking-wide max-w-xl mx-auto">
          Authorized to work in the UK until November 2027 (Graduate Visa)
        </p>

        {/* Subtitle */}
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-normal tracking-wide max-w-xl mx-auto">
          Get to know me more through my resume, projects, dashboards and certifications.
        </p>

        {/* Action Pill Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenResume}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-colors duration-200 text-xs tracking-wide font-medium cursor-pointer shadow-2xs"
          >
            Resume
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onScrollToProjects}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-colors duration-200 text-xs tracking-wide font-medium cursor-pointer shadow-2xs"
          >
            Projects
          </motion.button>

          {onScrollToDashboards && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onScrollToDashboards}
              className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-colors duration-200 text-xs tracking-wide font-medium cursor-pointer shadow-2xs"
            >
              Dashboards
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onScrollToCertifications}
            className="px-5 py-1.5 rounded-full border border-[#4A7C9D] dark:border-sky-500/60 text-[#4A7C9D] dark:text-sky-300 hover:bg-[#4A7C9D] dark:hover:bg-sky-600 hover:text-white dark:hover:text-white transition-colors duration-200 text-xs tracking-wide font-medium cursor-pointer shadow-2xs"
          >
            Certifications
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

