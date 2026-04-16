import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";

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
            <title>Chandraprakash | Cybersecurity Portfolio</title>
            <meta
              name="description"
              content="Chandraprakash — SOC Analyst candidate. Builds detection systems, writes SIEM rules, and hunts threats. Explore real-world security projects."
            />
            <meta
              name="keywords"
              content="Chandraprakash, Cybersecurity Portfolio, SOC Analyst, SIEM, Splunk, Threat Detection, Log Analysis, Blue Team, InfoSec, TryHackMe"
            />
            <meta name="author" content="Chandraprakash C" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#090917" />
            <link rel="canonical" href="https://chandruthehacker.github.io/" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://chandruthehacker.github.io/" />
            <meta property="og:title" content="Chandraprakash | Cybersecurity Portfolio" />
            <meta property="og:description" content="SOC Analyst candidate. Security projects, certifications, and hands-on lab work." />
            <meta property="og:image" content="https://chandruthehacker.github.io/og-image-cybersecurity.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@chandruthehacker" />
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
