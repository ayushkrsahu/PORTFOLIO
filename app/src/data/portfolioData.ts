import { UserProfile, Experience, Education, Certification, Project, DashboardItem, SkillItem } from '../types';

export const initialProfile: UserProfile = {
  name: 'Ayush Kumar Sahu',
  role: 'Senior Data Engineer at ByteIQ Analytics',
  location: 'Bhubaneswar, Odisha, India',
  bio: 'Senior Data Engineer at ByteIQ Analytics with an MSc in Big Data Science from Queen Mary University of London. I build the plumbing that gets data out of messy source systems and into warehouses people can actually trust, which in practice means change data capture off SQL Server through AWS DMS, orchestration in Airflow, modelling in dbt, and the AWS infrastructure underneath it defined as code. Most of my current work is a warehouse modernisation for a corporate relocation business, where a client facing reporting portal has to present one coherent view while two source systems run side by side through a migration.',
  tagline: 'MSc Big Data Science, Distinction (Queen Mary University of London) · CDC, Airflow, dbt and AWS',
  linkedinUrl: 'https://www.linkedin.com/in/ayush-ku-sahu',
  githubUrl: 'https://github.com/ayushkrsahu',
  email: 'ayushkusahuk@gmail.com',
  pswVisaInfo: 'Authorized to work in the UK until November 2027 (Graduate Visa)',
  avatarUrl: '/avatar.jpg'
};

export const skillsData: SkillItem[] = [
  {
    id: 'skill-1',
    title: 'Change Data Capture & System Migration',
    shortDesc: 'AWS DMS log based CDC off SQL Server into partitioned Parquet, replacing nightly full scans, with conformance across two source systems mid migration.',
    fullDesc: 'My core specialism. Reading SQL Server transaction logs through AWS DMS so the cost of a load scales with the volume of change rather than the volume of data, landing raw immutable Parquet in a bronze layer, then conforming business keys across a legacy estate and its replacement platform while both run side by side through a migration.',
    iconName: 'cdc',
    tools: ['AWS DMS', 'SQL Server CDC', 'pyarrow', 'pyodbc', 'Parquet', 'Amazon S3']
  },
  {
    id: 'skill-2',
    title: 'Pipeline Orchestration & Automation',
    shortDesc: 'Airflow on MWAA with watermark based idempotency, a quarantine path for bad rows, chunked bulk loads and lineage columns on every row.',
    fullDesc: 'Building production pipelines in Apache Airflow and Azure Data Factory. A re run cannot double load because watermarks record every partition already processed, one malformed row goes to quarantine with its payload and reason rather than costing a night of reporting, and lineage columns let any figure in a report be traced back to the event that produced it.',
    iconName: 'pipeline',
    tools: ['Apache Airflow', 'MWAA', 'Azure Data Factory', 'Python', 'Docker', 'Bash']
  },
  {
    id: 'skill-3',
    title: 'Data Modelling & Transformation with dbt',
    shortDesc: 'Layered dbt models from typed staging through CDC dedup and cross source merge into a conformed gold star schema.',
    fullDesc: 'Designing Kimball dimensional models, surrogate keys and slowly changing dimensions, expressed as version controlled dbt models so the logic is testable and reviewable. I pin gold columns with dbt contracts so schema drift fails the build rather than quietly breaking a downstream report, and I am comfortable with 3NF schemas, recursive CTEs, window functions and indexing strategy on the way through.',
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
    shortDesc: 'Validation on the way in, quarantine over failure, dbt contracts on gold, and root cause analysis that traces a defect to the real assumption behind it.',
    fullDesc: 'Treating data quality as a gate rather than a report. Checks run before anything reaches a clean table and rejected rows are isolated with a reason attached. Just as often the work is analytical: tracing a duplicate row defect past the load logic to an incorrect grain assumption upstream, and knowing when the fix is a business decision rather than one to make unilaterally.',
    iconName: 'exploration',
    tools: ['dbt tests', 'dbt contracts', 'SQL', 'PyTest', 'Python']
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
    location: 'Bhubaneswar, Odisha, India (On-site)',
    period: 'Jan 2026 to Present',
    summary:
      'Data engineer on the NuCompass data warehouse modernisation. NuCompass runs corporate relocations, and their client HR teams never touch the internal systems, so everything reaches them through the CPC reporting portal. Reporting is the product surface here rather than a downstream extra. The business was running two source systems at once mid migration, a legacy on premises Back Office estate and the vendor hosted Service Engine platform, and the portal had to present one coherent view across both.',
    metrics: [
      { label: 'Service Engine tables navigated', value: '1,500+' },
      { label: 'Reports consolidated', value: '40 to 18' },
      { label: 'Legacy estate mapped', value: '~500 GB' },
      { label: 'Gold warehouse served', value: '~10 GB' }
    ],
    highlights: [
      {
        area: 'Change Data Capture and Ingestion',
        points: [
          'Built and demonstrated the CDC proof of concept before the team committed to the pattern. Stood up SQL Server locally, enabled CDC at database and table level, generated insert, update and delete activity, and exported the captured changes to Parquet in S3, reproducing the bronze layer end to end and surfacing the details that mattered at production scale.',
          'The pipeline now replaces a nightly master stored procedure that rebuilt warehouse tables by full scanning the sources and got slower every month. AWS DMS reads the SQL Server transaction logs on both systems and lands only the actual changes in S3 as date partitioned Parquet, raw, immutable and replayable.',
          'Built the Airflow loader on MWAA that moves bronze Parquet into RDS SQL Server staging, reading with pyarrow and writing with pyodbc using chunked fast_executemany batches. Watermarks make a re run safe, rows failing validation go to a quarantine table with the payload, reason and DAG run id rather than killing the load, and every row carries ingested_at, source_op, source_seq and dbt_run_id so any figure in a client report traces back to the CDC event that produced it.'
        ]
      },
      {
        area: 'Warehouse Modelling in dbt',
        points: [
          'Modelled a bronze, silver and gold medallion architecture in dbt. Silver deduplicates the multiple row versions CDC emits, conforms types and resolves business keys across the two source systems. Gold is a star schema of fact tables for expense, services, home sale cost and active transferee status, surrounded by conformed main, date and corporate client dimensions.',
          'Pinned every gold column with dbt contracts, so schema drift fails the CI build instead of quietly breaking a client facing report.',
          'Chose RDS SQL Server over a columnar warehouse deliberately. At roughly 10 GB of gold data, MPP would have been over engineering, and staying on SQL Server end to end avoided T-SQL translation from the sources and kept native MONEY and DATETIME2 handling. Because dbt sits between silver and gold, changing that engine later is a target change rather than a rewrite.'
        ]
      },
      {
        area: 'Discovery, Data Quality and Security',
        points: [
          'The legacy estate had no current documentation and nobody who understood all of it, so I wrote a read only Python discovery tool with pyodbc and pandas that pulled table inventories ordered by row count, keys and constraints, foreign keys, object dependencies, procedure and view bodies, and samples with PII hashed. It ran with SELECT and NOLOCK against QA without blocking anyone, and became the input to the source to target column mapping.',
          'Mapped Back Office columns to their Service Engine equivalents alongside the architecture lead, working through a transactional database of over 1,500 tables to find the handful that actually carry the business, and left behind an onboarding map so the next engineer does not repeat the discovery cost.',
          'Root caused a long standing duplicate row defect in the active transferee status fact table. The three column key everyone assumed was unique was not, because a transferee can legitimately have several household goods shipments with different load dates. The duplication came from the upstream source view, not the load logic where the team had been looking. I worked all ten affected cases, separated genuine rescheduled moves from true double entries, and escalated the fix as a business decision on table grain rather than deciding it unilaterally.',
          'Documented a class of bug in the legacy incremental load where null lookup columns broke source to destination comparisons silently, since in SQL a null never equals a null, and derived stand in values so inserts, updates and deletes resolved correctly.',
          'Authored the security assessment for the DMS CDC pipeline as defence in depth across three trust zones, covering least privilege IAM and database roles, KMS encryption in transit and at rest, VPC isolation, bucket hardening and audit logging. The finding that drove most discussion: DMS writes deletes as tagged records that retain the original row values, so an erasure satisfied in the source database is not satisfied in the lake, which matters directly for transferee PII under a multi year retention policy. I documented the remediation path alongside it.'
        ]
      },
      {
        area: 'Serving Layer and Reporting',
        points: [
          'Cube.dev sits in front of gold holding pre aggregations in S3, so dashboard queries hit a cache rather than the warehouse, and enforces row level security by corporate client id so no client can ever see another client\'s transferees.',
          'The portal consumes that through two channels, Power BI Embedded for visual reports and native Angular data grids for dense tabular reports that need custom row actions. I documented the split and the reasoning behind it.',
          'Worked the report inventory down from roughly 40 fragmented legacy reports to a Phase 1 set of 18, consolidating where separate visuals answered overlapping questions and chasing down the ones that could not be located in the workspaces.'
        ]
      },
      {
        area: 'Platform Engineering and Delivery',
        points: [
          'Provisioned AWS infrastructure as code with Terraform and CloudFormation, covering networking, compute, RDS, S3 and the IAM roles around them, with remote state so the team can work on it together safely.',
          'Automated delivery through GitHub Actions, running security scanning, tests and linting on every pull request before building Docker images and rolling deployments forward.',
          'Supported the deployment of the AIIMS Meghraj platform onto NIC cloud infrastructure, working through the provisioning, configuration and release steps a government hosted environment requires.',
          'Worked under genuine governance rather than a sandbox: read only by default until explicitly authorised, all DDL and view definitions in source control first, and no vendor schema exposed to third party tooling, so AI assisted work ran against dummy schemas and synthetic data only.'
        ]
      },
      {
        area: 'Designed and In Delivery',
        points: [
          'Historical migration and cutover from Back Office into Service Engine through the vendor import tool, where the real complexity is that active and historic data need different handling per client and several clients have already partially migrated. Getting those rules explicit is what prevents duplicate transferee records at cutover.',
          'Decommissioning the legacy transactional databases, the old warehouse and the legacy Power BI estate, running both stacks in parallel and reconciling report level output before the portal switches over.',
          'Ask NCM, a LangGraph agent over the gold star schema that lets a mobility manager ask for at risk transferees or pending approvals in plain English. It queries through Cube.dev rather than the warehouse directly, so the same row level security that protects the dashboards protects the agent and no client can prompt their way into another client\'s data.',
          'Moving the reporting layer off Power BI import mode to remove the 15 to 20 second client facing load times, and tightening freshness from the legacy nightly batch toward near real time on the CDC stream.'
        ]
      }
    ],
    description: [
      'Data engineer on the NuCompass data warehouse modernisation, feeding a client facing relocation reporting portal from two source systems running at once during a platform migration.',
      'Engineered a change data capture pipeline replacing a nightly full scan stored procedure, streaming SQL Server changes through AWS DMS into an S3 Parquet bronze layer.',
      'Built the Airflow loader on MWAA moving partitioned Parquet from S3 into RDS SQL Server staging, with watermark based idempotency, a row level quarantine path, chunked bulk inserts via fast_executemany, and lineage columns that trace any reported figure back to its CDC event.',
      'Modelled a bronze, silver and gold medallion architecture in dbt terminating in a star schema, with dbt contracts failing CI on any gold schema drift.',
      'Delivered the CDC proof of concept that validated the pattern before the team committed to it, covering partition layout, Parquet schema stability and operation handling.',
      'Authored a defence in depth security assessment of the DMS CDC pipeline across three trust zones, and identified that CDC captured deletes retain source row values in S3, with direct data retention and privacy consequences.',
      'Wrote a read only Python discovery tool that reverse engineered an undocumented legacy estate into table inventories, dependency graphs, key constraints and procedure bodies, forming the input to the source to target column mapping across a 1,500 table target database.',
      'Root caused a duplicate row defect in a warehouse fact table to an incorrect grain assumption in the upstream source view, and escalated the fix as a business decision on table grain.',
      'Consolidated roughly 40 fragmented legacy reports into a Phase 1 set of 18 across Power BI Embedded and native Angular data grids, served through Cube.dev pre aggregations with row level security by corporate client.',
      'Provisioned AWS infrastructure as code with Terraform and CloudFormation, automated delivery through GitHub Actions, and supported the deployment of the AIIMS Meghraj platform onto NIC cloud infrastructure.'
    ],
    technologies: [
      'Microsoft SQL Server',
      'AWS DMS',
      'Amazon S3',
      'Amazon RDS',
      'Apache Airflow (MWAA)',
      'dbt',
      'Python',
      'pyarrow',
      'pyodbc',
      'pandas',
      'Parquet',
      'T-SQL',
      'Cube.dev',
      'Power BI Embedded',
      'Angular',
      'LangGraph',
      'Terraform',
      'AWS CloudFormation',
      'Docker',
      'GitHub Actions',
      'AWS KMS',
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
    grade: 'First Class',
    period: 'May 2019 to Dec 2023'
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
    title: 'End to End Databricks Pipeline (Flight Data)',
    category: 'data-engineering',
    categoryLabel: 'Databricks & Delta Lake',
    shortDescription: 'Medallion architecture lakehouse for flight, passenger and airport data, built to survive the schema changes airlines keep making.',
    fullDescription: 'Flight data is volatile: airlines add fields and change formats without warning, and a standard ETL pipeline crashes the moment it sees an unexpected column. I built a resilient ingestion framework on Databricks using Auto Loader that detects schema changes and evolves the target Delta table instead of breaking, capturing anything unexpected in a rescue column for later inspection. Slowly Changing Dimension Type 2 logic through Delta MERGE tracks the full history of a flight status rather than overwriting the latest state.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'Auto Loader', 'dbt'],
    metrics: [
      { label: 'Gold query performance', value: '+40%' },
      { label: 'Layers', value: 'Bronze to Gold' }
    ],
    keyFeatures: [
      'Auto Loader ingestion with automatic schema evolution and a rescue column for bad data',
      'SCD Type 2 history tracking through Delta Lake MERGE',
      'Z-Ordering on high cardinality columns for file skipping on the gold layer',
      'Gold star schema with fact_bookings and supporting dimensions'
    ],
    architecture: ['Raw files -> Auto Loader -> Bronze Delta -> Silver dedup -> Gold star schema'],
    externalUrl: 'https://github.com/ayushkrsahu/Databricks_end_to_end_flights'
  },
  {
    id: 'project-2',
    title: 'BrandGuardian, Multimodal AI Compliance Agent',
    category: 'ai-engineering',
    categoryLabel: 'LangGraph & Azure OpenAI',
    shortDescription: 'Multi agent LangGraph workflow that watches video content and flags compliance issues, served behind FastAPI.',
    fullDescription: 'A multi agent LangGraph workflow that ingests YouTube videos, extracts transcripts and on screen text with Azure Video Indexer, and flags compliance issues using GPT-4o with retrieval augmented generation. Exposed through a FastAPI endpoint with LLM observability wired in so agent decisions can be inspected rather than taken on trust.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['LangGraph', 'Azure OpenAI', 'Azure Video Indexer', 'FastAPI', 'RAG'],
    metrics: [],
    keyFeatures: [
      'Multi agent graph coordinating ingestion, extraction and compliance review',
      'Transcript and on screen text extraction through Azure Video Indexer',
      'GPT-4o retrieval augmented compliance checks against a policy corpus',
      'FastAPI service layer with LLM observability'
    ],
    architecture: ['YouTube ingest -> Video Indexer -> LangGraph agents -> GPT-4o RAG -> FastAPI'],
    externalUrl: 'https://github.com/ayushkrsahu/BrandGuardian-LangGraph-Azure-AI',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_aiengineering-langgraph-azureopenai-ugcPost-7433119063628750848-rvjm'
  },
  {
    id: 'project-3',
    title: 'Real Time Stock Market Data Pipeline',
    category: 'data-engineering',
    categoryLabel: 'Kafka & Snowflake',
    shortDescription: 'Low latency streaming pipeline taking market data from daily batch to near real time for volatility tracking.',
    fullDescription: 'Batch processing once a day is useless for tracking market volatility, so I architected a low latency streaming pipeline instead. A multi node Kafka cluster ingests high velocity stock data from the Finnhub API, and Spark Structured Streaming processes the streams with windowed aggregations and out of order event handling. Raw data lands in a MinIO data lake for historical replay while Snowflake receives it through internal stages for immediate SQL access, with dbt running quality tests and modelling silver and gold layers.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tags: ['Apache Kafka', 'Spark Structured Streaming', 'Snowflake', 'Airflow', 'dbt', 'Docker'],
    metrics: [
      { label: 'Data latency', value: '24h to near real time' }
    ],
    keyFeatures: [
      'Multi node Kafka cluster ingesting the Finnhub API',
      'Spark Structured Streaming with windowing and out of order event handling',
      'MinIO data lake for replay alongside Snowflake for immediate SQL access',
      'dbt tests for nulls and duplicates feeding live Power BI dashboards'
    ],
    architecture: ['Finnhub API -> Kafka -> Spark Streaming -> MinIO + Snowflake -> dbt -> Power BI'],
    externalUrl: 'https://github.com/ayushkrsahu/real_time_stock_analysis_with_data_engineering',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-apachekafka-snowflake-activity-7402961976290869248-kDjR'
  },
  {
    id: 'project-4',
    title: 'Azure AI and Retrieval Augmented Generation',
    category: 'ai-engineering',
    categoryLabel: 'Azure AI & RAG',
    shortDescription: 'Retrieval augmented generation on Azure, covering document indexing, grounded answering and evaluation.',
    fullDescription: 'Work on retrieval augmented generation using Azure AI services, covering how documents are chunked and indexed, how retrieval is grounded so answers cite their source rather than hallucinate, and how the results are evaluated. Written up in full on LinkedIn with the architecture and the reasoning behind each choice.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['Azure AI', 'RAG', 'Vector Search', 'Python', 'LLM'],
    metrics: [],
    keyFeatures: [
      'Document chunking and vector indexing strategy',
      'Grounded retrieval so answers trace back to source passages',
      'Evaluation of retrieval quality rather than eyeballing outputs'
    ],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_azure-artificialintelligence-rag-ugcPost-7432723235227648000-z7t6',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_azure-artificialintelligence-rag-ugcPost-7432723235227648000-z7t6'
  },
  {
    id: 'project-5',
    title: 'Data Engineering and DevOps on AWS',
    category: 'data-engineering',
    categoryLabel: 'Terraform & CI/CD',
    shortDescription: 'Infrastructure as code and an automated delivery pipeline for a data platform on AWS.',
    fullDescription: 'An open source mirror of the DevOps modernisation pattern I work with professionally. Terraform provisions the AWS resources including S3, Glue databases and crawlers, and the IAM roles that tie them together, while GitHub Actions runs a multi stage pipeline of security scanning, tests, validation, plan and deploy. The point is production parity: environments come up identically in minutes instead of drifting apart through manual provisioning.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    tags: ['Terraform', 'AWS Glue', 'Amazon S3', 'GitHub Actions', 'Python', 'PyTest'],
    metrics: [],
    keyFeatures: [
      'Modular Terraform for S3, Glue and IAM with remote state',
      'GitHub Actions stages for security scan, test, validate, plan and deploy',
      'Bandit security scanning and PyTest coverage gating the pipeline',
      'Data cataloguing through AWS Glue crawlers'
    ],
    architecture: ['GitHub Actions -> Terraform -> S3 + Glue + IAM -> catalogued data'],
    externalUrl: 'https://github.com/ayushkrsahu/DevOpsDEAutomation',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-devops-aws-activity-7428611522131800064--ajn'
  },
  {
    id: 'project-6',
    title: 'Data Engineering with Databricks and Spark',
    category: 'data-engineering',
    categoryLabel: 'Databricks & PySpark',
    shortDescription: 'Distributed processing work on Databricks, covering PySpark transformations and Delta Lake optimisation.',
    fullDescription: 'Hands on distributed processing with Databricks and Spark: writing PySpark transformations that scale across a cluster, understanding where shuffles and skew hurt, and using Delta Lake features such as ACID transactions and file compaction to keep query performance predictable as tables grow.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'Spark SQL'],
    metrics: [],
    keyFeatures: [
      'PySpark transformations designed around partitioning and shuffle cost',
      'Delta Lake ACID transactions and file compaction',
      'Spark SQL for analytical workloads on the cluster'
    ],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-databricks-spark-activity-7426599481413926912-GAwy',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-databricks-spark-activity-7426599481413926912-GAwy'
  },
  {
    id: 'project-7',
    title: 'Data Engineering First Principles in Python',
    category: 'data-engineering',
    categoryLabel: 'Python Fundamentals',
    shortDescription: 'Building the core pieces of a data pipeline from scratch in Python, rather than reaching for a framework.',
    fullDescription: 'Working through the fundamentals of data engineering by writing them from scratch in Python: extraction, incremental loading, idempotency, batching and error handling, without hiding behind a framework. The point of the exercise is that when a managed tool misbehaves later, you understand what it was doing on your behalf.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'ETL', 'Idempotency', 'Batching', 'SQL'],
    metrics: [],
    keyFeatures: [
      'Extraction and incremental loading written from first principles',
      'Idempotent load patterns and watermarking',
      'Error handling and retry semantics without a framework'
    ],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-firstprinciples-python-activity-7430408372828454912-UhoQ',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-firstprinciples-python-activity-7430408372828454912-UhoQ'
  },
  {
    id: 'project-8',
    title: 'Vendor Performance Analytics',
    category: 'data-analytics',
    categoryLabel: 'Analytics & Reporting',
    shortDescription: 'Analysis of vendor performance covering spend, delivery reliability and where the supplier base carries risk.',
    fullDescription: 'An end to end analysis of vendor performance, cleaning and modelling the underlying data before reporting on spend concentration, delivery reliability and the suppliers that represent the most operational risk. The interesting part is less the charts and more deciding which comparisons are actually fair given uneven order volumes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'SQL', 'Power BI', 'Data Cleaning', 'EDA'],
    metrics: [],
    keyFeatures: [
      'Data cleaning and modelling ahead of any reporting',
      'Spend concentration and delivery reliability analysis',
      'Fair comparison across vendors with uneven order volumes'
    ],
    externalUrl: 'https://github.com/ayushkrsahu/Vendor-data-analysis',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_vendor-data-analysis-i-recently-completed-activity-7396481664593362944-YkX5'
  },
  {
    id: 'project-9',
    title: 'Telecom Strategy Analytics',
    category: 'data-analytics',
    categoryLabel: 'Power Query & Power BI',
    shortDescription: 'Telecom customer and revenue analysis built on a cleaned Power Query model feeding Power BI.',
    fullDescription: 'Analysis of telecom customer and revenue data, with most of the work sitting in Power Query getting a messy source into a shape worth reporting on, then modelling it so the Power BI layer stays simple. Covers customer segments, revenue contribution and where churn risk concentrates.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'Power Query', 'Data Modeling', 'Telecom Analytics'],
    metrics: [],
    keyFeatures: [
      'Power Query transformations handling a messy source',
      'Customer segmentation and revenue contribution analysis',
      'Churn risk concentration across segments'
    ],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-telecomstrategy-powerquery-activity-7398515931225812992-oFvI',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-telecomstrategy-powerquery-activity-7398515931225812992-oFvI'
  },
  {
    id: 'project-10',
    title: 'Business Intelligence Dashboard',
    category: 'data-analytics',
    categoryLabel: 'Power BI',
    shortDescription: 'Enterprise KPI dashboard tracking performance trends and core business metrics, published live.',
    fullDescription: 'A Power BI reporting suite tracking enterprise KPIs, performance trends and core business metrics on a star schema semantic layer, published through the Power BI service so stakeholders can explore it without asking an analyst first.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'Data Modeling', 'Business Intelligence', 'SQL'],
    metrics: [],
    keyFeatures: [
      'Star schema semantic layer behind the report',
      'Enterprise KPI and performance trend tracking',
      'Published live through the Power BI service'
    ],
    externalUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-powerbi-businessintelligence-activity-7400807941794365440-6KlT',
    linkedInPostUrl: 'https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-powerbi-businessintelligence-activity-7400807941794365440-6KlT'
  },
  {
    id: 'project-11',
    title: 'E-Commerce Inventory Analytics',
    category: 'data-analytics',
    categoryLabel: 'Inventory & Demand',
    shortDescription: 'Inventory analysis covering stock movement, demand patterns and where capital sits idle on the shelf.',
    fullDescription: 'Analysis of e-commerce inventory covering stock movement, demand patterns and the products where working capital sits idle. Combines sales velocity with holding levels so slow movers and stockout risk both surface from the same model.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'SQL', 'Pandas', 'Inventory Analytics'],
    metrics: [],
    keyFeatures: [
      'Stock movement and sales velocity analysis',
      'Slow moving inventory and idle capital identification',
      'Stockout risk surfaced from the same model'
    ],
    externalUrl: 'https://github.com/ayushkrsahu/E-Commerce-Inventory-Analytics'
  },
  {
    id: 'project-12',
    title: 'Customer Shopping Analysis',
    category: 'data-analytics',
    categoryLabel: 'Customer Behaviour',
    shortDescription: 'Customer behaviour analysis across purchase patterns, segments and category preference.',
    fullDescription: 'Exploratory analysis of customer shopping behaviour, segmenting customers by purchase pattern and value, and looking at how category preference and basket composition differ between those segments.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Pandas', 'EDA', 'Segmentation', 'Visualisation'],
    metrics: [],
    keyFeatures: [
      'Customer segmentation by purchase pattern and value',
      'Category preference and basket composition by segment',
      'Exploratory analysis with statistical profiling'
    ],
    externalUrl: 'https://github.com/ayushkrsahu/customer_shopping_anlyasis'
  },
  {
    id: 'project-13',
    title: 'HealthEdgeAI',
    category: 'machine-learning',
    categoryLabel: 'Machine Learning',
    shortDescription: 'Machine learning applied to healthcare data, from feature preparation through to model evaluation.',
    fullDescription: 'A machine learning project on healthcare data, covering the preparation work that decides whether a model is worth anything, feature engineering, and evaluation with attention to the class imbalance that healthcare datasets almost always carry.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Machine Learning', 'scikit-learn', 'Healthcare Data'],
    metrics: [],
    keyFeatures: [
      'Feature preparation and engineering on healthcare data',
      'Model evaluation accounting for class imbalance',
      'Reproducible training and evaluation workflow'
    ],
    externalUrl: 'https://github.com/ayushkrsahu/healthedgeai'
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
