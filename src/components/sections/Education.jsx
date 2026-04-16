import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { education } from "../../data/constants";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  padding: 32px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  max-width: 680px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}30;
    transform: translateY(-3px);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`;

const Info = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 4px;
`;

const Institution = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  margin: 0 0 4px;
`;

const Period = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  margin: 0 0 20px;
`;

const HighlightsLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 10px;
`;

const HighlightList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 560px) {
    align-items: center;
  }
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;

  &::before {
    content: "▸";
    color: ${({ theme }) => theme.accent};
    font-size: 11px;
    flex-shrink: 0;
  }
`;

const keyHighlights = [
  "Cryptography & Network Security",
  "Operating Systems & Linux Administration",
  "Information Security & Database Management",
];

const Education = () => {
  return (
    <Section id="Education">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionTitle variants={fadeInUp}>Education</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Academic foundation in computer science with cybersecurity focus.
        </SectionSubtitle>

        <Card variants={fadeInUp}>
          <LogoWrapper>
            {education.img ? (
              <Logo src={education.img} alt={education.institution} />
            ) : (
              <span style={{ fontSize: 28 }}>🎓</span>
            )}
          </LogoWrapper>

          <Info>
            <Degree>{education.degree}</Degree>
            <Institution>{education.institution}</Institution>
            <Period>{education.period}</Period>
            <HighlightsLabel>Key Areas</HighlightsLabel>
            <HighlightList>
              {keyHighlights.map((item, i) => (
                <HighlightItem key={i}>{item}</HighlightItem>
              ))}
            </HighlightList>
          </Info>
        </Card>
      </Inner>
    </Section>
  );
};

export default Education;
