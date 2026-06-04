# Cybersecurity Portfolio - Chandraprakash

A clean, recruiter-focused cybersecurity portfolio for a B.Sc Computer Science graduate. Fully redesigned from a generic dev portfolio into a structured, professional security profile with MITRE-style UI patterns, terminal log blocks, category badges, and zero `dangerouslySetInnerHTML`.

## Tech Stack

- **Frontend**: React 18 (JSX + TSX)
- **Build System**: CRACO (Create React App Configuration Override) over react-scripts
- **Styling**: styled-components with dark/light theme via ThemeProvider
- **Animations**: Framer Motion (fadeInUp, staggerContainer)
- **Forms**: @emailjs/browser (Contact section, service_j8n2w7r / template_k34okyh)
- **Meta**: react-helmet

## Key Design Decisions

- **No react-router-dom / BrowserRouter**: Navigation uses plain anchor `href` + `scrollIntoView`
- **No react-scroll**: Removed entirely
- **No dangerouslySetInnerHTML**: All project content is structured JSX data objects
- **No react-tilt**: Replaced with CSS hover transforms
- **Accent color**: `#00ff88` (dark mode), `#00cc6a` (light mode) — terminal green
- **Project categories**: `defensive`, `forensics`, `automation`

## Project Structure

```
src/
  App.jsx          - Main app entry (ThemeProvider, lazy-loaded sections, modal state)
  index.js         - React DOM render entry
  components/
    cards/
      ProjectCard.jsx       - Project card with category overlay + metric badges
      CertificateCard.jsx   - Certificate card with issuer/skills/status/verify UI
    sections/
      Hero.jsx              - Stats bar, typewriter, gradient profile border
      Skills.tsx            - Motion-animated skill cards by domain
      Education.jsx         - Single card with coursework chips
      PracticalExposure.jsx - Vertical timeline with LAB/SIMULATION/COMPETITION badges
      Projects.jsx          - Project grid
      Certificates.jsx      - Stacked certificate list
      Contact.jsx           - EmailJS contact form (unchanged)
      Footer.jsx            - Minimal nav footer
    Dialog/
      ProjectDetails.jsx    - Structured modal report (no innerHTML), green terminal log block
    Navbar.jsx              - Terminal-style logo, nav links, green Resume button, mobile menu
    CyberPreloader.tsx      - Custom loading screen (1800ms)
    Toggle/                 - Dark mode switch
  data/
    constants.jsx  - All content: Bio, stats, skills, projects (structured detail objects),
                     certificates (skills/status/verify), education, practicalExposure
  utils/
    Themes.js      - Theme definitions (accent, textPrimary, cardBorder aliases added)
    motion.js      - Simplified: fadeInUp, staggerContainer only
  assets/          - Images (certificates, education, icons, profile, projects)
public/            - Static assets and index.html
```

## Running the App

Workflow: "Start application"
```
PORT=5000 HOST=0.0.0.0 DANGEROUSLY_DISABLE_HOST_CHECK=true npm run start
```

## Deployment

Static site:
- Build command: `npm run build`
- Public directory: `build`

## Known Non-Issues

- `UNSAFE_componentWillMount` warning: from react-helmet (SideEffect), third-party, unfixable without replacing the library
- react-scroll is installed as a package dependency but not imported anywhere in source
