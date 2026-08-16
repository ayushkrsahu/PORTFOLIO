import { UserProfile, Experience, Education, Certification, Project, DashboardItem, SkillItem } from '../types';

export const initialProfile: UserProfile = {
  name: 'Ayush Kumar Sahu',
  role: 'Senior Data Engineer at ByteIQ Analytics',
  location: 'Bhubaneswar, Odisha, India',
  bio: 'Senior Data Engineer at ByteIQ Analytics with an MSc in Big Data Science from Queen Mary University of London. I build the plumbing that gets data from messy source systems into warehouses people can actually trust, which in practice means change data capture off SQL Server, orchestration in Apache Airflow, modelling in dbt, and the AWS infrastructure underneath it defined as code in Terraform and CloudFormation. Most of my work sits at the point where a migration is half finished and two systems disagree, so a lot of what I do is deciding which record wins and making that decision auditable.',
  tagline: 'MSc Big Data Science, Distinction (Queen Mary University of London) · CDC, Airflow, dbt and AWS',
  linkedinUrl: 'https://linkedin.com/in/ayush-kumar-sahu-dataengineer',
  githubUrl: 'https://github.com/Ayushsahu99',
  email: 'ayushkusahu@gmail.com',
  pswVisaInfo: 'Authorized to work in the UK until November 2027 (Graduate Visa)'
};

export const skillsData: SkillItem[] = [
  {
    id: 'skill-1',
    title: 'Change Data Capture & System Migration',
    shortDesc: 'LSN based CDC off SQL Server, AWS DMS replication, watermarking, idempotent loads and cross source merge during a live cutover.',
    fullDesc: 'My core specialism. Reading SQL Server change tables by LSN range, running AWS DMS full load plus ongoing replication into a partitioned bronze layer, and resolving which system is authoritative for a record while a migration is only half complete. Every merge decision is carried through as a column so it stays auditable downstream.',
    iconName: 'cdc',
    tools: ['AWS DMS', 'SQL Server CDC', 'pyodbc', 'pyarrow', 'Parquet', 'Watermarking']
  },
  {
    id: 'skill-2',
    title: 'Pipeline Orchestration & Automation',
    shortDesc: 'Airflow DAGs with scheduling, retries, quarantine, watermarks and validation that stops a run rather than passing bad data on.',
    fullDesc: 'Building production pipelines in Apache Airflow and Azure Data Factory. Loads are atomic and idempotent, bad rows are quarantined with a reason instead of dropped silently, and row count validation fails the run on any mismatch between staging and the control log.',
    iconName: 'pipeline',
    tools: ['Apache Airflow', 'Azure Data Factory', 'Python', 'Bash', 'Docker', 'REST APIs']
  },
  {
    id: 'skill-3',
    title: 'Data Modelling & Transformation with dbt',
    shortDesc: 'Layered dbt models from typed staging through CDC dedup and cross source merge into a conformed gold star schema.',
    fullDesc: 'Designing Kimball dimensional models, surrogate keys and slowly changing dimensions, expressed as version controlled dbt models so the logic is testable and reviewable. Comfortable with 3NF transactional schemas, recursive CTEs, window functions and indexing strategy on the way through.',
    iconName: 'modeling',
    tools: ['dbt', 'SQL Server', 'PostgreSQL', 'T-SQL', 'Kimball Methodology', 'MySQL']
  },
  {
    id: 'skill-4',
    title: 'Cloud Infrastructure as Code & DevOps',
    shortDesc: 'AWS provisioned through Terraform and CloudFormation, containers on Kubernetes, and delivery automated end to end in GitHub Actions.',
    fullDesc: 'Modular Terraform and CloudFormation stacks for VPC networking, compute, RDS, S3 and IAM, with remote state so a team can work on it safely. CI/CD runs security scanning, tests and linting, then builds Docker images, pushes to ECR and rolls Kubernetes deployments forward with Helm.',
    iconName: 'infrastructure',
    tools: ['Terraform', 'AWS CloudFormation', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Linux']
  },
  {
    id: 'skill-5',
    title: 'Cloud Data Warehousing & Lakehouse',
    shortDesc: 'Medallion lakehouses, dimensional marts and warehouse design across AWS and Azure, with Delta Lake optimisation.',
    fullDesc: 'Designing bronze, silver and gold layers where bronze stays immutable in object storage and the warehouse starts at staging. Experience with Delta Lake ACID transactions, Z-Ordering, partitioning strategy and storage tiering across S3, Redshift, Snowflake and ADLS Gen2.',
    iconName: 'warehouse',
    tools: ['Amazon S3', 'Amazon Redshift', 'Snowflake', 'Databricks', 'Delta Lake', 'AWS Glue']
  },
  {
    id: 'skill-6',
    title: 'Distributed Processing & Streaming',
    shortDesc: 'PySpark and Spark Structured Streaming, Kafka ingestion, schema evolution and out of order event handling.',
    fullDesc: 'Processing high volume data with Apache Spark and PySpark, and handling live streams through Kafka with windowed aggregations. Building ingestion that survives schema drift by evolving the target table and rescuing unexpected columns rather than crashing the pipeline.',
    iconName: 'cleansing',
    tools: ['Apache Spark', 'PySpark', 'Kafka', 'Databricks Autoloader', 'Pandas', 'Scala']
  },
  {
    id: 'skill-7',
    title: 'Data Quality & Validation',
    shortDesc: 'Validation on the way in, quarantine tables with rejection reasons, and reconciliation that fails loudly instead of quietly.',
    fullDesc: 'Treating data quality as a gate rather than a report. Required fields, value ranges and format checks run before anything reaches a clean table, rejected rows land in a quarantine table with the reason attached, and row counts are reconciled between staging and control before a load is accepted.',
    iconName: 'exploration',
    tools: ['dbt tests', 'PyTest', 'SQL', 'Great Expectations patterns', 'Python']
  },
  {
    id: 'skill-8',
    title: 'Business Intelligence & Reporting',
    shortDesc: 'Power BI reporting on top of well modelled semantic layers, published live for business and product teams.',
    fullDesc: 'Building star schema semantic layers that make reporting straightforward, then publishing dashboards through the Power BI service with scheduled refresh. Focused on giving product and business teams a view of the numbers they can act on without asking an engineer first.',
    iconName: 'visualization',
    tools: ['Power BI', 'Power Query', 'SQL', 'Tableau', 'Excel']
  }
];

export const experienceData: Experience[] = [
  {
    role: 'Senior Data Engineer',
    company: 'ByteIQ Analytics',
    location: 'Bhubaneswar, Odisha, India (Hybrid)',
    period: 'Jan 2026 to Present',
    summary:
      'I own the ingestion and modelling layer for a global relocation services client moving off SQL Server onto an AWS warehouse. The interesting part of the job is that the migration is only half done at any given moment, so some records are still authoritative in the legacy system while others have already cut over. A lot of my work is deciding which record wins, and making that decision something anyone can audit later.',
    metrics: [
      { label: 'Source tables consolidated', value: '24' },
      { label: 'Rows unified', value: '53,860' },
      { label: 'dbt models built', value: '18' },
      { label: 'Stored procedures mapped', value: '95' }
    ],
    highlights: [
      {
        area: 'Change Data Capture and Ingestion',
        points: [
          'Built the change data capture pipeline off Microsoft SQL Server using AWS DMS, running a full load followed by ongoing replication into an S3 bronze layer stored as date partitioned Parquet. I handed it over with a least privilege reader account, a runbook and a short security report so the client could operate it without me.',
          'Wrote a Python CDC extractor with pyodbc and pyarrow that reads the SQL Server change tables by LSN range through fn_cdc_get_all_changes and writes Parquet in the same folder layout AWS DMS produces, so both paths land identically and downstream code does not care which one produced a file.',
          'Made the extraction config driven rather than hard coded. A YAML manifest maps every table to one of four strategies, rowversion, datetime, identity or snapshot hash, and each table keeps its own control state so an interrupted load picks up where it stopped instead of starting over.'
        ]
      },
      {
        area: 'Orchestration, Reliability and Data Quality',
        points: [
          'Automated the loads in Apache Airflow across two DAGs and seven tasks. Airflow deliberately stops at staging: it validates a partition, bulk loads the good rows, quarantines the bad ones with a rejection reason, and records a watermark. Business logic lives in the models, not the orchestrator, which keeps the loader reusable across entities.',
          'Made every load idempotent and atomic. The insert, the quarantine write and the watermark all happen inside one transaction, and the watermark is unique per partition, so replaying the same file is a no operation rather than a duplicate. Bulk inserts use fast_executemany to keep it to a single round trip.',
          'Added validation that fails the run rather than quietly passing bad data through. Required fields, amount ranges and currency codes are checked on the way in, and any row count mismatch between staging and the control log stops the pipeline.'
        ]
      },
      {
        area: 'dbt Modelling and the Legacy to Modern Migration',
        points: [
          'Built the transformation layer in dbt as four deliberate stages. Silver A takes typed copies of each source and marks where the row came from. Silver B collapses the CDC stream to the latest state per key using ROW_NUMBER partitioned by the business key and ordered by the CDC sequence, dropping deletes. Silver C does the cross source merge. Gold exposes a conformed star schema.',
          'The merge is the part that matters. I am migrating the client from their legacy NCM system onto Service Engine, and a migration manifest records whether and when each case cut over. Cases still absent from the manifest stay authoritative in the legacy system, cases born in the modern system belong to it, and migrated cases switch across with the legacy copy suppressed.',
          'Every row carries a winning_source column all the way into the gold fact table, so the merge is inspectable instead of a black box. I also left a date aware variant in place, comparing an analysis date against the cutover date, which opens the door to point in time reporting without reshaping the data.',
          'Modelled the gold layer as dimensions and facts sitting on 18 dbt models, and recommended hash based surrogate keys after analysis showed the two source systems shared no natural keys at all.',
          'Reverse engineered the legacy warehouse before touching any of it, mapping a hub centred star schema of 30 dimensions, 27 fact tables and 95 stored procedures, then wrote a 20 section platform reference and an onboarding guide so the next engineer does not have to repeat that archaeology.'
        ]
      },
      {
        area: 'Cloud Infrastructure and Delivery',
        points: [
          'Moved the infrastructure into code with Terraform and AWS CloudFormation, provisioning VPC networking, compute, RDS, S3 buckets and the IAM roles around them as modular stacks. Remote state lives in S3 so the team can work on it safely together, and environment setup dropped from days of manual clicking to minutes with production parity.',
          'Set up continuous delivery in GitHub Actions. Every pull request runs a Bandit security scan, PyTest and linting, then builds a Docker image, pushes it to ECR and rolls the Kubernetes deployment forward with Helm. Manual deployment steps, and the mistakes that came with them, went away.',
          'Supported the deployment of the AIIMS Meghraj platform onto NIC cloud infrastructure, working through the provisioning, configuration and release steps that a government hosted environment requires.'
        ]
      }
    ],
    description: [
      'Own the ingestion and modelling layer for a global relocation services client migrating from SQL Server to an AWS warehouse, including the legacy NCM to Service Engine cutover.',
      'Built the CDC pipeline on SQL Server with AWS DMS, running full load plus ongoing replication into an S3 bronze layer as partitioned Parquet, delivered with a least privilege reader, runbook and security report.',
      'Wrote a Python CDC extractor with pyodbc and pyarrow that reads change tables by LSN range through fn_cdc_get_all_changes and writes Parquet in the AWS DMS folder layout.',
      'Made extraction config driven through a YAML manifest mapping each table to one of four strategies, rowversion, datetime, identity or snapshot hash, with per table control state for resumable loads.',
      'Automated loading in Apache Airflow across two DAGs and seven tasks, with an idempotent file level control table, row quarantine and validation that fails the run on any row count mismatch.',
      'Built the dbt layer as staged silver models for typing, CDC dedup and cross source merge, feeding a conformed gold star schema across 18 models, with a winning_source column that keeps the merge auditable.',
      'Merged two disjoint source systems, 53,860 rows across 24 tables, into a unified warehouse and recommended hash based surrogate keys after finding no shared natural keys.',
      'Reverse engineered the legacy warehouse, mapping 30 dimensions, 27 fact tables and 95 stored procedures, and authored a 20 section platform reference plus onboarding guide.',
      'Provisioned AWS infrastructure as code with Terraform and CloudFormation, and automated delivery through GitHub Actions with security scanning, PyTest, Docker, ECR, Kubernetes and Helm.',
      'Supported the deployment of the AIIMS Meghraj platform onto NIC cloud infrastructure.'
    ],
    technologies: [
      'Microsoft SQL Server',
      'AWS DMS',
      'Amazon S3',
      'Apache Airflow',
      'dbt',
      'Python',
      'pyodbc',
      'pyarrow',
      'Parquet',
      'T-SQL',
      'Terraform',
      'AWS CloudFormation',
      'Docker',
      'Kubernetes',
      'Helm',
      'GitHub Actions',
      'Amazon ECR',
      'PyTest',
      'YAML',
      'AWS IAM'
    ]
  },
  {
    role: 'Data Engineer',
    company: 'EVE Healthcare',
    location: 'Gurugram, India',
    period: 'Jan 2023 to Aug 2024',
    summary:
      'I looked after the data pipelines and the analytics layer behind a Delhi NCR diagnostics marketplace covering three cities and more than 25 diagnostic tests. Hospitals and diagnostic centres were our clients, so alongside the engineering I spent time in front of them, visiting centres to pitch the platform and bring them onto it.',
    metrics: [
      { label: 'Cities served', value: '3' },
      { label: 'Diagnostic tests', value: '25+' },
      { label: 'Service categories', value: '7' },
      { label: 'Advertised savings', value: 'up to 50%' }
    ],
    highlights: [
      {
        area: 'Pipelines and Orchestration',
        points: [
          'Built the Python and SQL ETL and ELT that pulled test catalogues, pricing and slot availability in from partner centres and standardised them, since every centre named and priced the same test differently.',
          'Orchestrated the ingestion in Apache Airflow with scheduling, monitoring and automatic retries, so pricing and availability stayed current across partner centres without anyone chasing it manually.'
        ]
      },
      {
        area: 'Data Modelling and Platform',
        points: [
          'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across seven service categories, MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology, and three empanelment types, CGHS, ECHS and corporate.',
          'Built the platform on AWS with S3 as the data lake and Amazon Redshift as the warehouse, which gave the product and business teams a clear view of bookings, conversions, best selling tests and how each centre was performing.'
        ]
      },
      {
        area: 'Client Engagement and Product Impact',
        points: [
          'Went out to hospitals and diagnostic centres in person to pitch the platform and bring them on board, then worked with them on getting their catalogue and pricing data into a shape we could ingest. Sitting on both sides of that conversation made the onboarding pipeline considerably easier to design.',
          'Implemented the data quality and validation checks behind the price comparison experience that advertised savings of up to 50 percent, which also supported search, near me discovery and same day report delivery.'
        ]
      }
    ],
    description: [
      'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL and ELT that standardised test catalogues, pricing and slot availability from partner centres.',
      'Visited hospitals and diagnostic centres in person to pitch the platform and onboard them as clients, then shaped their catalogue and pricing data into a form the ingestion pipeline could consume.',
      'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories and 3 empanelment types, CGHS, ECHS and corporate.',
      'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.',
      'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.',
      'Implemented data quality and validation checks behind a price comparison experience advertising savings of up to 50 percent, supporting search, near me discovery and same day report delivery.'
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
      'Data Quality',
      'AWS'
    ]
  }
];

export const educationData: Education[] = [
  {
    institution: 'Queen Mary University of London',
    degree: 'MSc Big Data Science',
    grade: 'Distinction',
    period: 'Sep 2024 to Sep 2025',
    description:
      'Russell Group. Modules covered Big Data Processing, Cloud Computing, Neural Networks, Natural Language Processing and Machine Learning.'
  },
  {
    institution: 'SRM Institute of Science and Technology, Chennai',
    degree: 'B.Tech Electronics and Communication',
    grade: '7.61 / 10',
    period: 'May 2019 to Dec 2023',
    description: 'First Class.'
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
    description: 'Business insights tracking key enterprise KPIs, performance trends and core business metrics, published live from the Power BI service.',
    tools: ['Power BI', 'Data Modeling', 'Data Analytics', 'Business Intelligence'],
    liveUrl: 'https://lnkd.in/gNn-wDQZ',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalyst-businessintelligence-powerbi-activity-7421240683233091584-N9UP',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-2',
    title: 'Sales Dashboard',
    description: 'Revenue insights tracking regional sales performance, product revenue velocity and quota pacing across the sales organisation.',
    tools: ['Power BI', 'Data Modeling', 'SQL', 'Sales Analytics'],
    liveUrl: 'https://lnkd.in/eRQMhRqx',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_powerbi-dataanalytics-salesdashboard-activity-7414954730789064704-LpDQ',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-3',
    title: 'Insurance Analysis Dashboard',
    description: 'Comprehensive risk and claim analytics tracking underwriting ratios, claim severity, customer policy renewals, and actuarial metrics.',
    tools: ['Power BI', 'SQL', 'Data Modeling', 'Risk Analytics'],
    liveUrl: 'https://lnkd.in/eDH6rg43',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-businessintelligence-insuranceanalysis-activity-7412615371779690497-ZUBX',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  },
  {
    id: 'dash-4',
    title: 'Healthcare Innovation Dashboard',
    description: 'Clinical and hospital operations intelligence analyzing patient wait times, treatment outcomes, acute care capacity, and healthcare efficiency.',
    tools: ['Power BI', 'SQL', 'Clinical Informatics', 'Healthcare Analytics'],
    liveUrl: 'https://lnkd.in/e_4JJ6hB',
    linkedInUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-healthcareinnovation-powerbi-activity-7409928613812363266-eUAE',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9'
  }
];
