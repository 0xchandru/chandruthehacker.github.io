import {
  Search, Zap, Shield, Database, Network,
  FileText, BellRing, Code, Sigma, MailWarning,
  Target, FileSearch2, Cable, Siren, Activity, GlobeLock, BrickWallFire,
  Globe, ChevronsLeftRightEllipsis, Terminal,
  Eye, Command, Regex,
  Users2, BrainCircuit, GitBranch, Link, Lock, ListOrdered, ShieldCheck, Trophy, LifeBuoy, List
} from 'lucide-react';


import collegeImg from "../assets/education/gtn.png";
// import hackerImg from "../assets/icons/hacker.png";
import internImg from "../assets/icons/internship.png";
import honeypotImg from "../assets/projects/honeypot.webp";
import logParserImg from "../assets/projects/log-parser.webp";
import phishingDetectorImg from "../assets/projects/phishing-detector.webp";
import passwordCheckerImg from "../assets/projects/password-strength-checker.webp";
import sensiemImg from "../assets/projects/sensiem.webp";

import googleCyb from "../assets/certificates/google_cybersecurity.webp";
import internshalaEth from "../assets/certificates/internshala_nsdc.webp";
import splunkUdemy from "../assets/certificates/Udemy_Splunk.webp";
import ibmCyb from "../assets/certificates/ibm_cybersecurity.webp";

export const blogPortfolio = "portfolio-website-old";

export const Bio = {
  name: "Chandrapraksh",
  roles: [
    "B.Sc CS Student",
    "Aspiring SOC Analyst",
    "Threat Hunter",
    "Security Researcher",
  ],
  description:
    "Passionate about threat detection, log analysis, and incident response. Constantly sharpening my skills through CTF challenges (TryHackMe, Hack The Box), malware analysis labs, and SIEM tools (Splunk, Wazuh). Eager to contribute to a security team by detecting and mitigating threats effectively.",
  github: "https://github.com/chandruthehacker",
  resume:
    "https://drive.google.com/file/d/1uvc_fGkEsu40CfaoMggKwQcCT0Ar4rPX/view?usp=sharing",
  gmail: "cyberchandru87@gmail.com",
  phone: "+919786475035",
  linkedin: "https://www.linkedin.com/in/chandraprakash87/",
  twitter: "https://x.com/cyberchandru",
  telegram: "https://t.me/chandruthehacker",
  insta: "https://www.instagram.com/cyberchandru",
  facebook: "https://www.facebook.com/chandru87125",
  whatsapp: "https://wa.me/919786475035",
};

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
      { name: "VPN Monitoring", icon: <GlobeLock color="#7c4dff" /> },
      { name: "Nmap", icon: <Eye color="#26a69a" /> },
      { name: "NetFlow", icon: <ChevronsLeftRightEllipsis color="#c2185b" /> }
    ]
  },
  {
    title: "Threat Detection",
    skills: [
      { name: "Sigma Rules", icon: <Sigma color="#3f51b5" /> },
      { name: "YARA Rules", icon: <Code color="#ff9800" /> },
      { name: "SIEM Querying", icon: <FileSearch2 color="#2196f3" /> },
      { name: "Log Analysis", icon: <FileText color="#ff5722" /> },
      { name: "Regex", icon: <Regex color="#ff7043" /> },
      { name: "OSINT", icon: <Globe color="#2196f3" /> }
    ]
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
  title: "SenSIEM – Open-Source SIEM & Alerting Platform",
  date: "2025",
  description: `A lightweight, open-source SIEM & alerting platform for real-time log monitoring, threat detection, and alert management.

## 🛠️ Technologies  
✅ **Backend:** FastAPI, SQLite, WebSockets  
✅ **Frontend:** React (Next.js), Tailwind CSS, Lucide Icons, Recharts  

## 🧠 Key Features  
✅ Real-time log monitoring & parsing  
✅ Splunk-like search & filtering  
✅ Custom dashboards with visual insights  
✅ 35+ detection rules (brute-force, suspicious logins, port scans, etc.)  
✅ Alerts with acknowledgment & resolution workflows  
✅ Notifications via Email, Slack, Telegram  
✅ Easy log ingestion via file upload or raw text  

## 🔍 Search Page  
- Global search bar with advanced filters (\`index=""\`, \`source=""\`, keywords)  
- Time range, log level, and source filters  
- Save Search feature for reusability  
- Instant filtering within results  

## 📊 Dashboards Page  
- Overview cards: Total Logs Today, Active Alerts, Error Rate, Source Activity  
- Visuals: log level pie chart, top alerts, top IPs, geo-location map, log activity trends, noisy sources, system errors  

## 📄 Logs Page  
- Full raw log display (formatted JSON / key-value view)  
- Planned: Export logs, advanced filters, grouping by source/IP/process, compact/detailed toggle  

## 🚨 Alerts Page  
- Summary cards: Total, New, Acknowledged, Resolved  
- Filters: Search, Status, Severity, Type, Timestamp  
- Alert details: matched rule, source log reference, actions (Details, Acknowledge, Resolve)  

## ⚙️ Settings Page  
- Log source management via path input  
- Log ingestion: file upload, raw text paste  
- 35+ pre-built detection rules (auth, syslog, Apache, SSH, etc.)  
- Notification settings: Email, Slack, Telegram  

## 🌟 Why SenSIEM?  
- Lightweight, fast, and open-source  
- Minimal setup, beginner-friendly UI  
- Security-focused with powerful detection & alerting capabilities
`,
  image: sensiemImg,
  tags: ["FastAPI", "SQLite", "Next.js", "Tailwind CSS", "SIEM", "Cybersecurity"],
  category: "detection",
  github: `https://github.com/chandruthehacker/SenSIEM`,
  blog: `https://chandruthehacker.github.io/${blogPortfolio}/projects/all-projects/sensiem/sensiem.html`,
},
  {
    id: 1,
    title: "AI Phishing Email Detector",
    date: "2025",
    description: `Detects malicious emails using Google Generative AI
## 🛠️ Features  
✅ Scans email headers, subject, and body for phishing indicators.  
✅ Uses NLP to detect urgency/scare tactics (e.g., "Your account is locked!").  
✅ Returns a risk like (Legitimate/Phishing).  

## ⚙️ How It Works  
Extracts email text (Gmail API/IMAP).  
Sends content to Google Generative AI for analysis.  
Flags suspicious patterns (fake links, impersonation).  

## 🧪 Testing & Results  
Tested on **100+ phishing samples** (Accuracy: 90%).  
Reduced false positives by **20%** with keyword filtering.
`,
    image: phishingDetectorImg,
    tags: ["Python", "Email Security", "AI Phishing Detector"],
    category: "detection",
    github: `https://github.com/chandruthehacker/phishing-email-detector`,
    blog: `https://chandruthehacker.github.io/${blogPortfolio}/projects/all-projects/phising-email-detector/phising-email-detector.html`,
  },
  {
    id: 2,
    title: "Log Analysis Tool",
    date: "2025",
    description: `A CLI tool to parse, analyze, and visualize security logs with threat detection.
## 🛠️ Features
✅ Automatically detects log types (Apache/Nginx/Syslog/auth.log)
✅ Parses logs using regex to extract IPs, timestamps, and events
✅ Detects brute-force SSH attacks (>5 failed logins in 5 mins)
✅ Flags suspicious sudo activity and odd-hour logins
✅ Identifies geo-based anomalies (unexpected country logins)
✅ Outputs results as CSV, Excel, or Matplotlib charts

## ⚙️ How It Works
Ingests raw log files via CLI path or drag-and-drop
Classifies log type and extracts key data using Pandas
Applies threat detection rules (customizable thresholds)
Generates reports in multiple formats:
CSV/Excel for SIEM integration
Interactive charts for attack visualization

## 🧪 Testing & Results
Tested on **100+ real-world logs** (AWS/on-prem servers)
Detected **90%** of simulated attacks vs manual review's 70%
Reduced analysis time by **60%** compared to manual processes

`,
    image: logParserImg,
    tags: ["Python", "Regex", "Pandas", "Log Analysis", "matplotlib"],
    category: "automation",
    github: "https://github.com/chandruthehacker/log-parser",
    blog: `https://chandruthehacker.github.io/${blogPortfolio}/projects/all-projects/log-analysis/log-analysis.html`,
  },
  {
    id: 3,
    title: "HoneyAuth: Decoy Login",
    date: "2025",
    description: `Deployed a honeypot in a VM to log attacker behavior by simulating vulnerable services.
## 🛠️ Features
✅ Simulates realistic login pages (Fake admin portals/OAuth)
✅ Logs attacker IPs, user agents, and timestamps
✅ Records brute-force patterns and password attempts
✅ Tracks geographical locations of malicious visitors
✅ Generates threat reports with access heatmaps

## ⚙️ How It Works
Hosts fake login interface (HTML/CSS indistinguishable from real systems)
Captures all submitted credentials (never stored/used)
Logs detailed metadata:
Browser fingerprints
Attack timing patterns
GeoIP data (via free API)

## 🔍 Outputs analysis:
Top attacker IPs
Common brute-force dictionaries
Geographic threat map

## 🧪 Testing & Results
Collected **200+ malicious** attempts during 2-week deployment
Identified **3 distinct** attack patterns (credential stuffing, dictionary attacks)
Mapped threats from **12 countries** (85% from unexpected regions)
`,
    image: honeypotImg,
    tags: ["Python", "Flask", "Security"],
    category: "detection",
    github: "https://github.com/chandruthehacker/honeypot",
    blog: `https://chandruthehacker.github.io/${blogPortfolio}/projects/all-projects/honeypot/honeypot.html`,
  },
  {
    id: 4,
    title: "Password Strength Checker",
    date: "2025",
    description: `
A responsive and interactive web tool that evaluates the strength of user-entered passwords in real time and provides actionable feedback for stronger credentials.

## 🔐 Key Features
🧠 Analyzes passwords for length, character variety, and patterns  
⚠️ Detects common weaknesses (e.g., all lowercase, repetitive chars, dictionary words)  
✅ Provides live feedback with strength levels (Weak, Moderate, Strong)  
🎨 Modern UI with animated indicators and color-coded messages  
📱 Fully responsive and optimized for both desktop and mobile

## ⚙️ How It Works
- Captures user input and evaluates against defined security rules  
- Uses JavaScript logic to calculate entropy and strength  
- Displays dynamic visual feedback using progress bars and tips  
- Built with clean HTML/CSS and efficient JS for speed and responsiveness

## 🧪 Testing & Results
🔍 Tested with **100+ real-world password samples**  
🛡️ Identified **100% weak passwords** accurately  
🚀 Enhanced user awareness about password hygiene during demos

`,
    image: passwordCheckerImg,
    tags: ["JavaScript", "HTML", "CSS", "Security", "Frontend"],
    category: "awareness",
    github: "https://github.com/chandruthehacker/password-strength-checker",
    blog: "https://chandruthehacker.github.io/portfolio-website-old/projects/all-projects/password-checker/password-checker.html",
  },
];

export const certificates = [
    {
    id: 0,
    title: "IBM",
    date: "August 2025",
    description: "Cybersecurity Fundamentals",
    image: ibmCyb,
    link: "https://www.credly.com/badges/2d74912f-a5e5-46d1-828f-2a331e46fdb1/public_url",
  },
  {
    id: 1 ,
    title: "Google",
    date: "April 2025",
    description: "Cybersecurity Proffessional",
    image: googleCyb,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/TGJE3FRTFS2N",
  },
  {
    id: 2,
    title: "Udemy",
    date: "June 2025",
    description: "Splunk Core User",
    image: splunkUdemy,
    link: "https://www.udemy.com/certificate/UC-d1611f48-8dbb-4c43-9bde-9c0bfd0cf47c/",
  },
    {
    id: 3,
    title: "Internshala",
    date: "November 2024",
    description: "Ethical Hacking",
    image: internshalaEth,
    link: "https://trainings.internshala.com/certificate/view/nsdc/1gvfiyruzvc/fj2c4mq927_/",
  },
];

export const experience = [
  {
    id: 1,
    img: collegeImg,
    heading: "B.Sc Computer Science",
    sub_heading: "GTN Arts College, Dindigul",
    date: "2023–2026",
    desc: "Final year focused on cybersecurity applications, including network security, Python scripting for log analysis, and Linux system hardening. Complemented coursework with hands-on SIEM/SOC labs and CTF challenges.",
    skills: ["Network Security", "Python", "Linux", "SIEM Basics"],
  },
  {
    id: 2,
    img: internImg,
    heading: "Cybersecurity Intern",
    sub_heading: "Elevate Labs",
    date: "June 2025 – July 2025",
    desc: "Worked on real-world SOC tasks including log analysis, alert triage, and threat detection using Splunk and ELK. Built a Python-based log parser to identify brute-force attacks, reducing false positives by 30%. Participated in simulated phishing campaigns and incident response drills.",
    skills: ["Splunk", "ELK", "Incident Response", "Python", "Phishing Analysis"],
    cert_link: "https://drive.google.com/file/d/1PxM19ue3-0FkXZVccJtcrmlvNPv-u2Ow/view?usp=sharing",
  },
];