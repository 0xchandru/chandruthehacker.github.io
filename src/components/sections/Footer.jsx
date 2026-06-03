import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  padding: 40px 24px;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.accent};
  font-family: monospace;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  opacity: 0.6;
  margin: 0;
`;

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>&gt; 0xchandru</Logo>
        <Nav>
          {[
            { label: "About", id: "About" },
            { label: "Skills", id: "Skills" },
            { label: "Education", id: "Education" },
            { label: "Experience", id: "Exposure" },
            { label: "Projects", id: "Projects" },
            { label: "Certifications", id: "Certificates" },
            { label: "Contact", id: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
            >
              {link.label}
            </NavLink>
          ))}
        </Nav>
        <Copyright>&copy; {new Date().getFullYear()} Chandraprakash C. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
