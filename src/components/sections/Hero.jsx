import React from "react";
import styled from "styled-components";
import { Bio, stats } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../assets/profile/Hero.webp";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const HeroSection = styled.section`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px 60px;
  position: relative;

  @media (max-width: 960px) {
    padding: 60px 20px 48px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Greeting = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: monospace;
`;

const Name = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 34px;
  }
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Tagline = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  letter-spacing: 0.5px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;
  margin: 4px 0 8px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: ${({ theme }) => theme.accent};
  color: #0a0a0a;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const StatBar = styled(motion.div)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  padding: 12px 20px;
  background: ${({ theme }) => theme.accent}08;
  border: 1px solid ${({ theme }) => theme.accent}18;
  border-radius: 10px;
  text-align: center;
  min-width: 100px;

  .number {
    font-size: 22px;
    font-weight: 800;
    color: ${({ theme }) => theme.accent};
    font-family: monospace;
    line-height: 1;
  }

  .label {
    font-size: 11px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const Right = styled(motion.div)`
  flex-shrink: 0;
`;

const GradientBorderWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    z-index: -1;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.accent}
    );
    background-size: 300%;
    border-radius: 50%;
    animation: gradientBorder 6s linear infinite;
    filter: blur(5px);
  }

  @keyframes gradientBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 380px;
  height: 380px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  display: block;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <HeroSection id="About">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Left variants={fadeInUp}>
          <Greeting>SOC Analyst Candidate</Greeting>
          <Name>Hi, I'm {Bio.name}</Name>

          <RoleRow>
            I am a&nbsp;
            <Accent>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                }}
              />
            </Accent>
          </RoleRow>

          <Tagline>$ {Bio.tagline}</Tagline>
          <Description>{Bio.description}</Description>

          <ButtonRow>
            <PrimaryBtn
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↗
            </PrimaryBtn>
            <SecondaryBtn
              href="#Projects"
              onClick={(e) => { e.preventDefault(); scrollTo("Projects"); }}
            >
              View Projects
            </SecondaryBtn>
          </ButtonRow>

          <StatBar variants={fadeInUp}>
            {stats.map((s, i) => (
              <StatItem key={i}>
                <div className="number">{s.value}</div>
                <div className="label">{s.label}</div>
              </StatItem>
            ))}
          </StatBar>
        </Left>

        <Right variants={fadeInUp}>
          <Tilt options={{ max: 12, scale: 1.02 }}>
            <GradientBorderWrapper>
              <ProfileImg src={HeroImg} alt="Chandraprakash" loading="eager" />
            </GradientBorderWrapper>
          </Tilt>
        </Right>
      </Inner>
    </HeroSection>
  );
};

export default Hero;
