import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import { Bio, education, seo, socialLinks } from "./data/constants";

import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import CyberPreloader from './components/CyberPreloader.tsx';

const Skills = React.lazy(() => import("./components/sections/Skills.tsx"));
const Education = React.lazy(() => import("./components/sections/Education.jsx"));
const PracticalExposure = React.lazy(() => import("./components/sections/PracticalExposure.jsx"));
const Projects = React.lazy(() => import("./components/sections/Projects.jsx"));
const Contact = React.lazy(() => import("./components/sections/Contact.jsx"));
const Footer = React.lazy(() => import("./components/sections/Footer.jsx"));
const Certificates = React.lazy(() => import("./components/sections/Certificates.jsx"));
const ProjectDetails = React.lazy(() => import("./components/Dialog/ProjectDetails.jsx"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
  transition: background-color 0.25s ease-in-out;
`;

const SectionDivider = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.cardBorder},
    transparent
  );
`;

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return "dark";
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: Bio.name,
  jobTitle: "Cybersecurity Graduate",
  description: Bio.description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
  },
  url: "https://chandruthehacker.github.io/",
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.x,
    socialLinks.telegram,
    socialLinks.instagram,
    socialLinks.reddit,
    socialLinks.medium,
    socialLinks.hackTheBox,
    socialLinks.tryHackMe,
  ],
  knowsAbout: [
    "SOC Operations",
    "Incident Response",
    "Threat Detection",
    "SIEM",
    "Log Analysis",
    "Security Automation",
    "TryHackMe",
  ],
};

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [themeMode, setThemeMode] = useState(getInitialTheme);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.body.getAttribute("data-theme");
      setThemeMode(newTheme === "light" ? "light" : "dark");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      {!preloaderDone ? (
        <CyberPreloader onComplete={() => setPreloaderDone(true)} />
      ) : (
        <>
          <Helmet>
            <title>{seo.title}</title>
            <meta
              name="description"
              content={seo.description}
            />
            <meta
              name="keywords"
              content={seo.keywords}
            />
            <meta name="author" content="Chandraprakash C" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#090917" />
            <link rel="canonical" href="https://chandruthehacker.github.io/" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://chandruthehacker.github.io/" />
            <meta property="og:title" content={seo.ogTitle} />
            <meta property="og:description" content={seo.ogDescription} />
            <meta property="og:image" content="https://chandruthehacker.github.io/og-image-cybersecurity.jpg" />
            <meta property="og:site_name" content="Chandraprakash Cybersecurity Portfolio" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitterCreator} />
            <meta name="twitter:title" content={seo.ogTitle} />
            <meta name="twitter:description" content={seo.ogDescription} />
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>

          <Navbar />
          <Body>
              <Hero />

              <Suspense fallback={null}>
                <Skills />
              </Suspense>

              <Suspense fallback={null}>
                <Education />
              </Suspense>

              <Suspense fallback={null}>
                <PracticalExposure />
              </Suspense>

              <Suspense fallback={null}>
                <Projects openModal={openModal} setOpenModal={setOpenModal} />
              </Suspense>

              <Suspense fallback={null}>
                <Certificates />
              </Suspense>

              <Suspense fallback={null}>
                <SectionDivider />
                <Contact />
              </Suspense>

              <Suspense fallback={null}>
                <Footer />
              </Suspense>

              {openModal.state && (
                <Suspense fallback={null}>
                  <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                </Suspense>
              )}
          </Body>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
