import {
  Search, Zap, Shield, Database, Network,
  FileText, BellRing, Code, Sigma, MailWarning,
  Target, FileSearch2, Cable, Siren, Activity, GlobeLock, BrickWallFire,
  Globe, ChevronsLeftRightEllipsis, Terminal,
  Eye, Command, Regex,
  Users2, BrainCircuit, GitBranch, Link, Lock, ListOrdered, ShieldCheck, Trophy, LifeBuoy, List
} from 'lucide-react';

import collegeImg from "../assets/education/gtn.png";
import honeypotImg from "../assets/projects/honeypot.webp";
import logParserImg from "../assets/projects/log-parser.webp";
import phishingDetectorImg from "../assets/projects/phishing-detector.webp";
import passwordCheckerImg from "../assets/projects/password-strength-checker.webp";
import sensiemImg from "../assets/projects/sensiem.webp";

import googleCyb from "../assets/certificates/google_cybersecurity.webp";
import internshalaEth from "../assets/certificates/internshala_nsdc.webp";
import splunkUdemy from "../assets/certificates/Udemy_Splunk.webp";
import ibmCyb from "../assets/certificates/ibm_cybersecurity.webp";

export const Bio = {
  name: "Chandraprakash",
  roles: [
    "SOC Analyst",
    "Security Researcher",
    "Threat Hunter",
  ],
  tagline: "I detect, investigate, and respond.",
  description:
    "Final-year CS student who builds detection systems, writes custom SIEM rules, and hunts threats in lab environments. " +
    "Completed 200+ TryHackMe rooms. Built 5 security tools. " +
    "Pursuing SOC Analyst roles where I can turn alerts into answers.",
  github: "https://github.com/chandruthehacker",
  resume:
    "https://drive.google.com/file/d/1uvc_fGkEsu40CfaoMggKwQcCT0Ar4rPX/view?usp=sharing",
  gmail: "cyberchandru87@gmail.com",
  phone: "+919786475035",
  linkedin: "https://www.linkedin.com/in/chandraprakash-soc/",
  twitter: "https://x.com/cyberchandru",
  telegram: "https://t.me/chandruthehacker",
  insta: "https://www.instagram.com/cyberchandru",
  facebook: "https://www.facebook.com/chandru87125",
  whatsapp: "https://wa.me/919786475035",
};

export const stats = [
  { value: "200+", label: "Labs Completed" },
  { value: "5", label: "Projects Built" },
  { value: "4", label: "Certifications" },
  { value: "35+", label: "Detection Rules" },
];

export const aboutHighlights = [
  {
    icon: "🔍",
    label: "200+ TryHackMe rooms completed",
    detail: "SOC L1 path, Pre-Security, Cyber Defense",
  },
  {
    icon: "🛠️",
    label: "5 security projects built and documented",
    detail: "SIEM platform, honeypot, phishing analyzer, log parser",
  },
  {
    icon: "📜",
    label: "4 certifications earned",
    detail: "Google Cybersecurity, IBM, Splunk, Ethical Hacking",
  },
  {
    icon: "🎯",
    label: "Target role: SOC Analyst / Security Operations",
    detail: "Available from 2025",
  },
];

export const skills = [
  {
    title: "SOC Core Tools",
    skills: [
      { name: "Splunk", icon: <Search color="#29bd00" /> },
      { name: "Microsoft Sentinel", icon: <Shield color="#4caf50" /> },
      { name: "ELK Stack", icon: <Database color="#673ab7" /> },
      { name: "Wazuh", icon: <Shield color="#9c27b0" /> },
      { name: "Zeek", icon: <Network color="#3f51b5" /> },
      { name: "Suricata IDS", icon: <Siren color="#ff1744" /> }
    ]
  },
  {
    title: "Incident Response",
    skills: [
      { name: "Alert Triage", icon: <BellRing color="#f44336" /> },
      { name: "MITRE ATT&CK", icon: <Target color="#cddc39" /> },
      { name: "Phishing Analysis", icon: <MailWarning color="#009688" /> },
      { name: "IOC Analysis", icon: <FileSearch2 color="#4caf50" /> },
      { name: "EDR Tools", icon: <Eye color="#2e7d32" /> },
      { name: "NIST IR Lifecycle", icon: <LifeBuoy color="#00bcd4" /> }
    ]
  },
  {
    title: "Network Defense",
    skills: [
      { name: "Wireshark", icon: <Activity color="#00e676" /> },
      { name: "TCP/IP Analysis", icon: <Cable color="#00acc1" /> },
      { name: "Firewall Logs", icon: <BrickWallFire color="#ef6c00" /> },
      { name: "NetFlow", icon: <ChevronsLeftRightEllipsis color="#c2185b" /> },
      { name: "VPN Monitoring", icon: <GlobeLock color="#7c4dff" /> },
      { name: "Nmap", icon: <Eye color="#26a69a" /> }
    ]
  },
  {
    title: "Threat Detection",
    skills: [
      { name: "Sigma Rules", icon: <Sigma color="#3f51b5" /> },
      { name: "YARA Rules", icon: <Code color="#ff9800" /> },
      { name: "SIEM Querying", icon: <FileSearch2 color="#2196f3" /> },
      { name: "OSINT", icon: <Globe color="#2196f3" /> },
      { name: "Log Analysis", icon: <FileText color="#ff5722" /> },
      { name: "Regex", icon: <Regex color="#ff7043" /> }
    ],
  },
  {
    title: "Automation & Scripting",
    skills: [
      { name: "Python", icon: <BrainCircuit color="#ffd600" /> },
      { name: "Bash", icon: <Terminal color="#455a64" /> },
      { name: "PowerShell", icon: <Command color="#00838f" /> },
      { name: "SOAR Basics", icon: <Zap color="#ff9800" /> },
      { name: "API Integration", icon: <Link color="#90a4ae" /> },
      { name: "Git", icon: <GitBranch color="#e64a19" /> }
    ]
  },
  {
    title: "Security Fundamentals",
    skills: [
      { name: "Windows Event Logs", icon: <List color="#2962ff" /> },
      { name: "Linux Auditing", icon: <ShieldCheck color="#c51162" /> },
      { name: "Active Directory", icon: <Users2 color="#00c853" /> },
      { name: "OWASP Top 10", icon: <ListOrdered color="#5c6bc0" /> },
      { name: "Encryption", icon: <Lock color="#1e88e5" /> },
      { name: "CTF Experience", icon: <Trophy color="#fdd835" /> }
    ]
  }
];

export const projects = [
  {
    id: 0,
    title: "SenSIEM",
    subtitle: "Open-Source SIEM & Alerting Platform",
    date: "2025",
    category: "defensive",
    summary:
      "Built a lightweight open-source SIEM with FastAPI and Next.js. Real-time log ingestion, 35+ detection rules, Splunk-style search, and multi-channel alerting via Email, Slack, and Telegram.",
    image: sensiemImg,
    tags: ["FastAPI", "SQLite", "Next.js", "WebSockets", "SIEM"],
    metrics: [
      { value: "35+", label: "Detection Rules" },
      { value: "3", label: "Alert Channels" },
    ],
    github: "https://github.com/chandruthehacker/SenSIEM",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/sensiem/sensiem.html",
    detail: {
      tldr:
        "Built SenSIEM — a self-hosted SIEM platform with real-time log ingestion, 35+ pre-built detection rules, a Splunk-inspired search page, and alert dashboards. Processes Apache, SSH, syslog, and Windows Event Log sources.",
      problem:
        "Commercial SIEMs cost thousands per month. Students and small security teams need a free, self-hosted solution that covers real SOC workflows: log ingestion, search, alerting, and dashboards — without enterprise overhead.",
      approach: [
        "Designed a FastAPI backend with WebSocket support for live log streaming to the frontend",
        "Built 35+ detection rules targeting brute-force, port scans, suspicious logins, and privilege escalation",
        "Created a Splunk-inspired search page with advanced filters (index, source, log level, time range) and saved searches",
        "Built alert management: create, acknowledge, resolve with full audit trail",
        "Integrated Email, Slack, and Telegram notification channels for alert dispatch",
      ],
      logs: `[ALERT] 2024-01-15 03:22:11 - BRUTE_FORCE detected: 192.168.1.45
[RULE] ssh_brute_force_v2 triggered (severity: HIGH)
[DETAIL] 8 failed login attempts in 60 seconds
[ACTION] Alert #247 created → Slack notification dispatched

[SEARCH] SPL: index="auth" sourcetype="syslog" event_type="FAILED_LOGIN"
         | stats count by src_ip
         | where count > 5`,
      results: [
        "35+ detection rules covering SSH, HTTP, Windows, and syslog sources",
        "Splunk-style search with saved queries and time-range filtering",
        "Multi-channel alerting: Email, Slack, Telegram",
        "Dashboard with geo-map, top IPs, log trends, and error rate panels",
      ],
    },
  },
  {
    id: 1,
    title: "AI Phishing Email Detector",
    subtitle: "NLP-powered Email Threat Classification",
    date: "2025",
    category: "forensics",
    summary:
      "Python tool using Google Generative AI to classify phishing emails. Analyzes headers, subject, and body for malicious indicators. 90% accuracy on 100+ real phishing samples, 20% fewer false positives vs keyword-only filters.",
    image: phishingDetectorImg,
    tags: ["Python", "Google Gemini API", "NLP", "Email Security"],
    metrics: [
      { value: "90%", label: "Detection Accuracy" },
      { value: "20%", label: "False Positive Reduction" },
    ],
    github: "https://github.com/chandruthehacker/phishing-email-detector",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/phising-email-detector/phising-email-detector.html",
    detail: {
      tldr:
        "Built a Python tool that extracts email content via Gmail API / IMAP, submits it to Google Generative AI for phishing classification, and flags suspicious patterns. Achieved 90% accuracy with 20% fewer false positives compared to keyword-only approaches.",
      problem:
        "Traditional keyword-based phishing detectors produce too many false positives and miss sophisticated attacks using context-appropriate language. A semantic understanding of email intent is needed.",
      approach: [
        "Built email extraction via Gmail API and raw IMAP for flexible input",
        "Parsed email headers, subject, and body to construct a structured prompt",
        "Sent content to Google Generative AI with a security-focused classification prompt",
        "Applied secondary keyword filter for urgency/scare tactics to boost accuracy",
        "Tested against 100+ real phishing samples from public phishing datasets",
      ],
      logs: `[SCAN] From: support@paypa1-security.com
       Subject: Urgent: Account Suspended - Action Required
[AI]   Analysis: HIGH RISK - Spoofed domain, urgency framing, credential harvesting link detected
[RULE] urgency_keywords matched: ["suspended", "immediate", "verify now"]
[OUT]  Classification: PHISHING (confidence: 0.94)
[ACT]  Alert raised → email quarantined`,
      results: [
        "90% detection accuracy tested on 100+ phishing samples",
        "20% fewer false positives vs keyword-only baseline",
        "Detects domain spoofing, urgency framing, and credential harvesting patterns",
        "Supports Gmail API and raw IMAP for flexible deployment",
      ],
    },
  },
  {
    id: 2,
    title: "Log Analysis Tool",
    subtitle: "CLI Threat Detection from Raw Log Files",
    date: "2025",
    category: "automation",
    summary:
      "CLI tool that auto-detects Apache, Nginx, SSH, and syslog formats. Identifies brute-force, geo-anomalies, and suspicious sudo activity. Detected 90% of attacks vs 70% manual — 60% faster analysis.",
    image: logParserImg,
    tags: ["Python", "Pandas", "Regex", "Log Analysis"],
    metrics: [
      { value: "60%", label: "Faster Analysis" },
      { value: "90%", label: "Detection Rate" },
    ],
    github: "https://github.com/chandruthehacker/log-parser",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/log-analysis/log-analysis.html",
    detail: {
      tldr:
        "A Python CLI tool that auto-detects log format (Apache, Nginx, SSH, syslog), applies threat detection rules, and outputs structured reports as CSV or charts. Detected 90% of simulated attacks vs 70% manual review, 60% faster.",
      problem:
        "Log files from different sources use different formats. Manual review is slow and misses patterns spread across thousands of lines. A tool that normalizes, parses, and applies threat detection rules automatically is essential.",
      approach: [
        "Built auto-detection for Apache/Nginx access logs, auth.log, and syslog formats",
        "Used regex-based parsing with Pandas for fast extraction of IPs, timestamps, and events",
        "Implemented threat detection rules: brute-force (>5 failures in 5 min), odd-hour logins, geo anomalies",
        "Added customizable thresholds via CLI flags",
        "Output reports as CSV for SIEM ingestion or Matplotlib charts for visualization",
      ],
      logs: `$ python log_parser.py --file auth.log --threshold 5
[INFO] Detected format: SSH auth log
[PARSE] 12,847 lines processed in 1.2s
[ALERT] Brute-force: 192.168.1.22 — 47 failed attempts (03:11–03:14)
[ALERT] Odd-hour login: user=admin from 45.33.32.156 at 02:47 UTC
[ALERT] Geo anomaly: unexpected login from CN (user: dev_user)
[OUT]   Report exported → threat_report_2024-01-15.csv`,
      results: [
        "90% detection rate vs 70% manual review on 100+ real-world log files",
        "60% reduction in analysis time compared to manual processes",
        "Supports Apache, Nginx, SSH, and syslog formats with auto-detection",
        "CSV and Excel output for SIEM integration",
      ],
    },
  },
  {
    id: 3,
    title: "HoneyAuth",
    subtitle: "Decoy Login Honeypot for Attacker Intelligence",
    date: "2025",
    category: "defensive",
    summary:
      "Deployed a Flask-based decoy login portal in a VM. Captured 200+ malicious attempts over 2 weeks. Mapped threats from 12 countries, identified 3 distinct attack patterns including credential stuffing.",
    image: honeypotImg,
    tags: ["Python", "Flask", "GeoIP", "Deception Tech"],
    metrics: [
      { value: "200+", label: "Attacks Captured" },
      { value: "12", label: "Countries Tracked" },
    ],
    github: "https://github.com/chandruthehacker/honeypot",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/honeypot/honeypot.html",
    detail: {
      tldr:
        "Deployed a realistic fake admin login portal with Flask. Logged attacker IPs, user agents, browser fingerprints, and submitted credentials. Captured 200+ attempts in 14 days, mapped to 12 countries, and identified credential stuffing, dictionary attacks, and targeted probing.",
      problem:
        "Home lab networks have no insight into what attackers do when they find an exposed service. A deception-based sensor can passively collect real attacker TTPs and credential lists without any risk.",
      approach: [
        "Built a realistic fake admin portal with HTML/CSS indistinguishable from real admin panels",
        "Captured all form submissions: username, password, browser fingerprint, and timing",
        "Logged requester IP, user agent, and geolocation via free GeoIP API",
        "Stored all events in SQLite and generated daily threat reports",
        "Ran for 14 days on a public-facing VM with no active services exposed",
      ],
      logs: `[HIT] 2024-02-03 04:11:09 | IP: 45.142.212.100 | Country: RU
       Username: admin | Password: admin123
       UA: curl/7.68.0 | Pattern: DICT_ATTACK

[HIT] 2024-02-03 04:11:12 | IP: 45.142.212.100
       Username: administrator | Password: password
       [PATTERN] 34 attempts in 3 min → BRUTE_FORCE flagged

[REPORT] 14-day summary:
         Total hits: 213 | Unique IPs: 87
         Countries: RU, CN, US, DE, BR... (12 total)
         Top pattern: Dictionary attack (67%)`,
      results: [
        "213 malicious attempts captured over 14 days from 87 unique IPs",
        "Threats mapped to 12 countries — 85% from unexpected regions",
        "3 distinct attack patterns: credential stuffing, dictionary attack, targeted probing",
        "Exported attacker credential list and IP blocklist for threat intel use",
      ],
    },
  },
  {
    id: 4,
    title: "Password Strength Checker",
    subtitle: "Real-time Credential Security Analyzer",
    date: "2025",
    category: "automation",
    summary:
      "Browser-based password analyzer with real-time entropy scoring and actionable feedback. Detects weak patterns, dictionary words, and character class gaps. 100% accuracy identifying weak passwords across 100+ samples.",
    image: passwordCheckerImg,
    tags: ["JavaScript", "HTML/CSS", "Entropy Analysis"],
    metrics: [
      { value: "100%", label: "Weak Detection Rate" },
      { value: "100+", label: "Samples Tested" },
    ],
    github: "https://github.com/chandruthehacker/password-strength-checker",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/password-checker/password-checker.html",
    detail: {
      tldr:
        "A client-side password strength analyzer that calculates entropy, detects common patterns and dictionary words, and provides color-coded feedback (Weak / Moderate / Strong). No backend, no data sent anywhere.",
      problem:
        "Users consistently choose weak passwords because standard form validation only checks length. A tool that explains why a password is weak — and shows how to improve it — drives better security behavior.",
      approach: [
        "Built entropy calculation from character set size and password length",
        "Added pattern detection for sequential characters, keyboard walks, and repeated chars",
        "Integrated a common password word list check for dictionary attacks",
        "Displayed dynamic progress bar and tiered feedback (Weak / Moderate / Strong / Very Strong)",
        "Tested against NIST SP 800-63B password guidelines for accuracy",
      ],
      logs: `Input: "password123"
[CHECK] Length: 11 ✓ | Uppercase: ✗ | Symbols: ✗
[CHECK] Dictionary match: "password" → COMMON_WORD flagged
[SCORE] Entropy: 28.5 bits — WEAK
[TIPS]  Add uppercase letters, add symbols, avoid dictionary words

Input: "P@ssw0rd!2024"
[CHECK] Length: 13 ✓ | Upper ✓ | Lower ✓ | Symbol ✓ | Number ✓
[SCORE] Entropy: 71.2 bits — STRONG`,
      results: [
        "100% accuracy detecting weak passwords across 100+ test samples",
        "Covers dictionary attacks, sequential patterns, and entropy scoring",
        "Fully client-side — no password data leaves the browser",
        "Used in security awareness demos to improve password hygiene",
      ],
    },
  },
];

export const certificates = [
  {
    id: 0,
    issuer: "IBM",
    title: "Cybersecurity Fundamentals",
    date: "August 2025",
    skills: ["Network Security", "Threat Intelligence", "Cryptography", "Security Operations"],
    status: "VERIFIED",
    image: ibmCyb,
    link: "https://www.credly.com/badges/2d74912f-a5e5-46d1-828f-2a331e46fdb1/public_url",
  },
  {
    id: 1,
    issuer: "Google",
    title: "Cybersecurity Professional Certificate",
    date: "April 2025",
    skills: ["SIEM Tools", "Incident Response", "Python Automation", "Network Analysis", "Risk Management"],
    status: "VERIFIED",
    image: googleCyb,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TGJE3FRTFS2N",
  },
  {
    id: 2,
    issuer: "Udemy",
    title: "Splunk Core Certified User",
    date: "June 2025",
    skills: ["SPL Queries", "Dashboards", "Alert Rules", "Log Correlation", "Saved Searches"],
    status: "VERIFIED",
    image: splunkUdemy,
    link: "https://www.udemy.com/certificate/UC-d1611f48-8dbb-4c43-9bde-9c0bfd0cf47c/",
  },
  {
    id: 3,
    issuer: "Internshala / NSDC",
    title: "Ethical Hacking",
    date: "November 2024",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Kali Linux", "Network Attacks"],
    status: "VERIFIED",
    image: internshalaEth,
    link: "https://trainings.internshala.com/certificate/view/nsdc/1gvfiyruzvc/fj2c4mq927_/",
  },
];

export const education = {
  degree: "B.Sc in Computer Science",
  institution: "GTN Arts College, Dindigul",
  period: "2023 — 2026 (Expected)",
  img: collegeImg,
  relevantCoursework: [
    "Computer Networks",
    "Cryptography & Network Security",
    "Operating Systems",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Information Security",
  ],
};

export const practicalExposure = [

  {
    category: "LAB",
    title: "SOC Level 1 Analyst Path",
    platform: "TryHackMe",
    description:
      "Completed 48 rooms covering alert triage, SIEM log analysis, phishing email investigation, and endpoint detection. " +
      "Worked with Splunk SPL queries and Wireshark packet analysis across simulated enterprise scenarios. " +
      "Analyzed 200+ simulated alerts.",
    tools: ["Splunk", "Wireshark", "MITRE ATT&CK", "Sysmon"],
    date: "Jan 2024 — Mar 2024",
    proof: "https://tryhackme.com/p/chandruthehacker",
  },
  {
    category: "LAB",
    title: "Blue Team Challenges",
    platform: "CyberDefenders",
    description:
      "Completed Malware Traffic Analysis, Threat Hunting, and Log Analysis challenge sets. " +
      "Parsed pcap files for C2 traffic patterns. Correlated IOCs against AlienVault OTX and VirusTotal threat intelligence feeds.",
    tools: ["Wireshark", "VirusTotal", "AlienVault OTX", "Volatility"],
    date: "Ongoing",
    proof: null,
  }
];
