import { UserProfile, Experience, Education, Certification, Project, DashboardItem, SkillItem } from '../types';

export const initialProfile: UserProfile = {
  name: 'Ayush Kumar Sahu',
  role: 'Agentic AI Systems Engineer & Enterprise Data Architect',
  location: 'London, UK',
  bio: 'Forward-thinking Data & AI Systems Engineer with 2+ years of enterprise experience across modern Cloud Data Warehouses, Distributed ETL/ELT Architectures, and Autonomous Agentic AI Workflows. Experienced in architecting production Databricks & Azure Data Factory pipelines, designing high-throughput Lakehouse solutions, and deploying enterprise-grade AI applications with LLMs, RAG, and multi-agent coordination frameworks.',
  tagline: 'MSc AI (Queen Mary University of London) · Ex-Grow Data Skills · Cloud & Lakehouse Architect',
  linkedinUrl: 'https://linkedin.com/in/ayush-kumar-sahu-dataengineer',
  githubUrl: 'https://github.com/Ayushsahu99',
  email: 'ayushkusahu@gmail.com',
  pswVisaInfo: 'Authorized to work in the UK (Graduate Visa / PSW valid until 2027)'
};

export const skillsData: SkillItem[] = [
  {
    id: 'skill-1',
    title: 'Data Cleansing & Preprocessing',
    shortDesc: 'Automated data validation, deduplication, schema-drift enforcement, and missing-value imputation across multi-terabyte datasets.',
    fullDesc: 'Expertise in building scalable preprocessing pipelines using PySpark and Pandas. Handles messy transactional feeds, detects schema mutations, and prepares pristine bronze-to-silver staging layers.',
    iconName: 'cleansing',
    tools: ['PySpark', 'Pandas', 'dbt', 'SQL', 'Delta Lake']
  },
  {
    id: 'skill-2',
    title: 'Data Visualization & BI Storytelling',
    shortDesc: 'Interactive enterprise executive dashboards, dynamic DAX modeling, KPI heatmaps, and automated drill-down visual analytics.',
    fullDesc: 'Specialized in Power BI, Tableau, and custom web analytics. Designing star-schema semantic layers with complex DAX measures, time-intelligence calculations, and live scheduled gateway refreshes.',
    iconName: 'visualization',
    tools: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Excel VBA']
  },
  {
    id: 'skill-3',
    title: 'Exploratory Data Analysis (EDA)',
    shortDesc: 'Statistical profiling, hypothesis testing, anomaly detection, and correlation analysis to extract actionable business insights.',
    fullDesc: 'Conducting in-depth multivariate statistical analysis to discover hidden patterns, segment user cohorts, evaluate distribution skews, and validate assumptions prior to ML model training.',
    iconName: 'exploration',
    tools: ['Python', 'Seaborn', 'NumPy', 'Scipy', 'Jupyter']
  },
  {
    id: 'skill-4',
    title: 'End-to-End Pipeline Automation',
    shortDesc: 'Orchestrating robust batch & streaming ETL workflows with parameterized triggers, alerting, and idempotency guarantees.',
    fullDesc: 'Constructing production data pipelines using Azure Data Factory and Apache Airflow. Implementing automated retry mechanisms, dependency DAGs, and monitoring dashboards with 99.8%+ uptime.',
    iconName: 'pipeline',
    tools: ['Azure Data Factory', 'Airflow', 'Bash', 'Docker', 'REST APIs']
  },
  {
    id: 'skill-5',
    title: 'Modern Cloud Data Warehousing',
    shortDesc: 'Architecting Medallion Lakehouses, dimensional data marts, and serverless compute clusters on Azure and AWS.',
    fullDesc: 'Deep experience designing Star and Snowflake schemas, optimizing Delta Lake ACID transactions with Z-Ordering, partitioning large datasets, and managing cloud storage tiering in ADLS Gen2 & S3.',
    iconName: 'warehouse',
    tools: ['Azure Databricks', 'Delta Lake', 'Snowflake', 'AWS S3', 'ADLS Gen2']
  },
  {
    id: 'skill-6',
    title: 'Relational & Dimensional Modeling',
    shortDesc: 'Designing normalized 3NF schemas, Kimball dimensional star schemas, surrogate keys, and slowly changing dimensions (SCD Types 1, 2).',
    fullDesc: 'Architecting scalable schemas for transactional systems and analytical marts. Writing advanced SQL queries with recursive CTEs, window analytical functions, and stored procedures with performance indexing.',
    iconName: 'modeling',
    tools: ['PostgreSQL', 'SQL Server', 'MySQL', 'Kimball Methodology']
  },
  {
    id: 'skill-7',
    title: 'Agentic AI & LLM Systems',
    shortDesc: 'Building multi-agent autonomous workflows, hybrid RAG pipelines, and LLM-powered data extractors.',
    fullDesc: 'Developing production GenAI applications with LangChain, LangGraph, and vector databases. Deploying RAG architectures with hybrid dense/sparse search, reranking models, and prompt safety guardrails.',
    iconName: 'ai',
    tools: ['LangGraph', 'LangChain', 'FastAPI', 'ChromaDB', 'Claude API']
  },
  {
    id: 'skill-8',
    title: 'Cloud Infrastructure & DevOps',
    shortDesc: 'Managing containerized environments, Linux system administration, CI/CD deployment, and secure cloud networking.',
    fullDesc: 'Configuring Red Hat Enterprise Linux servers, writing automation shell scripts, containerizing microservices via Docker, and maintaining CI/CD pipelines on GitHub Actions.',
    iconName: 'infrastructure',
    tools: ['Docker', 'RHEL / Linux', 'Git', 'GitHub Actions', 'Terraform']
  }
];

export const experienceData: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'ByteIQ Analytics',
    location: 'Remote, United Kingdom',
    period: 'Jan 2026 – Present',
    summary:
      "Building the ingestion layer for a global US relocation services company's SQL Server to AWS warehouse migration — CDC, orchestration, dimensional modelling and platform documentation, owned end to end.",
    metrics: [
      { label: 'Tables merged', value: '24' },
      { label: 'Rows unified', value: '53,860' },
      { label: 'dbt models', value: '18' },
      { label: 'Airflow DAGs', value: '2' }
    ],
    highlights: [
      {
        area: 'Architecture & Ingestion',
        points: [
          'Designed and built the ingestion layer for the migration across operational and reporting sources, helping shape the target architecture and proposing Airflow for orchestration.',
          'Engineered a CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet — delivered with a least-privilege reader, runbook and security report.',
          'Developed a Python CDC extractor with pyodbc and pyarrow that reads SQL Server change tables by LSN range via fn_cdc_get_all_changes, writing Parquet in the AWS DMS S3 folder layout.'
        ]
      },
      {
        area: 'Orchestration & Data Quality',
        points: [
          'Created a config-driven extraction framework where a YAML manifest maps each table to one of four strategies — rowversion, datetime, identity and snapshot hash — with per-table control state for resumable loads.',
          'Automated loading with Apache Airflow across two DAGs and seven tasks, using an idempotent file-level control table and validation that fails the run on any row-count mismatch between staging and the control log.'
        ]
      },
      {
        area: 'Modelling & Documentation',
        points: [
          'Merged two disjoint source systems (53,860 rows across 24 tables) into a unified SQL Server warehouse with 18 dbt models, recommending hash-based surrogate keys after analysis showed no shared keys.',
          "Reverse-engineered the client's legacy warehouse — mapping its hub-centred star schema of 30 dimensions, 27 fact tables and 95 stored procedures — and authored a 20-section platform reference plus onboarding guide."
        ]
      }
    ],
    description: [
      "Designed and built the ingestion layer for a global US relocation services company's SQL Server to AWS warehouse migration, helping shape the target architecture and proposing Airflow for orchestration.",
      'Engineered a CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet, delivered with a least-privilege reader, runbook and security report.',
      'Developed a Python CDC extractor with pyodbc and pyarrow that reads SQL Server change tables by LSN range via fn_cdc_get_all_changes, writing Parquet in the AWS DMS S3 folder layout.',
      'Created a config-driven extraction framework where a YAML manifest maps each table to one of four strategies (rowversion, datetime, identity and snapshot hash), with per-table control state for resumable loads.',
      'Automated loading with Apache Airflow across two DAGs and seven tasks, using an idempotent file-level control table and validation that fails the run on any row-count mismatch between staging and the control log.',
      'Merged two disjoint source systems (53,860 rows across 24 tables) into a unified SQL Server warehouse with 18 dbt models, recommending hash-based surrogate keys after analysis showed no shared keys.',
      "Reverse-engineered the client's legacy warehouse, mapping its hub-centred star schema (30 dimensions, 27 fact tables, 95 stored procedures), and authored a 20-section platform reference plus onboarding guide."
    ],
    technologies: [
      'AWS DMS',
      'Amazon S3',
      'Microsoft SQL Server',
      'Apache Airflow',
      'dbt',
      'Python',
      'pyodbc',
      'pyarrow',
      'Parquet',
      'T-SQL',
      'YAML',
      'AWS IAM'
    ]
  },
  {
    role: 'Data Engineer',
    company: 'EVE Healthcare',
    location: 'Gurugram, India',
    period: 'Jan 2023 – Aug 2024',
    summary:
      'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace, spanning 3 cities and 25+ diagnostic tests across partner centres.',
    metrics: [
      { label: 'Cities served', value: '3' },
      { label: 'Diagnostic tests', value: '25+' },
      { label: 'Service categories', value: '7' },
      { label: 'Advertised savings', value: 'up to 50%' }
    ],
    highlights: [
      {
        area: 'Pipelines & Orchestration',
        points: [
          'Built Python and SQL ETL/ELT that standardises test catalogues, pricing and slot availability from partner diagnostic centres.',
          'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.'
        ]
      },
      {
        area: 'Modelling & Platform',
        points: [
          'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories — MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology — and 3 empanelment types (CGHS, ECHS and corporate).',
          'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.'
        ]
      },
      {
        area: 'Data Quality & Product Impact',
        points: [
          'Implemented data-quality and validation checks behind a price-comparison experience advertising savings of up to 50%, supporting search, near-me discovery and same-day report delivery.'
        ]
      }
    ],
    description: [
      'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL/ELT that standardises test catalogues, pricing and slot availability from partner centres.',
      'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories (MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology) and 3 empanelment types (CGHS, ECHS and corporate).',
      'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.',
      'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.',
      'Implemented data-quality and validation checks behind a price-comparison experience advertising savings of up to 50%, supporting search, near-me discovery and same-day report delivery.'
    ],
    technologies: [
      'Python',
      'SQL',
      'Apache Airflow',
      'Amazon S3',
      'Amazon Redshift',
      'PostgreSQL',
      'ETL / ELT',
      'Dimensional Modelling',
      'Data Quality'
    ]
  }
];

export const educationData: Education[] = [
  {
    institution: 'Queen Mary University of London',
    degree: 'MSc Big Data Science',
    grade: 'Distinction',
    period: 'Sep 2024 – Sep 2025'
  },
  {
    institution: 'SRM IST Chennai',
    degree: 'B.Tech Electronics & Communication',
    period: '2019 – 2023'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'oracle-agentic-ai',
    name: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Issued Aug 2026',
    expires: 'Aug 2028',
    category: 'ai',
    skills: ['Artificial Intelligence (AI)', 'Agentic AI', 'Autonomous AI Agents', 'LLM Workflows', 'Oracle Cloud AI'],
    badgeType: 'oracle',
    isFeatured: true,
    verificationUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CDD5470068DC422802E7A0BAEE38247DAF50629334A3AA7C641C5A3248B45731'
  },
  {
    id: 'azure-az-104',
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    date: 'Issued 2025',
    category: 'cloud',
    skills: ['Azure Cloud', 'Virtual Networks', 'Azure IAM', 'Azure Storage', 'Compute Management'],
    badgeType: 'azure',
    isFeatured: true,
    verificationUrl: 'https://learn.microsoft.com/en-us/users/ayushsahu-7373/credentials/2f999e497950c43b?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
  {
    id: 'azure-data-eng-gds',
    name: 'Azure Data Engineering (ADF, Databricks & Synapse)',
    issuer: 'Grow Data Skills',
    date: 'Issued 2024',
    category: 'data-engineering',
    skills: ['Azure Data Factory', 'Databricks', 'Azure Synapse', 'Delta Lake', 'ETL Pipelines'],
    badgeType: 'azure',
    isFeatured: true,
    verificationUrl: 'https://drive.google.com/file/d/17ZDGFcVtkytKONWgSIOOtUKL0ZCDBDKV/view'
  },
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: 'Issued 2024',
    category: 'analytics',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Cleaning', 'Spreadsheets'],
    badgeType: 'google',
    isFeatured: true,
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/PR9LR143TLNO'
  },
  {
    id: 'datacamp-sql-assoc',
    name: 'SQL Associate Certification',
    issuer: 'DataCamp',
    date: 'Issued 2024',
    category: 'data-engineering',
    skills: ['PostgreSQL', 'Complex Queries', 'Aggregations', 'Window Functions', 'Relational Schema'],
    badgeType: 'datacamp',
    isFeatured: true,
    verificationUrl: 'https://www.datacamp.com/certificate/SQA0012258581958'
  },
  {
    id: 'codebasics-power-bi',
    name: 'Power BI Data Analytics Virtual Internship',
    issuer: 'Codebasics',
    date: 'Issued 2024',
    category: 'analytics',
    skills: ['Power BI', 'DAX Calculations', 'Power Query', 'Data Modeling', 'Business Intelligence'],
    badgeType: 'codebasics',
    isFeatured: true,
    verificationUrl: 'https://codebasics.io/certificate/CB-VI-56-248864'
  },
  {
    id: 'codebasics-sql-mastery',
    name: 'SQL for Data Analytics Mastery',
    issuer: 'Codebasics',
    date: 'Issued 2024',
    category: 'data-engineering',
    skills: ['Advanced SQL', 'Database Design', 'Window Functions', 'Data Extraction'],
    badgeType: 'codebasics',
    isFeatured: false,
    verificationUrl: 'https://codebasics.io/certificate/CB-49-248864'
  },
  {
    id: 'codebasics-python-analytics',
    name: 'Python for Data Analytics & Visualization',
    issuer: 'Codebasics',
    date: 'Issued 2024',
    category: 'programming',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'ETL Scripting'],
    badgeType: 'codebasics',
    isFeatured: false,
    verificationUrl: 'https://codebasics.io/certificate/CB-51-248864'
  },
  {
    id: 'anthropic-claude-action',
    name: 'Anthropic Claude Code & Agentic Workflows',
    issuer: 'Anthropic',
    date: 'Issued 2025',
    category: 'ai',
    skills: ['Prompt Engineering', 'AI Orchestration', 'Code Generation', 'Agentic Workflows'],
    badgeType: 'anthropic',
    isFeatured: true
  },
  {
    id: 'upgrad-ai-ml',
    name: 'AI & Machine Learning Specialization',
    issuer: 'upGrad Campus',
    date: 'Issued 2023',
    category: 'ai',
    skills: ['Supervised Learning', 'Feature Engineering', 'Model Evaluation', 'Deep Learning'],
    badgeType: 'upgrad',
    isFeatured: false,
    verificationUrl: 'https://certificate.givemycertificate.com/c/4f2739b9-3fdb-47b3-badd-0fcec7429c57'
  },
  {
    id: 'coding-ninjas-ds-ml',
    name: 'Data Science & Machine Learning Course',
    issuer: 'Coding Ninjas',
    date: 'Issued 2023',
    category: 'analytics',
    skills: ['Python Data Science', 'Scikit-Learn', 'Pandas & NumPy', 'Statistical Modeling'],
    badgeType: 'coding-ninjas',
    isFeatured: false,
    verificationUrl: 'https://certificate.givemycertificate.com/c/090b9575-2abc-47f2-a173-710ee4b7bd1b'
  },
  {
    id: 'coss-rhcsa-docker',
    name: 'RHCSA, RHCE, AWS & Docker Administration',
    issuer: 'COSS India',
    date: 'Issued 2023',
    category: 'programming',
    skills: ['Red Hat Linux (RHEL)', 'Bash Scripting', 'Docker Containers', 'Linux System Administration'],
    badgeType: 'coss',
    isFeatured: false,
    verificationUrl: 'https://drive.google.com/file/d/17ZDGFcVtkytKONWgSIOOtUKL0ZCDBDKV/view'
  },
  {
    id: 'careerlabs-python',
    name: 'Python Foundation & Data Structures',
    issuer: 'CareerLabs',
    date: 'Issued 2022',
    category: 'programming',
    skills: ['Data Structures', 'Algorithms', 'OOP Python', 'File I/O'],
    badgeType: 'general',
    isFeatured: false
  }
];

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Enterprise Lakehouse on Azure Databricks',
    category: 'data-engineering',
    categoryLabel: 'Lakehouse & PySpark',
    shortDescription: 'Enterprise Lakehouse implementing Medallion Architecture across Bronze, Silver, and Gold delta layers with 20M+ records.',
    fullDescription: 'Architected a modern data platform on Azure Databricks. Ingests raw streaming and batch feeds into Bronze tables, sanitizes and merges records in Silver layers with PySpark, and exposes aggregated dimensional models in Gold tables for Power BI reporting.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Azure Databricks', 'Delta Lake', 'PySpark', 'ADLS Gen2', 'Azure Data Factory'],
    metrics: [
      { label: 'Ingestion Scale', value: '20M+ rows' },
      { label: 'ETL Speedup', value: '38% faster' },
      { label: 'Uptime', value: '99.8%' }
    ],
    keyFeatures: [
      'Medallion Architecture (Bronze -> Silver -> Gold)',
      'ACID transactional consistency with Delta Lake',
      'Automated schema drift detection and quarantine'
    ],
    architecture: ['Azure Blob -> ADF -> Databricks Spark -> Delta Lake -> Power BI Mart'],
    externalUrl: 'https://github.com/Ayushsahu99'
  },
  {
    id: 'project-2',
    title: 'Autonomous Multi-Agent Market Analyst',
    category: 'ai-engineering',
    categoryLabel: 'Agentic AI & LangGraph',
    shortDescription: 'Cooperative multi-agent system utilizing LangGraph and Claude 3.5 Sonnet to perform real-time market sentiment analysis and web scraping.',
    fullDescription: 'Engineered an autonomous research team powered by LangGraph. Distinct specialized agents collaborate: a Scraper Agent pulls financial news, an Analyzer Agent scores sentiment, and a Synthesizer Agent writes structured executive briefs with citations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['LangGraph', 'LangChain', 'Python', 'FastAPI', 'Claude API', 'ChromaDB'],
    metrics: [
      { label: 'Agent Coordination', value: '4 Sub-Agents' },
      { label: 'Synthesis Latency', value: '< 2.4s' },
      { label: 'Accuracy', value: '96.2%' }
    ],
    keyFeatures: [
      'Multi-Agent orchestration with state graph checkpoints',
      'Hybrid dense-sparse vector search in ChromaDB',
      'Human-in-the-loop validation checkpoints'
    ],
    externalUrl: 'https://github.com/Ayushsahu99'
  },
  {
    id: 'project-3',
    title: 'Automated ADF Cloud Migration Engine',
    category: 'data-engineering',
    categoryLabel: 'Cloud ETL & SQL',
    shortDescription: 'Orchestrated 25+ cloud data integration pipelines migrating on-premises legacy databases to Azure SQL and Snowflake.',
    fullDescription: 'Constructed an automated migration utility leveraging Azure Data Factory parameterized templates and PowerShell scripts. Implemented incremental change-data-capture (CDC) with automated rollback triggers.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['Azure Data Factory', 'Azure SQL', 'Blob Storage', 'PowerShell', 'Python'],
    metrics: [
      { label: 'Migrated Tables', value: '25+ Pipelines' },
      { label: 'Data Integrity', value: '100% Verified' },
      { label: 'Downtime', value: '0 hrs' }
    ],
    keyFeatures: [
      'Parameterized pipeline templates',
      'Incremental high-watermark CDC loading',
      'Automated email & Teams alerting'
    ],
    externalUrl: 'https://github.com/Ayushsahu99'
  },
  {
    id: 'project-4',
    title: 'Financial Portfolio Intelligence Suite',
    category: 'data-analytics',
    categoryLabel: 'Power BI & Advanced DAX',
    shortDescription: 'Production Power BI analytical dashboard tracking asset allocations, Sharpe ratios, and market volatility indicators.',
    fullDescription: 'Designed an interactive analytics suite for investment portfolios. Modeled star-schema tables, wrote complex DAX time-intelligence calculations, and built responsive visual scorecards for executive stakeholders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Financial Modeling'],
    metrics: [
      { label: 'AUM Tracked', value: '$45M+' },
      { label: 'Custom Measures', value: '60+ DAX' },
      { label: 'Refresh Cycle', value: 'Automated' }
    ],
    keyFeatures: [
      'Dynamic scenario simulation parameters',
      'Risk-adjusted return & Sharpe metrics',
      'Row-level security (RLS) for client portals'
    ],
    externalUrl: 'https://github.com/Ayushsahu99'
  },
  {
    id: 'project-5',
    title: 'Enterprise RAG Document Q&A Assistant',
    category: 'ai-engineering',
    categoryLabel: 'RAG & Vector Search',
    shortDescription: 'Semantic document search pipeline with hybrid vector retrieval, metadata filtering, and hallucination guardrails.',
    fullDescription: 'Built an enterprise knowledge assistant allowing employees to query internal technical documentation. Implemented chunking with semantic boundaries, cross-encoder rerankers, and citation verification.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Pinecone', 'OpenAI / Gemini', 'LangChain', 'FastAPI', 'Streamlit'],
    metrics: [
      { label: 'Corpus Size', value: '10k+ Docs' },
      { label: 'Recall @ 5', value: '94.8%' },
      { label: 'P95 Latency', value: '820ms' }
    ],
    keyFeatures: [
      'Hybrid dense & sparse BM25 retrieval',
      'Hallucination prevention with fact verification',
      'Source-cited inline references'
    ],
    externalUrl: 'https://github.com/Ayushsahu99'
  },
  {
    id: 'project-6',
    title: 'Real-Time IoT Telemetry Stream Processor',
    category: 'data-engineering',
    categoryLabel: 'Streaming & Kafka',
    shortDescription: 'Stream processing pipeline consuming high-velocity sensor telemetry with Spark Structured Streaming into partitioned Parquet sinks.',
    fullDescription: 'Engineered an event-driven telemetry processor using Apache Kafka and PySpark Structured Streaming. Calculates tumbling-window statistics over sliding 5-minute intervals and writes partitioned datasets to object storage.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['PySpark', 'Structured Streaming', 'Kafka', 'Docker', 'PostgreSQL'],
    metrics: [
      { label: 'Event Throughput', value: '15k msgs/sec' },
      { label: 'End-to-End Latency', value: '< 1.2s' },
      { label: 'Availability', value: '99.9%' }
    ],
    keyFeatures: [
      'Watermarking for late-arriving telemetry',
      'Snappy-compressed partitioned Parquet output',
      'Dead-letter queue for malformed JSON payloads'
    ],
    externalUrl: 'https://github.com/Ayushsahu99'
  }
];

export const dashboardsData: DashboardItem[] = [
  {
    id: 'dash-1',
    title: 'Business Intelligence / Power BI Dashboard',
    description: 'Interactive data visualization and business insights tracking key enterprise KPIs, performance trends, and core business metrics with DAX modeling.',
    tools: ['Power BI', 'DAX', 'Data Analytics', 'Business Intelligence'],
    liveUrl: 'https://lnkd.in/gNn-wDQZ',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalyst-businessintelligence-powerbi-activity-7421240683233091584-N9UP',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-2',
    title: 'Sales Dashboard',
    description: 'Interactive data visualization and business revenue insights tracking regional sales performance, product revenue velocity, and quota pacing.',
    tools: ['Power BI', 'Data Modeling', 'DAX', 'Sales Analytics'],
    liveUrl: 'https://lnkd.in/eRQMhRqx',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_powerbi-dataanalytics-salesdashboard-activity-7414954730789064704-LpDQ',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-3',
    title: 'Insurance Analysis Dashboard',
    description: 'Comprehensive risk and claim analytics tracking underwriting ratios, claim severity, customer policy renewals, and actuarial metrics.',
    tools: ['Power BI', 'SQL', 'DAX', 'Risk Analytics'],
    liveUrl: 'https://lnkd.in/eDH6rg43',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-businessintelligence-insuranceanalysis-activity-7412615371779690497-ZUBX',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-4',
    title: 'Healthcare Innovation Dashboard',
    description: 'Clinical and hospital operations intelligence analyzing patient wait times, treatment outcomes, acute care capacity, and healthcare efficiency.',
    tools: ['Power BI', 'DAX', 'Clinical Informatics', 'Healthcare Analytics'],
    liveUrl: 'https://lnkd.in/e_4JJ6hB',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-healthcareinnovation-powerbi-activity-7409928613812363266-eUAE',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  }
];
