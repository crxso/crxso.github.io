export const personal = {
  name: "Cristian Ornelas",
  firstName: "Cristian",
  lastName: "Ornelas",
  title: "Application Security Engineer",
  location: "San Jose, CA",
  email: "cristianrornelas@gmail.com",
  github: "crxso",
  website: "@crxso",
  linkedin: "LinkedIn",
  summary:
    "Security Engineer specializing in secure architecture, DevSecOps, and building automated security tooling at scale. Engineering-driven approach to shifting security left across the SDLC, with hands-on experience securing containerized microservices and cloud-native infrastructure.",
};

export const experience = [
  {
    company: "TikTok USDS JV",
    roles: [
      {
        title: "Application Security Engineer",
        startDate: "Jan 2026",
        endDate: "Present",
        current: true,
        bullets: [
          "Lead AppSec tooling development by engineering and deploying a Python and AWS Lambda automation solution to ingest, prioritize, and triage security findings at scale, significantly reducing manual process time",
          "Contributed to threat modeling and secure design reviews on critical application services and AI/ML-driven features, applying an adversarial perspective to surface attack vectors and mitigate risks early in the SDLC",
          "Conduct security design reviews and awareness sessions with engineering teams, advising developers on secure coding practices and secure architecture",
          "Collaborate cross-functionally with product engineers to advocate for secure architecture and design, distilling complex security concepts into clear, actionable guidance",
          "Author and maintain security standards, policies, and SOPs to codify secure development practices and operational workflows",
        ],
      },
      {
        title: "Application Security & Vulnerability Management Analyst",
        startDate: "Oct 2024",
        endDate: "Dec 2025",
        current: false,
        bullets: [
          "Developed scalable vulnerability management pipelines with automated data ingestion and prioritization logic, handling increased findings volume and cutting critical/high SLA breaches",
          "Triaged and validated bug bounty submissions, performed root cause analysis, and coordinated with engineering teams on remediation",
          "Deployed SAST and DAST scanners in Kubernetes and managed container image vulnerability assessments with WIZ across large-scale containerized microservices",
          "Engineered custom Python and PowerShell scripts to automate software analysis and security data insights, improving operational efficiency",
          "Led a large-scale data breach incident response, leveraging SIEM and EDR to automate containment and remediation workflows",
        ],
      },
    ],
    location: "San Jose, CA",
  },
  {
    company: "O'Neil Digital Solutions",
    roles: [
      {
        title: "Information Security Engineer II",
        startDate: "Mar 2024",
        endDate: "Sep 2024",
        current: false,
        bullets: [
          "Enforced AWS cloud security best practices, managing IAM, ensuring secure configuration of EC2, VPC, S3, Route 53, and WorkSpaces",
          "Implemented SSO and MFA and managed the migration to Keeper Security for enhanced secrets management",
          "Automated EDR deployments and vendor analysis via Jenkins and Python scripting",
          "Created and tuned detection rules within Splunk SIEM to reduce false positives and increase cloud security alert accuracy",
          "Conducted forensic analysis using FortiEDR to investigate security incidents and perform malware protection",
          "Applied reverse engineering and static code analysis to detect and analyze embedded malware",
        ],
      },
      {
        title: "Information Security Engineer I",
        startDate: "Nov 2022",
        endDate: "Mar 2024",
        current: false,
        bullets: [
          "Conducted Tenable (Nessus) and Rapid7 vulnerability scans and collaborated on large-scale remediation and patching efforts",
          "Managed and secured cloud infrastructure using Terraform for Infrastructure as Code (IaC)",
          "Implemented firewall and VPN solutions (FortiGate) to protect network infrastructure and data",
          "Collaborated on security projects using Git and GitHub for version control",
        ],
      },
    ],
    location: "Playa Vista, CA",
  },
  {
    company: "American Honda Finance Corporation",
    subtitle: "(Insight Global)",
    roles: [
      {
        title: "Systems | Business Analyst",
        startDate: "Feb 2021",
        endDate: "Sep 2021",
        current: false,
        bullets: [
          "Managed user accounts, security settings, and data sharing rules to enforce access control",
          "Conducted data analysis and executed reports to coordinate incident response strategies and enterprise-wide drills",
          "Orchestrated the advancement and deployment of business continuity and crisis management protocols",
        ],
      },
    ],
    location: "Torrance, CA",
  },
];

export const skills = [
  {
    category: "Cloud Engineering",
    items: ["AWS (IAM, EC2, VPC, S3, Lambda, Route 53, KMS, CloudTrail)", "GCP"],
    icon: "cloud",
  },
  {
    category: "Languages / SWE",
    items: ["Python", "Go", "Bash", "JavaScript", "C/C++", "SQL"],
    icon: "code",
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "CloudFormation"],
    icon: "server",
  },
  {
    category: "Automation / CI/CD",
    items: ["Jenkins", "AWS Lambda", "GitHub Actions", "Bash", "PowerShell"],
    icon: "gear",
  },
  {
    category: "Systems Security",
    items: ["Docker", "Kubernetes (CKA)", "Azure"],
    icon: "shield",
  },
  {
    category: "Vuln Assessment",
    items: ["Tenable/Nessus", "Rapid7", "Checkmarx (SAST)", "Burpsuite", "OWASP ZAP", "WIZ", "Nmap"],
    icon: "scan",
  },
  {
    category: "Threat Modeling",
    items: ["MITRE ATT&CK", "OWASP Top 10", "AI/ML Security", "Prompt Injection", "Data Poisoning"],
    icon: "target",
  },
  {
    category: "Monitoring / SIEM",
    items: ["Splunk", "Grafana", "AlertLogic", "Jira", "Confluence"],
    icon: "monitor",
  },
];

export const projects = [
  {
    title: "Enterprise Static Analysis & Distributed Security Architecture",
    tech: "System Design, DevSecOps",
    period: "2025–2026",
    description:
      "Distributed static analysis service for 400+ repositories with fault-tolerant scanning fleet and language-agnostic sink detection.",
    bullets: [
      'Built a distributed static analysis service using a "Reference Mirror" pattern to cut network I/O by 99% for massive monorepos',
      "Wrote a language-agnostic sink detection engine mapping framework calls to OS primitives, achieving 100% coverage across Python, Go, Java, and Node.js",
      "Designed a fault-tolerant scanning fleet with queue segmentation and failover, meeting 4-hour SLAs",
    ],
    tags: ["System Design", "DevSecOps", "Distributed Systems"],
  },
  {
    title: "RAG / CVE Exploitability Analyzer",
    tech: "Vector DBs, Nomic Embed, LLMs, AI/ML, Python, ChromaDB",
    period: "2025–2026",
    description:
      "Security tool that assesses real-world CVE exploitability using AI/ML techniques with a RAG architecture (Ollama + ChromaDB) to reason over threat intelligence.",
    bullets: [
      "Designed a multi-LLM agentic framework with specialized agents for vulnerability analysis and exploit assessment",
      "Implemented Data Retrieval, Vulnerability Analysis, and Exploit Assessment agents pulling from NVD, MITRE, CISA KEV, and Exploit-DB",
      "Integrated a Streamlit frontend for workflow orchestration, managing data ingestion, vector store building, and LLM-based analysis",
    ],
    tags: ["AI/ML", "RAG", "Python", "Security"],
  },
  {
    title: "Dynamic Findings Workflow: Automation & Secure CI/CD",
    tech: "GitLab, CI/CD, FaaS, API Security",
    period: "2024–2025",
    description:
      "Serverless application automating retrieval, processing, and dynamic severity reassignment of security findings from Jira via API queries.",
    bullets: [
      "Developed and deployed a serverless app using Python on a Lambda-like FaaS platform",
      "Integrated with CI/CD pipelines for seamless updates and secure deployments",
      "Analyzed environmental risk and exposure to improve security posture for distributed systems",
    ],
    tags: ["CI/CD", "Serverless", "Python", "Automation"],
  },
];

export const certifications = [
  { name: "OSCP", issuer: "Offensive Security", status: "In Progress" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon", status: "Certified" },
  { name: "Security+", issuer: "CompTIA", status: "Certified" },
  { name: "Linux+", issuer: "CompTIA", status: "Certified" },
  { name: "eCornell Python Programming", issuer: "Cornell", status: "Certified" },
  { name: "CKA: Certified Kubernetes Administrator", issuer: "Linux Foundation", status: "Certified" },
];

export const education = {
  school: "Loyola Marymount University",
  location: "Los Angeles, CA",
  degree: "B.A. with Minor in Computer Science",
  startDate: "Aug 2016",
  endDate: "Dec 2020",
};
