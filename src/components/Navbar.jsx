import React, { useState, useEffect  } from "react";
import { Link as LinkR } from "react-scroll";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuRounded } from "@mui/icons-material";
import ThemeToggle from "./Toggle/DarkMode/DarkMode";


const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 20px;
  transition: box-shadow 0.3s ease, border-bottom 0.3s ease;
  -webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
  &.scrolled {
    box-shadow: 0 0 1px ${({theme})=> theme.primary};
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  height: 80px;
`;

const NavLogo = styled(LinkR).attrs(() => ({
  to: "About",
  smooth: true,
  duration: 0,
  spy: true,
  exact: "true",
  offset: -80,
}))`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  cursor: pointer;
  transition: .5s ease-in-out;
  padding: 2px 15px;
  border-radius: 30px;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;



const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 900px){
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.text_primary}40;
  }
`;


const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  height: 100%;
  display: none;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 40px;
  list-style: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  transition: all 0.5s ease-in-out;
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <NavbarContainer>
        <Left>
          <NavLogo onClick={() =>{navigate("/");}}
          >Portfolio</NavLogo>
        </Left>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Certificates">Certificates</NavLink>
          {/* <NavLink href="#HandsOn">HandsOn</NavLink> */}
        </NavItems>

        <Right>
          <ThemeToggle />

          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded />
          </MobileIcon>
        </Right>
      </NavbarContainer>

      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <NavLink onClick={() => setIsOpen(false)} href="#About">About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Skills">Skills</NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Experience">Experience</NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Projects">Projects</NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Certificates">Certificates</NavLink>
          {/* <NavLink onClick={() => setIsOpen(false)} href="#HandsOn">HandsOn</NavLink> */}
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
