# Cybersecurity Portfolio - Chandraprakash

A modern, responsive single-page portfolio web application for a cybersecurity enthusiast and aspiring SOC Analyst.

## Tech Stack

- **Frontend**: React 18 (JSX + TSX)
- **Build System**: CRACO (Create React App Configuration Override) over react-scripts
- **Styling**: styled-components, Tailwind CSS v4, Emotion, Material UI
- **Animations**: Framer Motion, react-tilt
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Routing**: react-router-dom
- **Forms**: @emailjs/browser

## Project Structure

```
src/
  App.jsx          - Main app entry, theme/routing setup
  index.js         - React DOM render entry
  components/
    cards/         - Reusable card components (projects, certificates)
    sections/      - Page sections (Hero, Skills, Experience, Projects, Certificates, Contact)
    Dialog/        - Modal components for project details
    Toggle/        - Dark mode switch
    CyberPreloader.tsx - Custom loading screen
  data/
    constants.jsx  - All content data (skills, projects, etc.)
  utils/
    Themes.js      - Theme definitions
    motion.js      - Animation configurations
  assets/          - Images (certificates, education, icons, profile, projects)
public/            - Static assets and index.html
```

## Running the App

The app runs on port 5000 using the workflow "Start application":
```
PORT=5000 HOST=0.0.0.0 DANGEROUSLY_DISABLE_HOST_CHECK=true npm run start
```

## Deployment

Configured as a static site:
- Build command: `npm run build`
- Public directory: `build`
