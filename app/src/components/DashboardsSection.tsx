import React, { useState } from 'react';
import { DashboardItem } from '../types';
import { 
  LineChart, 
  ExternalLink, 
  Linkedin, 
  Layout, 
  ShieldCheck, 
  Activity, 
  Filter, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Globe2, 
  Layers, 
  Code2, 
  Maximize2, 
  RefreshCw, 
  CheckCircle2, 
  BarChart3, 
  PieChart, 
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  Database,
  Truck,
  HeartPulse,
  Briefcase,
  Sliders
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DashboardsSectionProps {
  dashboards: DashboardItem[];
}

export const DashboardsSection: React.FC<DashboardsSectionProps> = ({ dashboards }) => {
  const [viewMode, setViewMode] = useState<'embed' | 'interactive'>('embed');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'NA' | 'EMEA' | 'APAC' | 'LATAM'>('All');
  const [selectedSegment, setSelectedSegment] = useState<'All' | 'Enterprise' | 'Mid-Market' | 'ScaleUp'>('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'YTD' | 'T12M' | 'Q3' | 'MOM'>('YTD');
  const [showDaxCode, setShowDaxCode] = useState<boolean>(false);
  const [activeDashboardIndex, setActiveDashboardIndex] = useState<number>(0);

  // Region and Segment multipliers for live simulated interactive preview
  const regionMultiplier: Record<string, number> = {
    All: 1.0,
    NA: 0.46,
    EMEA: 0.32,
    APAC: 0.16,
    LATAM: 0.06
  };

  const segmentMultiplier: Record<string, number> = {
    All: 1.0,
    Enterprise: 0.58,
    'Mid-Market': 0.28,
    ScaleUp: 0.14
  };

  const currentMultiplier = regionMultiplier[selectedRegion] * segmentMultiplier[selectedSegment];

  // Specific tailored data configurations for all 4 dashboards
  const dashboardConfigs = [
    {
      id: 'dash-1',
      badge: 'Business Intelligence / Power BI Dashboard',
      icon: DollarSign,
      kpis: [
        { label: 'Annual Run-Rate (ARR)', value: `$${(14.82 * currentMultiplier).toFixed(2)}M`, sub: '+28.4% YoY', positive: true },
        { label: 'Net Revenue Retention', value: selectedSegment === 'Enterprise' ? '124.5%' : '118.2%', sub: 'Top Decile (>115%)', positive: true },
        { label: 'Average Deal Size (ACV)', value: selectedSegment === 'Enterprise' ? '$142.0k' : '$84.5k', sub: 'Win Rate: 34.8%', positive: true },
        { label: 'Active Enterprise Accounts', value: `${Math.round(184 * currentMultiplier)} Hubs`, sub: 'Gross Margin: 74.6%', positive: true }
      ],
      chartTitle: 'Monthly Business Revenue Trajectory vs Quota',
      trendData: [
        { month: 'Jan', val: 0.92 * currentMultiplier * 10, target: 0.85 * currentMultiplier * 10 },
        { month: 'Feb', val: 1.05 * currentMultiplier * 10, target: 0.95 * currentMultiplier * 10 },
        { month: 'Mar', val: 1.18 * currentMultiplier * 10, target: 1.05 * currentMultiplier * 10 },
        { month: 'Apr', val: 1.12 * currentMultiplier * 10, target: 1.10 * currentMultiplier * 10 },
        { month: 'May', val: 1.28 * currentMultiplier * 10, target: 1.18 * currentMultiplier * 10 },
        { month: 'Jun', val: 1.39 * currentMultiplier * 10, target: 1.25 * currentMultiplier * 10 },
        { month: 'Jul', val: 1.45 * currentMultiplier * 10, target: 1.32 * currentMultiplier * 10 },
        { month: 'Aug', val: 1.54 * currentMultiplier * 10, target: 1.40 * currentMultiplier * 10 }
      ],
      breakdownTitle: 'Revenue Mix by Business Intelligence Division',
      breakdown: [
        { name: 'Enterprise Analytics Platform', share: 44, amount: `$${(14.82 * currentMultiplier * 0.44).toFixed(2)}M`, color: 'bg-[#0078D4]' },
        { name: 'Automated Reporting Pipelines', share: 28, amount: `$${(14.82 * currentMultiplier * 0.28).toFixed(2)}M`, color: 'bg-emerald-500' },
        { name: 'ETL & SQL Data Marts', share: 18, amount: `$${(14.82 * currentMultiplier * 0.18).toFixed(2)}M`, color: 'bg-purple-500' },
        { name: 'Managed Power BI Governance', share: 10, amount: `$${(14.82 * currentMultiplier * 0.10).toFixed(2)}M`, color: 'bg-amber-500' }
      ],
      tableTitle: 'Strategic Enterprise BI Accounts',
      tableHeaders: ['Account Entity', 'Territory', 'Contract ARR', 'Health Score', 'Status'],
      tableRows: [
        ['Global Logistics Hub AG', selectedRegion === 'All' ? 'EMEA' : selectedRegion, '$480k', '98%', 'Renewed (Multi-Year)'],
        ['Apex FinTech Technologies', selectedRegion === 'All' ? 'NA' : selectedRegion, '$390k', '94%', 'Expansion (+35%)'],
        ['Nordic Health Systems', selectedRegion === 'All' ? 'EMEA' : selectedRegion, '$320k', '91%', 'On-Track'],
        ['Pacific Cloud Retail Corp', selectedRegion === 'All' ? 'APAC' : selectedRegion, '$240k', '89%', 'Q3 Upsell Stage']
      ],
      dax: [
        { name: 'Total Revenue YTD', code: 'CALCULATE(SUM(FactSales[RevenueAmount]), DATESYTD(DimDate[DateKey]), FILTER(DimCustomer, DimCustomer[Status] = "Active"))' },
        { name: 'NRR Rate %', code: 'DIVIDE([Starting ARR] + [Expansion ARR] - [Churn ARR], [Starting ARR], 0)' }
      ]
    },
    {
      id: 'dash-2',
      badge: 'Sales Dashboard',
      icon: TrendingUp,
      kpis: [
        { label: 'Total Sales Pipeline', value: `$${(8.45 * currentMultiplier).toFixed(2)}M`, sub: '+31.5% YoY', positive: true },
        { label: 'Sales Conversion Rate', value: `${(24.8 * (0.9 + 0.1 * currentMultiplier)).toFixed(1)}%`, sub: '+4.2% vs Benchmark', positive: true },
        { label: 'Average Deal Velocity', value: '18 Days', sub: '-5 days cycle time', positive: true },
        { label: 'Closed Won Quota', value: '112.4%', sub: 'Exceeded Target', positive: true }
      ],
      chartTitle: 'Monthly Sales Revenue Run-Rate vs Operating Plan',
      trendData: [
        { month: 'Jan', val: 78 * currentMultiplier, target: 70 * currentMultiplier },
        { month: 'Feb', val: 84 * currentMultiplier, target: 75 * currentMultiplier },
        { month: 'Mar', val: 95 * currentMultiplier, target: 82 * currentMultiplier },
        { month: 'Apr', val: 92 * currentMultiplier, target: 88 * currentMultiplier },
        { month: 'May', val: 104 * currentMultiplier, target: 92 * currentMultiplier },
        { month: 'Jun', val: 118 * currentMultiplier, target: 98 * currentMultiplier },
        { month: 'Jul', val: 122 * currentMultiplier, target: 105 * currentMultiplier },
        { month: 'Aug', val: 135 * currentMultiplier, target: 110 * currentMultiplier }
      ],
      breakdownTitle: 'Sales Revenue by Product Category',
      breakdown: [
        { name: 'Enterprise Cloud Suite', share: 48, amount: '48% ($4.05M)', color: 'bg-[#0078D4]' },
        { name: 'Data Pipeline Add-ons', share: 26, amount: '26% ($2.20M)', color: 'bg-emerald-500' },
        { name: 'Professional Services', share: 16, amount: '16% ($1.35M)', color: 'bg-purple-500' },
        { name: 'Custom Connectors', share: 10, amount: '10% ($0.85M)', color: 'bg-amber-500' }
      ],
      tableTitle: 'Top Regional Sales Performance',
      tableHeaders: ['Sales Territory', 'Lead Executive', 'Quarterly Revenue', 'Quota %', 'Pipeline Status'],
      tableRows: [
        ['North America (East)', 'Sarah Jenkins', '$2.45M', '118%', 'Quota Achieved'],
        ['EMEA Central Hub', 'Marcus Vance', '$1.92M', '109%', 'Expansion Stage'],
        ['Asia Pacific South', 'Elena Rostova', '$1.48M', '104%', 'On Target'],
        ['Latin America Direct', 'Carlos Mendoza', '$850k', '96%', 'Pipeline Accelerating']
      ],
      dax: [
        { name: 'Sales Pipeline Win Rate', code: 'DIVIDE(CALCULATE(COUNTROWS(FactOpportunities), FactOpportunities[Stage] = "Closed Won"), COUNTROWS(FactOpportunities), 0)' },
        { name: 'Sales Growth QoQ %', code: 'VAR _PrevQ = CALCULATE([Total Sales], DATEADD(DimDate[DateKey], -1, QUARTER)) RETURN DIVIDE([Total Sales] - _PrevQ, _PrevQ, 0)' }
      ]
    },
    {
      id: 'dash-3',
      badge: 'Insurance Analysis Dashboard',
      icon: ShieldCheck,
      kpis: [
        { label: 'Loss Ratio (Combined)', value: '64.2%', sub: 'Target < 70% (Healthy)', positive: true },
        { label: 'Gross Written Premium', value: `$${(28.6 * currentMultiplier).toFixed(1)}M`, sub: '+18.4% YoY Growth', positive: true },
        { label: 'Claim Processing Time', value: '4.8 Days', sub: '-2.4 days faster', positive: true },
        { label: 'Policy Renewal Rate', value: '92.6%', sub: 'Top Quartile Retention', positive: true }
      ],
      chartTitle: 'Monthly Underwriting Premium Inflow vs Paid Claims',
      trendData: [
        { month: 'Jan', val: 2.1 * currentMultiplier * 10, target: 1.4 * currentMultiplier * 10 },
        { month: 'Feb', val: 2.3 * currentMultiplier * 10, target: 1.5 * currentMultiplier * 10 },
        { month: 'Mar', val: 2.6 * currentMultiplier * 10, target: 1.6 * currentMultiplier * 10 },
        { month: 'Apr', val: 2.5 * currentMultiplier * 10, target: 1.5 * currentMultiplier * 10 },
        { month: 'May', val: 2.8 * currentMultiplier * 10, target: 1.7 * currentMultiplier * 10 },
        { month: 'Jun', val: 3.1 * currentMultiplier * 10, target: 1.9 * currentMultiplier * 10 },
        { month: 'Jul', val: 3.2 * currentMultiplier * 10, target: 2.0 * currentMultiplier * 10 },
        { month: 'Aug', val: 3.5 * currentMultiplier * 10, target: 2.1 * currentMultiplier * 10 }
      ],
      breakdownTitle: 'Premium Distribution by Insurance Class',
      breakdown: [
        { name: 'Commercial Property & Casualty', share: 42, amount: `$${(28.6 * currentMultiplier * 0.42).toFixed(1)}M`, color: 'bg-indigo-600' },
        { name: 'Corporate Health & Benefits', share: 30, amount: `$${(28.6 * currentMultiplier * 0.30).toFixed(1)}M`, color: 'bg-emerald-500' },
        { name: 'Marine & Cargo Liability', share: 18, amount: `$${(28.6 * currentMultiplier * 0.18).toFixed(1)}M`, color: 'bg-sky-500' },
        { name: 'Cyber Risk Protection', share: 10, amount: `$${(28.6 * currentMultiplier * 0.10).toFixed(1)}M`, color: 'bg-amber-500' }
      ],
      tableTitle: 'Actuarial Underwriting & Claim Portfolio',
      tableHeaders: ['Policy Product Line', 'Active Policies', 'Total GWP', 'Loss Ratio', 'Risk Rating'],
      tableRows: [
        ['Commercial Enterprise P&C', '1,420 Policies', '$12.0M', '61.4%', 'Low Risk / Stable'],
        ['Group Medical & Dental', '890 Policies', '$8.6M', '68.2%', 'Moderate Risk'],
        ['Global Marine Transit', '450 Policies', '$5.1M', '58.0%', 'Optimal Profitability'],
        ['Cyber Threat Protection', '310 Policies', '$2.9M', '52.4%', 'High Margin Growth']
      ],
      dax: [
        { name: 'Loss Ratio %', code: 'DIVIDE([Total Incurred Claims], [Earned Premium], 0)' },
        { name: 'Policy Renewal Rate', code: 'DIVIDE(CALCULATE(COUNTROWS(FactPolicy), FactPolicy[Status] = "Renewed"), COUNTROWS(FactPolicy), 0)' }
      ]
    },
    {
      id: 'dash-4',
      badge: 'Healthcare Innovation Dashboard',
      icon: HeartPulse,
      kpis: [
        { label: 'Acute Bed Occupancy', value: '82.4%', sub: 'Within 85% Safe Ceiling', positive: true },
        { label: 'ER Door-to-Doctor', value: '18.5 Min', sub: '-6.2 min vs Baseline', positive: true },
        { label: 'Avg Length of Stay (ALOS)', value: '3.8 Days', sub: 'Target: < 4.0 Days', positive: true },
        { label: 'Clinical Staffing Efficiency', value: '96.8%', sub: 'Zero Nurse Shortages', positive: true }
      ],
      chartTitle: 'Emergency Room Triage Arrival Volume vs Treatment Discharge',
      trendData: [
        { month: '00:00', val: 42, target: 45 },
        { month: '04:00', val: 28, target: 30 },
        { month: '08:00', val: 86, target: 80 },
        { month: '12:00', val: 112, target: 100 },
        { month: '16:00', val: 98, target: 95 },
        { month: '20:00', val: 74, target: 70 },
        { month: '22:00', val: 56, target: 55 },
        { month: '23:59', val: 48, target: 45 }
      ],
      breakdownTitle: 'Hospital Department Bed Allocation',
      breakdown: [
        { name: 'Cardiology & Intensive Care (ICU)', share: 35, amount: '140 Beds', color: 'bg-rose-500' },
        { name: 'General Medicine & Post-Op', share: 30, amount: '120 Beds', color: 'bg-[#0078D4]' },
        { name: 'Orthopedic & Surgical Ward', share: 22, amount: '88 Beds', color: 'bg-emerald-500' },
        { name: 'Pediatric Care Unit', share: 13, amount: '52 Beds', color: 'bg-amber-500' }
      ],
      tableTitle: 'Departmental Clinical Flow & Occupancy Census',
      tableHeaders: ['Clinical Unit', 'Active Census', 'Available Beds', 'Avg Stay', 'Triage Status'],
      tableRows: [
        ['Emergency Medicine & Trauma', '48 Patients', '12 Free', '4.2 hrs', 'Level 1 Ready'],
        ['Cardiology Intensive Care', '32 Patients', '4 Free', '2.8 days', 'Near Capacity'],
        ['Neurology & Acute Stroke', '24 Patients', '8 Free', '3.4 days', 'Stable Flow'],
        ['Pediatric Acute Care', '18 Patients', '14 Free', '2.1 days', 'Fully Staffed']
      ],
      dax: [
        { name: 'Occupancy Rate %', code: 'DIVIDE(COUNTROWS(FILTER(FactBedCensus, FactBedCensus[Status] = "Occupied")), COUNTROWS(FactBedCensus), 0)' },
        { name: 'Average Length of Stay (ALOS)', code: 'AVERAGE(FactDischarge[TotalDaysStayed])' }
      ]
    }
  ];

  const activeConfig = dashboardConfigs[activeDashboardIndex] || dashboardConfigs[0];
  const activeDash = dashboards[activeDashboardIndex] || dashboards[0];
  const mainEmbedUrl = "https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9";

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
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A7C9D] dark:text-sky-300 bg-[#4A7C9D]/10 dark:bg-sky-500/10 px-3 py-1 rounded-full">
              <BarChart3 className="w-3.5 h-3.5" /> Power BI &amp; Business Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-800 dark:text-slate-100">
              Interactive Power BI Dashboards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              Featured live interactive Business Intelligence reporting tool built with Power BI, accompanied by 4 production analytics suites with direct live links.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('embed')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'embed'
                  ? 'bg-[#0078D4] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Live Power BI Service</span>
            </button>
            
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-[#3B6982] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Slicers &amp; DAX</span>
            </button>
          </div>
        </motion.div>

        {/* 1. FEATURED LIVE INTERACTIVE POWER BI DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
        >
          {/* Top Control Bar */}
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
                Featured Interactive Power BI Reporting Tool
              </h3>
              <p className="text-xs text-slate-400 max-w-3xl">
                Fully interactive Business Intelligence reporting tool built with Power BI. Filter and explore metrics directly in the live embed or inspect DAX queries below.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowDaxCode(!showDaxCode)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  showDaxCode
                    ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{showDaxCode ? 'Hide DAX Logic' : 'View DAX Formulas'}</span>
              </button>

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

          {/* DAX Code Inspection Drawer */}
          {showDaxCode && (
            <div className="p-5 bg-slate-950 text-slate-200 border-b border-slate-800 space-y-4 animate-in slide-in-from-top-3 duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                    Production DAX Measures for {activeDash.title}
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Tabular Object Model (TOM)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeConfig.dax.map((dax, i) => (
                  <div key={i} className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-sky-400 font-mono flex items-center justify-between">
                      <span>{dax.name}</span>
                    </div>
                    <pre className="text-[11px] font-mono text-slate-300 overflow-x-auto p-2.5 bg-slate-950/80 rounded-lg whitespace-pre-wrap leading-relaxed">
                      {dax.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 1: Direct Live Power BI Embed (Default) */}
          {viewMode === 'embed' ? (
            <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/80">
              <div className="aspect-video w-full relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
                <iframe 
                  title="Main Power BI Dashboard" 
                  src={mainEmbedUrl} 
                  allowFullScreen={true} 
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            /* VIEW 2: Interactive Slicers & Dynamic Telemetry Canvas */
            <div>
              {/* Slicer / Interactive Filter Toolbar */}
              <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                {/* Region Slicer */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#3B6982] dark:text-sky-400" /> Slicer:
                  </span>
                  {(['All', 'NA', 'EMEA', 'APAC', 'LATAM'] as const).map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegion(reg)}
                      className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all cursor-pointer ${
                        selectedRegion === reg
                          ? 'bg-[#3B6982] text-white shadow-2xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {reg === 'All' ? 'Global (All)' : reg}
                    </button>
                  ))}
                </div>

                {/* Segment Slicer */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#3B6982] dark:text-sky-400" /> Tier:
                  </span>
                  {(['All', 'Enterprise', 'Mid-Market', 'ScaleUp'] as const).map((seg) => (
                    <button
                      key={seg}
                      onClick={() => setSelectedSegment(seg)}
                      className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all cursor-pointer ${
                        selectedSegment === seg
                          ? 'bg-[#3B6982] text-white shadow-2xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {seg}
                    </button>
                  ))}
                </div>

                {/* Timeframe Slicer */}
                <div className="flex items-center gap-1.5">
                  {(['YTD', 'T12M', 'Q3', 'MOM'] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all cursor-pointer ${
                        selectedTimeframe === tf
                          ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-bold'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Slicer Canvas */}
              <div className="p-6 sm:p-8 space-y-8 bg-white dark:bg-slate-900/60">
                {/* KPI Cards Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {activeConfig.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-2">
                      <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        {kpi.label}
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                        {kpi.value}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{kpi.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Chart */}
                  <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {activeConfig.chartTitle}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Actuals (Bar) vs Target Quota (Dotted Line)
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-semibold">
                          <span className="w-3 h-3 rounded-xs bg-[#0078D4]"></span> Actuals
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <span className="w-3 h-0.5 bg-amber-500"></span> Target
                        </span>
                      </div>
                    </div>

                    <div className="h-52 flex items-end justify-between gap-2 sm:gap-4 pt-6 pb-2 border-b border-slate-200 dark:border-slate-700">
                      {activeConfig.trendData.map((d, i) => {
                        const maxVal = Math.max(...activeConfig.trendData.map(item => Math.max(item.val, item.target))) * 1.15;
                        const heightPercent = Math.min(100, (d.val / maxVal) * 100);
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                            <div className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                              {d.val.toFixed(1)}
                            </div>
                            <div className="w-full relative flex items-end justify-center">
                              <div 
                                style={{ height: `${heightPercent}%` }} 
                                className="w-full max-w-[32px] bg-gradient-to-t from-[#005a9e] to-[#0078D4] dark:to-sky-400 rounded-t-lg transition-all duration-300 group-hover:brightness-110 shadow-xs"
                              />
                            </div>
                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              {d.month}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Chart */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {activeConfig.breakdownTitle}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">Composition</span>
                    </div>

                    <div className="space-y-3.5 pt-2">
                      {activeConfig.breakdown.map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {item.name}
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white">
                              {item.amount} ({item.share}%)
                            </span>
                          </div>

                          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${item.share}%` }}
                              className={`h-full ${item.color} rounded-full transition-all duration-500`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 2. THE 4 LIVE ANALYTICS DASHBOARDS GRID */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white font-bold">
                More Live Analytics Links
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Direct access to live Power BI dashboards and detailed LinkedIn architecture case studies.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              4 Dashboards · Live Links &amp; Posts
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboards.map((dash, index) => {
              const isActive = index === activeDashboardIndex;
              return (
                <motion.div
                  key={dash.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setActiveDashboardIndex(index);
                    setViewMode('interactive');
                    const elem = document.getElementById('dashboards-section');
                    if (elem) {
                      elem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isActive 
                      ? 'border-[#0078D4] dark:border-sky-500 ring-2 ring-[#0078D4]/20 dark:ring-sky-500/20' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isActive 
                          ? 'bg-[#0078D4] text-white shadow-2xs' 
                          : 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50'
                      }`}>
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

                  {/* All 5 Link connections matching user's original site */}
                  <div className="flex gap-4 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800" onClick={(e) => e.stopPropagation()}>
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
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
