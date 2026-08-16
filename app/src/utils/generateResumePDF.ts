import jsPDF from 'jspdf';

export const downloadResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 12; // 12mm
  const contentWidth = pageWidth - margin * 2; // 186mm
  let y = 14;

  // Helper for section headings with bottom border line
  const addSectionHeading = (title: string) => {
    y += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.text(title, margin, y);
    
    y += 1.5;
    doc.setDrawColor(203, 213, 225); // Slate-300
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4;
  };

  // 1. NAME & TITLE HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // Slate-900
  doc.text('AYUSH KUMAR SAHU', pageWidth / 2, y, { align: 'center' });

  y += 5.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85); // Slate-700
  doc.text('Senior Data Engineer at ByteIQ Analytics  |  MSc Big Data Science (Distinction)', pageWidth / 2, y, { align: 'center' });

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // Slate-600
  doc.text('Bhubaneswar, Odisha, India  |  +44 7405813318  |  ayushkusahuk@gmail.com  |  LinkedIn  |  GitHub  |  Portfolio', pageWidth / 2, y, { align: 'center' });

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Graduate visa valid until November 2027  ·  No sponsorship required', pageWidth / 2, y, { align: 'center' });

  // 2. PROFILE SECTION
  addSectionHeading('PROFILE');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const profileLines = doc.splitTextToSize(
    'Data engineer with 2+ years across a healthcare diagnostics marketplace and an on premises SQL Server to AWS warehouse modernisation, plus an MSc in Big Data Science (Distinction). Builds log based CDC and ELT pipelines with AWS DMS, S3, Airflow and dbt, terminating in star schemas that serve a client facing reporting portal, and owns the data modelling, validation and documentation end to end.',
    contentWidth
  );
  doc.text(profileLines, margin, y);
  y += profileLines.length * 3.8 + 1;

  // 3. EDUCATION SECTION
  addSectionHeading('EDUCATION');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('MSc Big Data Science (Distinction), Queen Mary University of London', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Sep 2024 to Sep 2025', margin + contentWidth, y, { align: 'right' });
  y += 5;

  // 4. TECHNICAL SKILLS SECTION
  addSectionHeading('TECHNICAL SKILLS');
  const skillCategories = [
    { label: 'Languages & Processing:', text: 'Python (pandas, PySpark, pyodbc, pyarrow), SQL, T-SQL, Spark SQL, ETL and ELT' },
    { label: 'Change Data Capture:', text: 'AWS DMS log based CDC, partitioned Parquet bronze, watermarking, quarantine, idempotent loads' },
    { label: 'Data Modelling:', text: 'dimensional and star schemas, medallion architecture, SCD, surrogate keys, dbt models, dbt contracts' },
    { label: 'Databases & Warehouses:', text: 'Microsoft SQL Server, PostgreSQL, MySQL, Amazon RDS, Redshift, Snowflake' },
    { label: 'Cloud & Orchestration:', text: 'AWS (S3, DMS, EC2, EKS, Glue, Lambda, RDS, IAM), Azure Data Factory, Apache Airflow, Databricks' },
    { label: 'Infrastructure & DevOps:', text: 'Terraform, AWS CloudFormation, Docker, Kubernetes, Helm, GitHub Actions, Amazon ECR, PyTest, Linux, Git' },
    { label: 'Serving & BI:', text: 'Cube.dev pre-aggregations, row level security, Power BI Embedded, Angular data grids, Kafka, Spark Structured Streaming' },
  ];

  skillCategories.forEach(sk => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(sk.label, margin, y);
    const labelWidth = doc.getTextWidth(sk.label) + 2;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const textLines = doc.splitTextToSize(sk.text, contentWidth - labelWidth);
    doc.text(textLines, margin + labelWidth, y);
    y += Math.max(1, textLines.length) * 3.5;
  });
  y += 1;

  // 5. EXPERIENCE SECTION
  addSectionHeading('EXPERIENCE');

  // Experience 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Senior Data Engineer, ByteIQ Analytics, Bhubaneswar, Odisha, India (Hybrid)', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Jan 2026 to Present', margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  const byteIqBullets = [
    'Data engineer on the NuCompass data warehouse modernisation, feeding a client facing relocation reporting portal from two source systems running side by side through a platform migration.',
    'Engineered a change data capture pipeline replacing a nightly full scan stored procedure, streaming SQL Server changes via AWS DMS into an S3 Parquet bronze layer, after delivering the proof of concept that validated the pattern.',
    'Built the Airflow (MWAA) loader moving partitioned Parquet from S3 into RDS SQL Server staging, with watermark based idempotency, a row level quarantine path, chunked bulk inserts via fast_executemany, and lineage columns tracing any reported figure back to its CDC event.',
    'Modelled a bronze, silver and gold medallion architecture in dbt terminating in a star schema, with dbt contracts pinning every gold column so schema drift fails CI rather than breaking a client report.',
    'Authored a defence in depth security assessment of the DMS CDC pipeline across three trust zones, identifying that CDC captured deletes retain source row values in S3, with direct data retention and privacy consequences for transferee PII.',
    'Wrote a read only Python discovery tool (pyodbc, pandas) that reverse engineered an undocumented legacy estate into table inventories, dependency graphs, key constraints and procedure bodies, forming the input to source to target column mapping across a 1,500 table target database.',
    'Root caused a duplicate row defect in a warehouse fact table to an incorrect grain assumption in the upstream source view, worked all affected cases, and escalated the fix as a business decision on table grain.',
    'Consolidated roughly 40 fragmented legacy reports into a Phase 1 set of 18 across Power BI Embedded and native Angular data grids, served through Cube.dev pre aggregations with row level security by corporate client.',
    'Provisioned AWS infrastructure as code with Terraform and CloudFormation, automated delivery through GitHub Actions, and supported the deployment of the AIIMS Meghraj platform onto NIC cloud infrastructure.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  byteIqBullets.forEach(b => {
    doc.text('•', margin + 1, y);
    const lines = doc.splitTextToSize(b, contentWidth - 5);
    doc.text(lines, margin + 4, y);
    y += lines.length * 3.4;
  });
  y += 2;

  // Experience 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Data Engineer, EVE Healthcare, Gurugram, India', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Jan 2023 to Aug 2024', margin + contentWidth, y, { align: 'right' });
  y += 3.8;

  const eveBullets = [
    'Owned the data pipelines and analytics layer behind a Delhi NCR diagnostics marketplace spanning 3 cities and 25+ diagnostic tests, building Python and SQL ETL and ELT that standardised test catalogues, pricing and slot availability from partner centres.',
    'Visited hospitals and diagnostic centres in person to pitch the platform and onboard them as clients, then worked with them to shape their catalogue and pricing data into a form the ingestion pipeline could consume.',
    'Modelled the marketplace schema covering centres, services, pricing, panels and bookings across 7 service categories (MRI, CT, X-ray, ultrasound, blood tests, cardiology and neurology) and 3 empanelment types (CGHS, ECHS and corporate).',
    'Orchestrated ingestion with Apache Airflow, designing DAGs with scheduling, monitoring and automated retries so pricing and slot availability stayed current across partner centres.',
    'Built an AWS platform with S3 as the data lake and Amazon Redshift as the warehouse, giving product and business teams visibility into bookings, conversions, top tests and centre performance.',
    'Implemented data quality and validation checks behind a price comparison experience advertising savings of up to 50 percent, supporting search, near me discovery and same day report delivery.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  eveBullets.forEach(b => {
    doc.text('•', margin + 1, y);
    const lines = doc.splitTextToSize(b, contentWidth - 5);
    doc.text(lines, margin + 4, y);
    y += lines.length * 3.4;
  });
  y += 2;

  // 6. PROJECTS SECTION
  addSectionHeading('PROJECTS');

  const projects = [
    {
      title: 'End to End Aviation Data Pipeline',
      tech: 'Databricks, PySpark, Delta Lake, Auto Loader, dbt',
      link: 'GitHub',
      bullets: [
        'Built a Databricks lakehouse for flight, passenger and airport data with incremental Auto Loader ingestion, schema drift handling and Bronze, Silver and Gold layers.',
        'Modelled a Gold star schema with fact_bookings and supporting dimensions, applying deduplication and SCD upserts for queries like airline revenue by departure city.'
      ]
    },
    {
      title: 'Real Time Stock Market Pipeline',
      tech: 'Kafka, Airflow, Snowflake, dbt, Docker, Power BI',
      link: 'GitHub',
      bullets: [
        'Streamed Finnhub API events into Kafka, with Airflow DAGs landing raw JSON in MinIO and loading Snowflake through internal stages and COPY INTO.',
        'Modelled dbt Silver and Gold layers for parsing, deduplication and KPI and volatility aggregation, feeding live Power BI DirectQuery dashboards from a Dockerised stack.'
      ]
    },
    {
      title: 'BrandGuardian, AI Compliance Auditor',
      tech: 'LangGraph, Azure OpenAI, Azure Video Indexer, FastAPI',
      link: 'GitHub',
      bullets: [
        'Built a multi-agent LangGraph workflow that ingests YouTube videos, extracts transcripts and on-screen text with Azure Video Indexer, and flags compliance issues with GPT-4o RAG behind a FastAPI endpoint.'
      ]
    }
  ];

  projects.forEach(p => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(p.title, margin, y);
    const tWidth = doc.getTextWidth(p.title) + 2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(p.tech, margin + tWidth, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 64, 175); // Blue link
    doc.text(p.link, margin + contentWidth, y, { align: 'right' });
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    p.bullets.forEach(b => {
      doc.text('•', margin + 1, y);
      const lines = doc.splitTextToSize(b, contentWidth - 5);
      doc.text(lines, margin + 4, y);
      y += lines.length * 3.4;
    });
    y += 1.5;
  });

  // 7. CERTIFICATIONS
  addSectionHeading('CERTIFICATIONS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text('Oracle Agentic AI Certified Foundations Associate  |  Azure Administrator (AZ-104)  |  Google Data Analytics  |  SQL Associate', margin, y);

  // Save PDF file
  doc.save('AYUSH_KUMAR_SAHU_RESUME.pdf');
};
