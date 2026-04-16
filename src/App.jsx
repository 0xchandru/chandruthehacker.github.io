import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero.jsx";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import CyberPreloader from './components/CyberPreloader.tsx';

// Lazy-loaded sections
const Skills = React.lazy(() => import("./components/sections/Skills.tsx"));
const Experience = React.lazy(() =>
  import("./components/sections/Experience.jsx")
);
const Projects = React.lazy(() => import("./components/sections/Projects.jsx"));
const Contact = React.lazy(() => import("./components/sections/Contact.jsx"));
const Footer = React.lazy(() => import("./components/sections/Footer.jsx"));
const Certificates = React.lazy(() =>
  import("./components/sections/Certificates.jsx")
);
const ProjectDetails = React.lazy(() =>
  import("./components/Dialog/ProjectDetails.jsx")
);
// const HandsOn = React.lazy(() => import("./components/sections/HandsOn.jsx"));



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
  transition: background-color 0.25s ease-in-out;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");

  if (stored === "dark" || stored === "light") return stored;

  // Optional: follow system preference
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? "dark" : "light";
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
      <BrowserRouter>
        {!preloaderDone ? (
          <CyberPreloader onComplete={() => setPreloaderDone(true)} />
        ) : (
          <>
            <Helmet>
          {/* Basic Meta */}
          <title>Chandraprakash | Cybersecurity Portfolio</title>
          <meta
            name="description"
            content="Hi, I'm Chandraprakash — an aspiring SOC Analyst passionate about cybersecurity. Explore real-world projects like honeypots, phishing detectors, and log analysis tools built using Python and Flask."
          />
          <meta
            name="keywords"
            content="Chandraprakash, Cybersecurity Portfolio, Security Analyst, SOC Analyst, SIEM, Splunk, Phishing Detection, Threat Hunting, Log Analysis, Blue Team, InfoSec, Network Security, TryHackMe, India"
          />
          <meta name="author" content="Chandraprakash C" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#0f172a" />
          <link rel="canonical" href="https://chandruthehacker.github.io/" />

          {/* Manifest & Favicon */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-192x192.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-512x512.png"
            sizes="512x512"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            sizes="180x180"
          />

          {/* Open Graph (Facebook/LinkedIn) */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://chandruthehacker.github.io/"
          />
          <meta
            property="og:title"
            content="Chandraprakash | Cybersecurity Portfolio"
          />
          <meta
            property="og:description"
            content="Cybersecurity portfolio of Chandraprakash – featuring real-world projects in log analysis, phishing detection, and threat response."
          />
          <meta
            property="og:image"
            content="https://chandruthehacker.github.io/og-image-cybersecurity.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@chandruthehacker" />
          <meta name="twitter:creator" content="@chandruthehacker" />
          <meta
            name="twitter:url"
            content="https://chandruthehacker.github.io/"
          />
          <meta
            name="twitter:title"
            content="Chandraprakash | Cybersecurity Portfolio"
          />
          <meta
            name="twitter:description"
            content="Projects in phishing detection, threat hunting, log monitoring, and SIEM tools. Portfolio of an aspiring Security & SOC Analyst."
          />
          <meta
            name="twitter:image"
            content="https://chandruthehacker.github.io/og-image-cybersecurity.jpg"
          />
        </Helmet>

            <Navbar />
            <Body>
              <AnimatePresence>
                <Hero />

                <Suspense fallback={<div>Loading Skills...</div>}>
                  <Wrapper><Skills /></Wrapper>
                </Suspense>

                <Suspense fallback={<div>Loading Experience...</div>}>
                  <Experience />
                </Suspense>

                <Suspense fallback={<div>Loading Projects & Certificates...</div>}>
                  <Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Certificates openModal={openModal} setOpenModal={setOpenModal} />
                  </Wrapper>
                </Suspense>

                <Suspense fallback={<div>Loading Labs & Contact...</div>}>
                  <Wrapper>
                    {/* <HandsOn /> */}
                    <Contact />
                  </Wrapper>
                </Suspense>

                <Suspense fallback={<div>Loading Footer...</div>}>
                  <Wrapper><Footer /></Wrapper>
                </Suspense>

                {openModal.state && (
                  <Suspense fallback={<div>Loading Project Details...</div>}>
                    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                  </Suspense>
                )}
              </AnimatePresence>
            </Body>
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
