import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuRounded, Close } from "@mui/icons-material";
import ThemeToggle from "./Toggle/DarkMode/DarkMode";
import { Bio } from "../data/constants";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 24px;
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.cardBorder : "transparent"};
  transition: border-color 0.3s ease;
  user-select: none;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-family: monospace;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.85;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.accent}18;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 4px;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 8px;
  z-index: 99;
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
`;

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { label: "About", id: "About" },
    { label: "Skills", id: "Skills" },
    { label: "Education", id: "Education" },
    { label: "Projects", id: "Projects" },
    { label: "Certifications", id: "Certificates" },
  ];

  return (
    <Nav $scrolled={scrolled}>
      <NavbarContainer>
        <Logo href="#About" onClick={(e) => { e.preventDefault(); scrollTo("About"); }}>
          &gt; chandru_
        </Logo>

        <NavItems>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </NavItems>

        <Right>
          <ResumeBtn
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </ResumeBtn>
          <ThemeToggle />
          <MobileIcon
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <Close /> : <MenuRounded />}
          </MobileIcon>
        </Right>
      </NavbarContainer>

      <MobileMenu $isOpen={isOpen}>
        {navLinks.map((link) => (
          <MobileNavLink
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.id);
              setIsOpen(false);
            }}
          >
            {link.label}
          </MobileNavLink>
        ))}
        <ResumeBtn
          href={Bio.resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "16px", width: "fit-content" }}
        >
          Download Resume ↗
        </ResumeBtn>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
