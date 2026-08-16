import React from 'react';
import { DashboardItem } from '../types';
import {
  LineChart,
  ExternalLink,
  Linkedin,
  CheckCircle2,
  BarChart3,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardsSectionProps {
  dashboards: DashboardItem[];
}

export const DashboardsSection: React.FC<DashboardsSectionProps> = ({ dashboards }) => {
  const mainEmbedUrl =
    'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9';

  return (
    <section
      id="dashboards-section"
      className="w-full bg-slate-50/60 dark:bg-slate-950 py-20 px-6 sm:px-12 md:px-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2.5 border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full">
            <BarChart3 className="w-3.5 h-3.5" /> Power BI &amp; Business Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-800 dark:text-slate-100">
            Power BI Dashboards
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            A live embedded report you can explore in place, plus four published analytics
            suites with direct links and the write-ups that go with them.
          </p>
        </motion.div>

        {/* Featured live Power BI embed */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#0078D4] text-white text-[11px] font-bold uppercase tracking-wider font-mono">
                  Featured Live Power BI Dashboard
                </span>
                <span className="text-xs text-slate-400 font-mono">Direct Embed · Cloud Service</span>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Live &amp; Operational
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white flex items-center gap-2">
                <LineChart className="w-5 h-5 text-sky-400" />
                Featured Power BI Report
              </h3>
              <p className="text-xs text-slate-400 max-w-3xl">
                Published from the Power BI service and embedded here. Explore the report
                directly in the frame below, or open it full screen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={mainEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0078D4] hover:bg-[#006cbd] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Open Full Power BI Window</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/80">
            <div className="aspect-video w-full relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
              <iframe
                title="Featured Power BI Dashboard"
                src={mainEmbedUrl}
                allowFullScreen={true}
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Published dashboards grid */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white font-bold">
                More Live Analytics Links
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Direct access to live Power BI dashboards and the matching LinkedIn case studies.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              4 Dashboards · Live Links &amp; Posts
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboards.map((dash, index) => (
              <motion.div
                key={dash.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                      Dashboard 0{index + 1}
                    </span>

                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full text-blue-500 group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-bold text-xl text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {dash.title}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {dash.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {dash.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-200 dark:border-slate-700 shadow-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={dash.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 group/live cursor-pointer"
                  >
                    <LineChart className="w-4 h-4" />
                    <span>Live Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/live:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={dash.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 px-4 rounded-xl text-sm font-bold transition-all border border-slate-200 dark:border-slate-700 shadow-xs active:scale-95 group/btn cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/btn:scale-110 transition-transform" />
                    <span>LinkedIn Post</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
