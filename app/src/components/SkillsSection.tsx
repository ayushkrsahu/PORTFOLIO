import React, { useState } from 'react';
import { Database, LineChart, Search, Workflow, Server, Table, Sparkles, Cpu, CheckCircle2, Layers, GitCompareArrows, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SkillItem } from '../types';
import { TechIcon, getTechBrandInfo } from './TechIcon';

interface SkillsSectionProps {
  skills: SkillItem[];
}

interface PrimaryTechTool {
  name: string;
  category: 'Languages & Core' | 'Cloud & Warehouses' | 'Pipelines & Streaming' | 'BI & Analytics' | 'AI & Infra';
  description: string;
}

const PRIMARY_TECH_STACK: PrimaryTechTool[] = [
  { name: 'Python', category: 'Languages & Core', description: 'Pandas, PySpark, pyodbc, pyarrow' },
  { name: 'SQL (Advanced)', category: 'Languages & Core', description: 'T-SQL, Spark SQL, PostgreSQL, MySQL' },
  { name: 'AWS', category: 'Cloud & Warehouses', description: 'S3, Redshift, DMS, EC2, IAM' },
  { name: 'Microsoft Azure', category: 'Cloud & Warehouses', description: 'AZ-104, Synapse, Blob Storage' },
  { name: 'Databricks', category: 'Cloud & Warehouses', description: 'Delta Lake, Medallion Architecture, DLT' },
  { name: 'Snowflake', category: 'Cloud & Warehouses', description: 'Snowpipe, Time Travel, Micro-partitions' },
  { name: 'Apache Airflow', category: 'Pipelines & Streaming', description: 'DAG Orchestration, Retries, Idempotent Jobs' },
  { name: 'dbt', category: 'Pipelines & Streaming', description: 'Data Transformations, Star Schema, Testing' },
  { name: 'Apache Kafka', category: 'Pipelines & Streaming', description: 'Real-Time Event Streaming, Partitioning' },
  { name: 'PySpark', category: 'Pipelines & Streaming', description: 'Distributed Dataframes, Spark SQL' },
  { name: 'Power BI', category: 'BI & Analytics', description: 'DAX Measures, Power Query M, Star Schemas' },
  { name: 'Docker', category: 'AI & Infra', description: 'Containerization, Local Stack, Compose' },
  { name: 'Terraform', category: 'AI & Infra', description: 'Infrastructure as Code (IaC), AWS Modules' },
  { name: 'LangGraph & AI', category: 'AI & Infra', description: 'Azure OpenAI, RAG, FastAPI Agent Services' },
  { name: 'Git & GitHub', category: 'AI & Infra', description: 'CI/CD Pipelines, Version Control' }
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Stack');

  const categories = ['All Stack', 'Languages & Core', 'Cloud & Warehouses', 'Pipelines & Streaming', 'BI & Analytics', 'AI & Infra'];

  const filteredTechStack = activeCategory === 'All Stack'
    ? PRIMARY_TECH_STACK
    : PRIMARY_TECH_STACK.filter(item => item.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    const iconContainerStyle = "w-16 h-16 rounded-xl flex items-center justify-center border border-[#4A7C9D]/20 dark:border-sky-500/30 text-[#4A7C9D] dark:text-sky-300 bg-slate-50/50 dark:bg-slate-900/60 group-hover:bg-[#4A7C9D]/5 dark:group-hover:bg-sky-500/10 group-hover:border-[#4A7C9D]/40 dark:group-hover:border-sky-400/50 transition-all duration-300 shadow-2xs";
    
    switch (iconName) {
      case 'cleansing':
        return (
          <div className={iconContainerStyle}>
            <Database className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'visualization':
        return (
          <div className={iconContainerStyle}>
            <LineChart className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'exploration':
        return (
          <div className={iconContainerStyle}>
            <Search className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'pipeline':
        return (
          <div className={iconContainerStyle}>
            <Workflow className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'warehouse':
        return (
          <div className={iconContainerStyle}>
            <Server className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'ai':
        return (
          <div className={iconContainerStyle}>
            <Sparkles className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'infrastructure':
        return (
          <div className={iconContainerStyle}>
            <Cpu className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'security':
        return (
          <div className={iconContainerStyle}>
            <ShieldCheck className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'cdc':
        return (
          <div className={iconContainerStyle}>
            <GitCompareArrows className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
      case 'modeling':
      default:
        return (
          <div className={iconContainerStyle}>
            <Table className="w-8 h-8 stroke-[1.4]" />
          </div>
        );
    }
  };

  return (
    <section id="skills-section" className="w-full bg-white dark:bg-slate-950 py-16 px-6 sm:px-12 md:px-20 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-2xl sm:text-3xl text-[#3B6982] dark:text-sky-200 font-serif font-bold tracking-wide">
            Technical Skills & Technologies
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Full-stack data engineering, cloud warehousing, distributed processing, and business intelligence toolkit.
          </p>
          <div className="w-12 h-0.5 bg-[#4A7C9D]/30 dark:bg-sky-400/40 mx-auto rounded-full" />
        </motion.div>

        {/* --- GRAPHICAL TECH STACK GRID --- */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-serif">
                Technology Ecosystem
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click category filters to explore tools with graphical icons
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#3B6982] dark:bg-sky-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tech Cards with Graphical Icons */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTechStack.map((tech, idx) => {
                const brand = getTechBrandInfo(tech.name);
                return (
                  <motion.div
                    layout
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.25) }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-[#4A7C9D]/40 dark:hover:border-sky-500/50 transition-all duration-200 flex flex-col items-center text-center justify-between gap-3"
                  >
                    {/* Icon Container with subtle brand color tint */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-2xs ${brand.bgLight} ${brand.bgDark}`}>
                      <TechIcon name={tech.name} size={24} />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#3B6982] dark:group-hover:text-sky-300 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight font-medium">
                        {tech.description}
                      </p>
                    </div>

                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mt-auto">
                      {tech.category}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* --- 6 DOMAIN SKILL CATEGORY CARDS --- */}
        <div className="space-y-6 pt-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-serif text-[#3B6982] dark:text-sky-200 font-semibold">
              Core Technical Competencies
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any competency card below to view detailed breakdown
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            {skills.map((skill, sIdx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: sIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedSkill(skill)}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer border border-slate-100 dark:border-slate-800 hover:border-slate-200/80 dark:hover:border-slate-700 shadow-2xs hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-5">
                  {getSkillIcon(skill.iconName)}
                </div>

                {/* Skill Title */}
                <h4 className="text-lg font-serif font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#3B6982] dark:group-hover:text-sky-300 transition-colors">
                  {skill.title}
                </h4>

                {/* Short Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2.5 mb-4 leading-relaxed line-clamp-3">
                  {skill.shortDesc}
                </p>

                {/* Core Tools Badges Preview */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-auto pt-2">
                  {skill.tools.slice(0, 3).map((tool) => (
                    <span 
                      key={tool} 
                      className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                  {skill.tools.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950 text-[#3B6982] dark:text-sky-300 font-mono font-bold">
                      +{skill.tools.length - 3}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-bold text-[#4A7C9D] dark:text-sky-300 mt-4 group-hover:underline inline-flex items-center gap-1">
                  View Competency Details →
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* --- DETAIL MODAL FOR SKILL --- */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-50 dark:bg-sky-950 text-[#4A7C9D] dark:text-sky-300 rounded-xl">
                  {getSkillIcon(selectedSkill.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">
                    {selectedSkill.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Comprehensive Skill Profile & Overview
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSkill(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {selectedSkill.fullDesc || selectedSkill.shortDesc}
            </p>

            {/* Tools Used */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B6982] dark:text-sky-300">
                Associated Tools & Technologies ({selectedSkill.tools.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedSkill.tools.map((tool) => {
                  const brand = getTechBrandInfo(tool);
                  return (
                    <div
                      key={tool}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium border border-slate-200/70 dark:border-slate-700/70 ${brand.bgLight} ${brand.bgDark}`}
                    >
                      <TechIcon name={tool} className="text-base shrink-0" />
                      <span className="truncate">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-5 py-2 bg-[#3B6982] hover:bg-[#2A4B5E] text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

