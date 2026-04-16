import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { practicalExposure } from "../../data/constants";
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
  margin-bottom: 48px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent}50,
      ${({ theme }) => theme.primary}20
    );
    border-radius: 2px;
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  padding: 0 0 44px 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -21px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    border: 2px solid ${({ theme }) => theme.bg};
    box-shadow: 0 0 0 2px ${({ $color }) => $color}50;
  }
`;

const EntryCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 22px 24px;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}25;
  }
`;

const EntryTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;

const EntryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${({ $type }) => {
    switch ($type) {
      case 'LAB':
        return `
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.25);
        `;
      case 'SIMULATION':
        return `
          background: rgba(0, 170, 255, 0.1);
          color: #00aaff;
          border: 1px solid rgba(0, 170, 255, 0.25);
        `;
      case 'COMPETITION':
        return `
          background: rgba(255, 68, 68, 0.1);
          color: #ff6060;
          border: 1px solid rgba(255, 68, 68, 0.25);
        `;
      default:
        return `
          background: rgba(255, 170, 0, 0.1);
          color: #ffaa00;
          border: 1px solid rgba(255, 170, 0, 0.25);
        `;
    }
  }}
`;

const EntryTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Platform = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const DateLine = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.68;
  color: ${({ theme }) => theme.text_secondary};
  margin: 12px 0 14px;
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`;

const ToolChip = styled.span`
  padding: 3px 9px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const ProofLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const categoryColors = {
  LAB: "#00ff88",
  SIMULATION: "#00aaff",
  RESEARCH: "#ffaa00",
  COMPETITION: "#ff6060",
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
          Hands-on security work across simulations, labs, and competitions — mapped to real SOC workflows.
        </SectionSubtitle>

        <Timeline>
          {practicalExposure.map((item, i) => (
            <Entry
              key={i}
              variants={fadeInUp}
              $color={categoryColors[item.category] || "#888"}
            >
              <EntryCard>
                <EntryTop>
                  <EntryLeft>
                    <CategoryBadge $type={item.category}>{item.category}</CategoryBadge>
                    <EntryTitle>
                      {item.title}
                      {item.platform && (
                        <> — <Platform>{item.platform}</Platform></>
                      )}
                    </EntryTitle>
                  </EntryLeft>
                  <DateLine>{item.date}</DateLine>
                </EntryTop>

                <Description>{item.description}</Description>

                <ToolRow>
                  {item.tools.map((tool, j) => (
                    <ToolChip key={j}>{tool}</ToolChip>
                  ))}
                  {item.proof && (
                    <ProofLink
                      href={item.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Proof ↗
                    </ProofLink>
                  )}
                </ToolRow>
              </EntryCard>
            </Entry>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default PracticalExposure;
