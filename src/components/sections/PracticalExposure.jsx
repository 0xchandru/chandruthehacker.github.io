import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { practicalExposure } from "../../data/constants";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bgLight}30;
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
  font-style: italic;
  margin-bottom: 48px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent}60,
      ${({ theme }) => theme.primary}30
    );
    border-radius: 2px;
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  padding: 0 0 40px 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -21px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    border: 2px solid ${({ theme }) => theme.bg};
    box-shadow: 0 0 0 2px ${({ $color }) => $color}60;
  }
`;

const EntryHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  flex-shrink: 0;
  margin-top: 2px;

  ${({ $type }) => {
    switch ($type) {
      case 'LAB':
        return `
          background: rgba(0, 255, 136, 0.12);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.3);
        `;
      case 'SIMULATION':
        return `
          background: rgba(0, 170, 255, 0.12);
          color: #00aaff;
          border: 1px solid rgba(0, 170, 255, 0.3);
        `;
      case 'RESEARCH':
        return `
          background: rgba(255, 170, 0, 0.12);
          color: #ffaa00;
          border: 1px solid rgba(255, 170, 0, 0.3);
        `;
      case 'COMPETITION':
        return `
          background: rgba(255, 68, 68, 0.12);
          color: #ff4444;
          border: 1px solid rgba(255, 68, 68, 0.3);
        `;
      default:
        return '';
    }
  }}
`;

const EntryTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.3;
`;

const Platform = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin: 8px 0 12px;
  max-width: 640px;
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
`;

const ToolChip = styled.span`
  padding: 3px 10px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const DateLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
`;

const ProofLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const categoryColors = {
  LAB: "#00ff88",
  SIMULATION: "#00aaff",
  RESEARCH: "#ffaa00",
  COMPETITION: "#ff4444",
};

const PracticalExposure = () => {
  return (
    <Section id="Exposure">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <SectionTitle variants={fadeInUp}>Practical Exposure</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          "What I've done maps to what your SOC team does daily."
        </SectionSubtitle>

        <Timeline>
          {practicalExposure.map((item, i) => (
            <Entry
              key={i}
              variants={fadeInUp}
              $color={categoryColors[item.category] || "#888"}
            >
              <EntryHeader>
                <CategoryBadge $type={item.category}>{item.category}</CategoryBadge>
                <div>
                  <EntryTitle>
                    {item.title}
                    {item.platform && (
                      <> — <Platform>{item.platform}</Platform></>
                    )}
                  </EntryTitle>
                </div>
              </EntryHeader>

              <Description>{item.description}</Description>

              <ToolRow>
                {item.tools.map((tool, j) => (
                  <ToolChip key={j}>{tool}</ToolChip>
                ))}
              </ToolRow>

              <DateLine>
                <span>📅 {item.date}</span>
                {item.proof && (
                  <ProofLink
                    href={item.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Proof ↗
                  </ProofLink>
                )}
              </DateLine>
            </Entry>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default PracticalExposure;
